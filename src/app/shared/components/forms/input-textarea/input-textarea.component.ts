import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { inputUUID } from '@utils/input-uuid';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextareaComponent,
      multi: true
    }
  ]
})
export class InputTextareaComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() rows: number = 3;

  id = inputUUID();

  constructor(injector: Injector) {
    super(injector);
  }
}
