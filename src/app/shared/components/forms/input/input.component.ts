import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { inputUUID } from '@utils/input-uuid';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

type InputType = 'color' | 'date' | 'datetime-local' | 'month' | 'number' | 'text' | 'time' | 'url' | 'week' | 'email';

const masks = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00'
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: InputType = 'text';
  @Input() disabled: boolean = false;
  @Input() set mask(value: keyof typeof masks) {
    this.useMask = masks[value];
  }

  id = inputUUID();
  useMask: string = '';

  constructor(injector: Injector) {
    super(injector);
  }
}
