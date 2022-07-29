import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstNameAndLastAbbreviated'
})
export class FirstNameAndLastAbbreviatedPipe implements PipeTransform {
  transform(name: string): string {
    if (!(name || '').length) {
      return '';
    }

    const nameSprited = name.toLowerCase().split(' ');
    const last = nameSprited.length > 1 ? nameSprited[nameSprited.length - 1] : '';
    return (
      nameSprited[0].charAt(0).toUpperCase() +
      nameSprited[0].slice(1) +
      (nameSprited.length > 1 ? ' ' + last.substr(0, 1).toUpperCase() + '.' : '')
    );
  }
}
