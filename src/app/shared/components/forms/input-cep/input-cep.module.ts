import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { InputCepComponent } from './input-cep.component';

@NgModule({
  declarations: [InputCepComponent],
  exports: [InputCepComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule]
})
export class InputCepModule {}
