import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "../../projects/libs/authorization";
import {AuthorizationFormModule} from "../../projects/libs/authorization-form/src";
import {PlanListModule} from "../../projects/libs/plan-list/src";
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AuthorizationFormModule,
    PlanListModule,
    StoreModule.forRoot({user: reducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
