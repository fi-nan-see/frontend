import {User} from "../models";

export interface AuthorizationState {
  readonly user: User | null;
}
