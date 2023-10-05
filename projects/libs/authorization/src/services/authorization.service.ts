import {Injectable} from '@angular/core';
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public authorize(login: string, password: string): User {
    return {name: login}
  }
}
