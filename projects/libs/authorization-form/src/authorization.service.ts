import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AuthClient} from "projects/libs/api/src/lib/auth-client";
import {LoginRequestDto} from "projects/libs/api/src/lib/dtos/login-request.dto";
import {LoginUser, LogoutUser} from "projects/libs/authorization/src/actions";
import {AuthorizationState} from "projects/libs/authorization/src/states";
import {Observable, Subject, tap} from "rxjs";
import {error} from "ng-packagr/lib/utils/log";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(
    private readonly authClient: AuthClient,
    private readonly store: Store<AuthorizationState>) {
  }

  public authorize(login: string, password: string): Observable<void> {
    const callback = new Subject<void>();
    this.authClient.login(new LoginRequestDto(login, password))
      .pipe()
      .subscribe(response => {
          this.store.dispatch(new LoginUser({name: login, token: response.token}));
          callback.next();
          callback.complete();
        },
        () => {
          console.log("Ошибка авторизации");
          callback.next();
          callback.complete();
        });

    return callback;
  }

  public logout() {
    this.store.dispatch(new LogoutUser());
  }
}
