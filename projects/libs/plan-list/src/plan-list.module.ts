import { NgModule } from '@angular/core';
import { PlanListComponent } from './plan-list.component';
import { PlanPreviewComponent } from './components/plan-preview/plan-preview.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";



@NgModule({
  declarations: [
    PlanListComponent,
    PlanPreviewComponent
  ],
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  exports: [
    PlanListComponent
  ]
})
export class PlanListModule { }
