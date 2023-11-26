import { NgModule } from '@angular/core';
import { PlanComponent } from './plan.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TuiButtonModule, TuiFormatNumberPipeModule, TuiLoaderModule, TuiScrollbarModule} from "@taiga-ui/core";
import {TuiCarouselModule, TuiIslandModule} from "@taiga-ui/kit";
import { IncomeComponent } from './components/income/income.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";
import {RouterLink} from "@angular/router";
import {TuiLetModule} from "@taiga-ui/cdk";



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
        TuiCarouselModule,
        RouterLink,
        TuiButtonModule,
        TuiLetModule
    ],
  exports: [
    PlanComponent
  ]
})
export class PlanModule { }
