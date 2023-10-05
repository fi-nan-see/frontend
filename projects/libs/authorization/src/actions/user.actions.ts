import { Action } from "@ngrx/store";
import {User} from "../models";

export enum ActionTypes {
  Login = '[USER] Login',
  Logout = '[USER] Logout'
}

export class LoginUser implements Action {
  readonly type = ActionTypes.Login;

  constructor(public payload: User) {}
}

export class LogoutUser implements Action {
  readonly type = ActionTypes.Logout;

  public payload: User | null = null;
}

export type UserAction = LoginUser | LogoutUser;
