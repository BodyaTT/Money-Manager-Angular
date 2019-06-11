import { Component, OnInit } from '@angular/core';
import { Operation, OperationCategory, IOperationFilter, OperationType } from '../models/money-manager.models';
import { MoneyManagerService } from '../money-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  operationId: string;

  operation: Operation;
  operationCategory: OperationCategory;

  categoryOperations: Operation[] = [];

  constructor(
    private _mmService: MoneyManagerService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.operationId = this._route.snapshot.paramMap.get('id');
    this._getOperation();
  }

  private _getOperation() {
    this._mmService.getOperation(this.operationId)
      .subscribe(res => {
        this.operation = res;
        this._getCategory();
      });
  }

  private _getCategory() {
    this._mmService.getCategory(this.operation.catId)
      .subscribe(res => {
        this.operationCategory = res;
        this._getCategoryOperations();
      });
  }

  private _getCategoryOperations() {
    const filter: IOperationFilter = {
      catId: [this.operation.catId]
      // sum: [100000],
      // type: [OperationType.income]
    };
    this._mmService.getOperations(filter)
      .subscribe(res => {
        this.categoryOperations = res;
        // console.log(res);
      });
  }


}
