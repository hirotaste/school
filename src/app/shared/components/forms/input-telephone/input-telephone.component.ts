import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { inputUUID } from '@utils/input-uuid';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-telephone',
  templateUrl: './input-telephone.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTelephoneComponent,
      multi: true
    }
  ]
})
export class InputTelephoneComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  id = inputUUID();

  constructor(injector: Injector) {
    super(injector);
  }
}
