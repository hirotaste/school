import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputPasswordComponent } from './input-password.component';

@NgModule({
  declarations: [InputPasswordComponent],
  exports: [InputPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class InputPasswordModule {}
