import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === null) {
      return 'brak numeru konta';
    }
    const charArr: Array<string> = value.split('');
    const arrLength: number = charArr.length;
    if (arrLength !== 26) {
      return 'err: błędny format';
    } else {

      let tmpVal = `${charArr[0]}${charArr[1]}`;

      for (let i = 0; i < (arrLength - 2); i++) {
        // if ((i + 1) === 3) {
        //   tmpVal = tmpVal + ' ';
        // }
        if (i % 4 === 0) {
          tmpVal = tmpVal + ' ';
        }
        tmpVal = tmpVal + charArr[i + 2];
      }
      value = tmpVal;
    }
    return value;
  }
}
