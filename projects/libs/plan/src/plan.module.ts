import { NgModule } from '@angular/core';
import { PlanComponent } from './plan.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TuiLoaderModule} from "@taiga-ui/core";
import {TuiIslandModule} from "@taiga-ui/kit";
import { IncomeComponent } from './components/income/income.component';
import { OutcomeComponent } from './components/outcome/outcome.component';



@NgModule({
  declarations: [
    PlanComponent,
    IncomeComponent,
    OutcomeComponent
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
