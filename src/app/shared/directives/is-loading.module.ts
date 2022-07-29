import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingDirective } from './is-loading.directive';

@NgModule({
  declarations: [IsLoadingDirective],
  exports: [IsLoadingDirective],
  imports: [CommonModule]
})
export class IsLoadingModule {}
