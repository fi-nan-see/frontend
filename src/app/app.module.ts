import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "../../projects/libs/authorization";
import {AuthorizationFormModule} from "../../projects/libs/authorization-form/src";
import {PlanListModule} from "../../projects/libs/plan-list/src";
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {WelcomeComponent} from './components/welcome/welcome.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {NavigationModule} from "../../projects/libs/navigation/src";
import {CookieModule} from "../../projects/libs/cookie/src";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AuthorizationFormModule,
    PlanListModule,
    StoreModule.forRoot({user: reducer}),
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    NavigationModule,
    CookieModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit(): void {
    console.log('AppModule.ngOnInit');
  }
}

