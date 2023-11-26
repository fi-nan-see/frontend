import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequestDto} from "./dtos/login-request.dto";
import {Observable} from "rxjs";
import {LoginResponseDto} from "./dtos/login-response.dto";
import {CookieService} from "ngx-cookie-service";
import { User } from "projects/libs/authorization/src/models";
import {TgResponseDto} from "./dtos/tg-response.dto";

@Injectable()
export class AuthClient {
  private baseUrl = "https://d5duolb1cde5dmflb7bd.apigw.yandexcloud.net/api/v1"

  constructor(private readonly httpClient: HttpClient,
              private readonly cookieService: CookieService) {
  }

  login(request: LoginRequestDto): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(this.baseUrl + '/' + "login", request);
  }

  authorizeBot(): Observable<TgResponseDto> {
    return this.httpClient.get<TgResponseDto>(this.baseUrl + '/' + 'tg', this.getOptions())
  }

  getOptions(): {headers: HttpHeaders} {
    return {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.getToken()
      })
    }
  }

  getToken(): string {
    const userString = this.cookieService.get('user');
    const user: User = JSON.parse(userString);

    return user.token;
  }
}
