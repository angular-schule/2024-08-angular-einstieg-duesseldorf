import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro',
  standalone: true
})
export class EuroPipe implements PipeTransform {

  transform(value: number): string {
    return formatNumber(value, 'en_US', '1.2-2') + ' €';
  }

}


//  {{  book.price | euro }}
