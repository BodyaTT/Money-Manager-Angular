export enum OperationType {
  income = 'income',
  consumption = 'consumption'
}

// export interface IOperationCategory {
//   id: string;
//   name: string;
//   type: OperationType;
// }

export class OperationCategory {
  id: string;
  name: string;
  type: OperationType;
  constructor(name: string) {
    this.name = name;
  }
}

// export interface IOperation {
//   id: string;
//   catId: string;
//   type: OperationType;
//   sum: number;
//   descr: string;
// }

export class Operation {
  id?: string;
  catId: string;
  type: OperationType;
  sum: number;
  descr: string;
  constructor(catId: string, type: OperationType, sum: number, descr: string) {
    this.catId = catId;
    this.type = type;
    this.sum = sum;
    this.descr = descr;
  }
}

export interface IOperationFilter {
  catId?: string[];
  type?: OperationType[];
}
