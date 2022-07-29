import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule]
})
export class InputModule {}
