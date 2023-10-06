import {NgModule, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CookieService} from "ngx-cookie-service";
import {AuthorizationState, LoginUser} from 'projects/libs/authorization';
import {skip} from "rxjs";

@NgModule({})
export class CookieModule {
  constructor(
    private cookieService: CookieService,
    private userStore: Store<AuthorizationState>) {
    this.userStore.select('user')
      .pipe(skip(1))
      .subscribe((user) => {
      if (user) {
        this.cookieService.set('user', JSON.stringify(user));
      } else {
        this.cookieService.delete('user');
      }
    });

    const user = this.cookieService.get('user');
    if (user) {
      this.userStore.dispatch(new LoginUser(JSON.parse(user)));
    }
  }
}
