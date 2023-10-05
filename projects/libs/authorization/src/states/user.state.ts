import {User} from "../models";

export interface UserState {
  readonly user: User | null;
}
