import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PlanListComponent} from "../../../../projects/libs/plan-list/src";
import {WelcomeComponent} from "../../components/welcome/welcome.component";
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";
import {PlanComponent} from "../../../../projects/libs/plan/src";

const routes: Routes = [
  {path: 'plan-list', component: PlanListComponent},
  {path: 'plan/:id', component: PlanComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
