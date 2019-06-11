import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-operation-filter',
  templateUrl: './operation-filter.component.html',
  styleUrls: ['./operation-filter.component.css']
})
export class OperationFilterComponent implements OnInit {

  

  filters = new FormControl();
  filterList: string[] = ['income', 'consumption']; 

  constructor() { }



  ngOnInit() {
  }

}
