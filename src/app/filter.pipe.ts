import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(numberList?: number[], number?: number): number[] {

    if(numberList){
      return numberList?.filter((element)=> element > (number ? number : 0));
    }

    return []
  }

}
