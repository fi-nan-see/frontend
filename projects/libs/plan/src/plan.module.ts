import { NgModule } from '@angular/core';
import { PlanComponent } from './plan.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TuiFormatNumberPipeModule, TuiLoaderModule, TuiScrollbarModule} from "@taiga-ui/core";
import {TuiCarouselModule, TuiIslandModule} from "@taiga-ui/kit";
import { IncomeComponent } from './components/income/income.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";



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
    NgForOf,
    TuiCurrencyPipeModule,
    TuiFormatNumberPipeModule,
    TuiScrollbarModule,
    TuiCarouselModule
  ],
  exports: [
    PlanComponent
  ]
})
export class PlanModule { }
