import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace/workplace.component';
import { OperationInputComponent } from './operation-input/operation-input.component';
import { MoneyManagerService } from './money-manager.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatsComponent } from './stats/stats.component';
import { RouterModule, Route } from '@angular/router';
import { WrapComponent } from './wrap/wrap.component';
import { DetailsComponent } from './details/details.component';
import { OperationsPipe } from './_pipes/operations.pipe';
import { OperationFilterComponent } from './operation-filter/operation-filter.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: WrapComponent,
    children: [
      {
        path: '',
        component: WorkplaceComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [WorkplaceComponent, OperationInputComponent, StatsComponent, WrapComponent, DetailsComponent, OperationsPipe, OperationFilterComponent],
  exports: [WorkplaceComponent],
  providers: [MoneyManagerService]
})
export class MoneyManagerModule { }
