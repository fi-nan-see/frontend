import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthorizationState} from "../states";
import {LoginUser, LogoutUser} from "../actions";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private readonly store: Store<AuthorizationState>) {
  }

  public authorize(login: string, password: string) {
    this.store.dispatch(new LoginUser({name: login}));
  }

  public logout() {
    this.store.dispatch(new LogoutUser());
  }
}
