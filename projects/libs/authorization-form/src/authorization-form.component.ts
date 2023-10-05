import {Component} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthorizationService, AuthorizationState, LoginUser, User} from 'projects/libs/authorization';

@Component({
  selector: 'authorization-form',
  templateUrl: `authorization-form.component.html`,
  styleUrls: ['authorization-form.component.css']
})
export class AuthorizationFormComponent {
  login: string = '';
  password: string = '';

  loginButtonClick$ = new Subject<void>();
  user$: Observable<User | null>;

  constructor(
    private readonly authService: AuthorizationService,
    private readonly store: Store<AuthorizationState>) {
    this.user$ = store.pipe(select('user'));

    this.loginButtonClick$.pipe().subscribe(
      _ => {
        const user = this.authService.authorize(this.login, this.password);
        this.store.dispatch(new LoginUser(user));
      }
    )
  }
}
