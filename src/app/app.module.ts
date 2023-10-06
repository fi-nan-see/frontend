import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "../../projects/libs/authorization";
import {AuthorizationFormModule} from "../../projects/libs/authorization-form/src";
import {PlanListModule} from "../../projects/libs/plan-list/src";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationFormModule,
    PlanListModule,
    StoreModule.forRoot({user: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
