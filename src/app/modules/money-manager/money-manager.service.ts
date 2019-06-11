import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Operation, OperationCategory, IOperationFilter } from './models/money-manager.models';
import { Observable } from 'rxjs';

@Injectable()
export class MoneyManagerService {

  constructor(
    private _http: HttpClient
  ) { }

  getCategories(): Observable<OperationCategory[]> {
    return this._http.get<OperationCategory[]>(environment.apiUrl + 'categories');
  }

  getCategory(id: string): Observable<OperationCategory> {
    if (!id) {
      return null;
    }
    return this._http.get<OperationCategory>(environment.apiUrl + 'categories/' + id);
  }

  getOperations(filter?: IOperationFilter): Observable<Operation[]> {
    if (!filter) {
      return this._http.get<Operation[]>(environment.apiUrl + 'operations');
    }
    let queryUrl = '';
    for (const key in filter) {
      if (filter[key]) {
        filter[key].forEach(f => queryUrl += `${key}=${f}&`);
      }
    }
    return this._http.get<Operation[]>(environment.apiUrl + 'operations?' + queryUrl);
  }

  getOperation(id: string): Observable<Operation> {
    if (!id) {
      return null;
    }
    return this._http.get<Operation>(environment.apiUrl + 'operations/' + id);
  }

  addOperation(operation: Operation): Observable<Operation> {
    // MAP TO DTO (CLIENT DATA-MODEL => SERVER DATA MODEL)
    return this._http.post(environment.apiUrl + 'operations', operation) as Observable<Operation>;
  }
}
