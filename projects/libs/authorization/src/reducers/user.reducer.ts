import {ActionTypes, UserAction} from "../actions";
import {User} from "../models";
import {Action} from "@ngrx/store";

export function reducer(state: User | null | undefined, action: Action): User | null | undefined {
  switch (action.type) {
    case ActionTypes.Login:
    case ActionTypes.Logout:
      const userAction = <UserAction>action;
      return userAction.payload;

    default:
      return state;
  }
}
