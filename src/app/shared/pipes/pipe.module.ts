import { NgModule } from '@angular/core';

import { FirstNameAndLastAbbreviatedPipe } from './first-name-and-last-abbreviated.pipe';

@NgModule({
  declarations: [FirstNameAndLastAbbreviatedPipe],
  exports: [FirstNameAndLastAbbreviatedPipe]
})
export class PipeModule {}
