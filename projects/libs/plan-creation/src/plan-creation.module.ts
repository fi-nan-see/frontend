import { NgModule } from '@angular/core';
import { PlanCreationComponent } from './plan-creation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiCalendarRangeModule, TuiInputDateRangeModule, TuiInputModule, TuiInputNumberModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {RouterLink} from "@angular/router";
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";



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
    TuiCurrencyPipeModule
  ],
  exports: [
    PlanCreationComponent
  ]
})
export class PlanCreationModule { }
