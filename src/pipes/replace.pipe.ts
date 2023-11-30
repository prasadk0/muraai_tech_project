import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'customPipe'
  })
  export class CustomPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (typeof value === 'string') {
            return value. replace(/\sGMT\+\d+ \(.+\)/, '');
          }
    //   return transformedValue;
    }
  }
  