import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OperationType, Operation, OperationCategory } from '../models/money-manager.models';

@Component({
  selector: 'app-operation-input',
  templateUrl: './operation-input.component.html',
  styleUrls: ['./operation-input.component.scss']
})
export class OperationInputComponent implements OnInit {

  _operationType: OperationType;
  _categories: OperationCategory[] = [];
  availableCategories: OperationCategory[] = [];

  newOperation: Operation;

  @Output() addedOperation = new EventEmitter();

  @Input()
  set categories(categories: OperationCategory[]) {
    this._categories = categories;
    this._filterCategories();
  }

  set operationType(operationType: OperationType) {
    this._operationType = operationType;
    this._filterCategories();
    this.newOperation = {
      ...this.newOperation,
      type: this.operationType,
      catId: this.operationType === OperationType.consumption ? '0' : '1'
    };
  }

  get operationType(): OperationType {
    return this._operationType;
  }

  get categories(): OperationCategory[] {
    return this._categories;
  }

  constructor() { }

  ngOnInit() {
    this.operationType = OperationType.consumption;
    this.newOperation = new Operation(this.operationType === OperationType.consumption ? '0' : '1', this.operationType, 0, '');
  }

  private _filterCategories() {
    this.availableCategories = this.categories.filter(c => c.type === this.operationType);
  }

  addOperation() {
    // console.log(this.newOperation);
    this.addedOperation.emit(this.newOperation);
  }

}
