import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDistancePipe } from './time-distance.pipe';

@NgModule({
  declarations: [TimeDistancePipe],
  exports: [TimeDistancePipe],
  imports: [CommonModule]
})
export class TimeDistanceModule {}
