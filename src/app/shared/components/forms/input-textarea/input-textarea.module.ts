import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextareaComponent } from './input-textarea.component';

@NgModule({
  declarations: [InputTextareaComponent],
  exports: [InputTextareaComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class InputTextareaModule {}
