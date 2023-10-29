import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginRequestDto} from "./dtos/login-request.dto";
import {Observable} from "rxjs";
import {LoginResponseDto} from "./dtos/login-response.dto";

@Injectable()
export class AuthClient {
  private baseUrl = "https://d5duolb1cde5dmflb7bd.apigw.yandexcloud.net/api/v1"

  constructor(private readonly httpClient: HttpClient) {
  }

  login(request: LoginRequestDto): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(this.baseUrl + '/' + "login", request);
  }
}
