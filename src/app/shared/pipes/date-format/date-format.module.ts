import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { DateTimePipe } from './date-time.pipe';

@NgModule({
  declarations: [DateFormatPipe, DateTimePipe],
  exports: [DateFormatPipe, DateTimePipe],
  imports: [CommonModule]
})
export class DateFormatModule {}
