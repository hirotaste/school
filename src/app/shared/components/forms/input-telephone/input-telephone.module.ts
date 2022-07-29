import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { InputTelephoneComponent } from './input-telephone.component';

@NgModule({
  declarations: [InputTelephoneComponent],
  exports: [InputTelephoneComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule]
})
export class InputTelephoneModule {}
