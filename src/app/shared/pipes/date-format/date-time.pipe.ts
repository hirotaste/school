import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe extends DatePipe implements PipeTransform {
  transform(value: any): any {
    return super.transform(value, 'yyyy-MM-dd HH:mm');
  }
}
