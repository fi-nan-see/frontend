import { NgModule } from '@angular/core';
import { PlanCreationComponent } from './plan-creation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiCalendarRangeModule, TuiInputDateRangeModule, TuiInputModule, TuiInputNumberModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiLoaderModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {RouterLink, RouterModule} from "@angular/router";
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";
import { ApiModule } from 'projects/libs/api/src/public-api';
import { PlanClient } from 'projects/libs/api/src/lib/plan-client';
import {AsyncPipe} from "@angular/common";



@NgModule({
  declarations: [
    PlanCreationComponent
  ],
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    RouterLink,
    TuiInputNumberModule,
    TuiCalendarRangeModule,
    TuiInputDateRangeModule,
    TuiTextfieldControllerModule,
    TuiCurrencyPipeModule,
    ApiModule,
    RouterModule,
    TuiLoaderModule,
    AsyncPipe
  ],
  exports: [
    PlanCreationComponent
  ],
  providers: [
    PlanClient
  ]
})
export class PlanCreationModule { }
