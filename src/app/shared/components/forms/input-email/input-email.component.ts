import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { inputUUID } from '@utils/input-uuid';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputEmailComponent,
      multi: true
    }
  ]
})
export class InputEmailComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';

  id = inputUUID();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      map(term => {
        if (!term || term.indexOf('@') >= 0 || term.length < 1) {
          return [];
        }

        return ['gmail.com', 'hotmail.com', 'hotmail.com.br', 'outlook.com'].map(domain => `${term}@${domain}`);
      })
    );

  constructor(injector: Injector) {
    super(injector);
  }
}
