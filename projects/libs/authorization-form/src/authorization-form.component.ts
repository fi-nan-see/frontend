import {Component, OnDestroy} from '@angular/core';
import {BehaviorSubject, defer, Observable, Subject, takeUntil, tap} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthorizationState, User} from 'projects/libs/authorization';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from "./authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'authorization-form',
  templateUrl:  `authorization-form.component.html`,
  styleUrls: ['authorization-form.component.css']
})
export class AuthorizationFormComponent implements OnDestroy {
  loginButtonClick$ = new Subject<void>();
  logoutButtonClick$ = new Subject<void>();
  authorizeBotButtonClick$ = new Subject<void>();
  loading$ = new BehaviorSubject<boolean>(false);
  botAuthorizing$ = new BehaviorSubject<boolean>(false);

  user$: Observable<User | null>;

  destroy$ = new Subject<void>();

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private readonly authService: AuthorizationService,
              store: Store<AuthorizationState>) {

    this.user$ = store.pipe(select('user'));

    this.loginButtonClick$.pipe(takeUntil(this.destroy$)).subscribe(
      _ => {
        const login = this.loginForm.value.login ?? '';
        const password = this.loginForm.value.password ?? '';
        this.loading$.next(true);
        this.authService.authorize(login, password)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => this.loading$.next(false));
      }
    );

    this.authorizeBotButtonClick$.pipe(takeUntil(this.destroy$))
      .subscribe(_ => {
        this.botAuthorizing$.next(true);
        this.authService.authorizeTgBot().pipe(
          takeUntil(this.destroy$),
          tap(response => {
            window.open('https://t.me/FinanseeBot?start=' + response.key)?.focus();
          })
        ).subscribe(_ => this.botAuthorizing$.next(false));
      });

    this.logoutButtonClick$.pipe(takeUntil(this.destroy$)).subscribe(
      _ => this.authService.logout()
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
