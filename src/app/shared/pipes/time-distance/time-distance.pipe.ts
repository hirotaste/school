import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Pipe({
  name: 'timeDistance'
})
export class TimeDistancePipe implements PipeTransform {
  transform(value: Date): string {
    return formatDistance(value, new Date(), { locale: ptBR });
  }
}
