import {Component, OnDestroy} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthorizationService, AuthorizationState, LoginUser, LogoutUser, User} from 'projects/libs/authorization';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'authorization-form',
  templateUrl: `authorization-form.component.html`,
  styleUrls: ['authorization-form.component.css']
})
export class AuthorizationFormComponent implements OnDestroy {
  login: string = '';
  password: string = '';

  loginButtonClick$ = new Subject<void>();
  logoutButtonClick$ = new Subject<void>();

  user$: Observable<User | null>;

  destroy$ = new Subject<void>();

  loginForm = new FormGroup({
    login: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private readonly authService: AuthorizationService,
    private readonly store: Store<AuthorizationState>) {
    this.user$ = store.pipe(select('user'));

    this.loginButtonClick$.pipe(takeUntil(this.destroy$)).subscribe(
      _ => {
        const user = this.authService.authorize(this.login, this.password);
        this.store.dispatch(new LoginUser(user));
      }
    );

    this.logoutButtonClick$.pipe(takeUntil(this.destroy$)).subscribe(
      _ => {
        this.authService.logout();
        this.store.dispatch(new LogoutUser());
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
