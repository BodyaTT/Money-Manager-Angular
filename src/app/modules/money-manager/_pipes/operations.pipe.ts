import { Pipe, PipeTransform } from '@angular/core';
import { Operation, IOperationFilter } from '../models/money-manager.models';

@Pipe({
  name: 'operations'
})
export class OperationsPipe implements PipeTransform {

  transform(operations: Operation[], filter?: IOperationFilter): Operation[] {
    let isFiltered: boolean = false;
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        if (filter[key].length) {
          isFiltered = true;
          break;
        }
      }
    }
    if (!isFiltered) {
      return operations;
    }
    return operations.filter(o => {
      for (const key in filter) {
        if (filter.hasOwnProperty(key)) {
          if (filter[key].find(a => o[key] === a)) {
            return o;
          }
        }
      }
    });
  }

}
