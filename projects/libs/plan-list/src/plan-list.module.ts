import { NgModule } from '@angular/core';
import { PlanListComponent } from './plan-list.component';
import { PlanPreviewComponent } from './components/plan-preview/plan-preview.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TuiBadgeModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiLinkModule} from "@taiga-ui/core";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    PlanListComponent,
    PlanPreviewComponent
  ],
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    TuiIslandModule,
    TuiLinkModule,
    RouterLink,
    RouterLinkActive,
    TuiBadgeModule
  ],
  exports: [
    PlanListComponent
  ]
})
export class PlanListModule { }
