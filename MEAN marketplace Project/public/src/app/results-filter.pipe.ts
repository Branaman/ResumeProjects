import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultsFilter'
})
export class ResultsFilterPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    console.log(value);
    console.log(items);
    if (value === ""|| value ===undefined){
      return items;
    }
    if (!items) {
      return []
    };
    return items.filter(it => {
      return it.user.includes(value) || ((it.score/3)*100).toString().includes(value)
    });
  }
}
