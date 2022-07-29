import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IZipCode } from '@interfaces/izip-code';
import { ZipCodeService } from '@services/zipcode.service';
import { inputUUID } from '@utils/input-uuid';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-cep',
  templateUrl: './input-cep.component.html',
  styleUrls: ['./input-cep.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCepComponent,
      multi: true
    }
  ]
})
export class InputCepComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Output() zipCodeSearched: EventEmitter<IZipCode> = new EventEmitter();

  id = inputUUID();
  lookingForZipCode = false;

  constructor(private _zipCode: ZipCodeService, injector: Injector) {
    super(injector);
  }

  async handleSearchCep() {
    const cep = this.control.value;

    if (cep && cep.length === 8) {
      this.lookingForZipCode = true;

      const cepResponse = await this._zipCode.search(cep).catch(() => null);
      if (cepResponse) {
        this.zipCodeSearched.emit(cepResponse);
      }

      this.lookingForZipCode = false;
    }
  }
}
