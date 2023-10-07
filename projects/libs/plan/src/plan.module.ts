import { NgModule } from '@angular/core';
import { PlanComponent } from './plan.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TuiLoaderModule} from "@taiga-ui/core";
import {TuiIslandModule} from "@taiga-ui/kit";
import { IncomeComponent } from './components/income/income.component';



@NgModule({
  declarations: [
    PlanComponent,
    IncomeComponent
  ],
  imports: [
    AsyncPipe,
    NgIf,
    TuiLoaderModule,
    TuiIslandModule,
    NgForOf
  ],
  exports: [
    PlanComponent
  ]
})
export class PlanModule { }
