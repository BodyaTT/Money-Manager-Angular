import { Component, OnInit, Input } from '@angular/core';
import { Operation, OperationType } from '../models/money-manager.models';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  private _operations: Operation[] = [];
  stats: Stats;

  @Input()
  set operations(operations: Operation[]) {
    this._operations = operations;
    this.stats = new Stats(operations);
  }

  get operations(): Operation[] {
    return this._operations;
  }

  constructor() { }

  ngOnInit() {
  }

}

class Stats {
  income: number = 0;
  consumption: number = 0;
  profit: number = 0;
  constructor(operations: Operation[]) {
    operations
      .forEach(o => {
        if (o.type === OperationType.income) {
          this.income += o.sum;
        }
        if (o.type === OperationType.consumption) {
          this.consumption += o.sum;
        }
      });
    this.profit = this.income - this.consumption;
  }
}
