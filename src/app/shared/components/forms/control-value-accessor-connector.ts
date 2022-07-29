import { Component, Injector, Input, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-base-input',
  template: ''
})
export class ControlValueAccessorConnectorComponent implements ControlValueAccessor {
  private controlDirective = new BehaviorSubject<any>(undefined);

  @ViewChild(FormControlDirective)
  set formControlDirective(value: FormControlDirective) {
    this.controlDirective.next(value);
  }

  @Input()
  formControl: FormControl = new FormControl;

  @Input()
  formControlName: string = '';

  get control(): FormControl {
    return this.formControl || (this.controlContainer?.control?.get(this.formControlName) as FormControl);
  }

  constructor(private injector: Injector) {}

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.controlDirective
      .pipe(
        filter(formControl => formControl !== undefined),
        first()
      )
      .subscribe(formControl => {
        formControl.valueAccessor?.registerOnTouched(fn);
      });
  }

  registerOnChange(fn: any): void {
    this.controlDirective
      .pipe(
        filter(formControl => formControl !== undefined),
        first()
      )
      .subscribe(formControl => {
        formControl.valueAccessor?.registerOnChange(fn);
      });
  }

  writeValue(obj: any): void {
    this.controlDirective
      .pipe(
        filter(formControl => {
          return formControl !== undefined;
        }),
        first()
      )
      .subscribe(formControl => {
        formControl.valueAccessor?.writeValue(obj);
      });
  }

  setDisabledState(isDisabled: boolean): void {
    this.controlDirective
      .pipe(
        filter(formControl => formControl !== undefined),
        first()
      )
      .subscribe(formControl => {
        if (formControl?.valueAccessor?.setDisabledState) {
          formControl.valueAccessor.setDisabledState(isDisabled);
        }
      });
  }
}
