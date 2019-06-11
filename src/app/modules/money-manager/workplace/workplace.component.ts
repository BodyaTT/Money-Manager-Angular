import { Component, OnInit, Input } from '@angular/core';
import { MoneyManagerService } from '../money-manager.service';
import { OperationCategory, Operation, OperationType, IOperationFilter } from '../models/money-manager.models';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {FormControl} from '@angular/forms';

const DELETED_CATEGORY: OperationCategory = new OperationCategory('DELETED_CATEGORY');

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {

  filters = new FormControl();
  filterList = ['income', 'consumption']; 

  categories: OperationCategory[] = [];
  operations: Operation[] = [];

  operationFilter: IOperationFilter = {};

  _operationFilterType: OperationType;
  set operationFilterType(type: OperationType) {
    this._operationFilterType = type;
    this.operationFilter = { ...this.operationFilter, type: [type] };
  }

  get operationFilterType(): OperationType {
    return this._operationFilterType;
  }

  constructor(
    private _mmService: MoneyManagerService
  ) { }

  ngOnInit() {
    this._getCategories();
    this._getOperations();
  }

  private _getCategories() {
    this._mmService.getCategories()
      .subscribe(res => {
        this.categories = res;
      });
  }

  private _getOperations() {
    this._mmService.getOperations()
      .subscribe(res => {
        this.operations = res;
      });
  }

  getCategory(id: string): OperationCategory {
    return this.categories.find(c => c.id === id) ?
      this.categories.find(c => c.id === id) :
      DELETED_CATEGORY;
  }



  addOperation(operation: Operation) {
    // console.log('CLIENT', operation);
    this._mmService.addOperation(operation)
      .subscribe(res => {
        this.operations = [
          ...this.operations,
          res
        ];
        // this.operations.push(res);
        console.log('SERVER', res);
      });
  }

}
