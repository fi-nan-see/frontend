import { NgModule } from '@angular/core';
import { PlanComponent } from './plan.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {TuiLoaderModule} from "@taiga-ui/core";



@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    AsyncPipe,
    NgIf,
    TuiLoaderModule
  ],
  exports: [
    PlanComponent
  ]
})
export class PlanModule { }
