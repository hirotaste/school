import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountToDirective } from './count-to.directive';

@NgModule({
  declarations: [CountToDirective],
  imports: [CommonModule],
  exports: [CountToDirective]
})
export class DirectivesModule {}
