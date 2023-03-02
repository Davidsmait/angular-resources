import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterSting: string, propName: string): any{
    if (value.length === 0 || filterSting === ''){
      return value;
    }

    const resultArray = []
    for (const item of value){
      console.log(item)
      if (item[propName] === filterSting){
        resultArray.push(item)
      }
    }
    return resultArray

  }

}
