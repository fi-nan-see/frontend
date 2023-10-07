import { NgModule } from '@angular/core';
import { PlanCreationComponent } from './plan-creation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiCalendarRangeModule, TuiInputDateRangeModule, TuiInputModule, TuiInputNumberModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import {RouterLink} from "@angular/router";



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
    TuiInputDateRangeModule
  ],
  exports: [
    PlanCreationComponent
  ]
})
export class PlanCreationModule { }
