import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreatePlanResponse} from "./dtos/create-plan-response";
import {CreatePlanRequest} from "./dtos/create-plan-request";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {GetPlansResponse} from "./dtos/get-plans-response";
import {PlanDto} from "./dtos/plan-dto";
import {GetPlanRequest} from "./dtos/get-plan-request";
import {DeletePlanRequest} from "./dtos/delete-plan-request";
import {CookieService} from "ngx-cookie-service";
import {User} from "projects/libs/authorization";

@Injectable()
export class PlanClient {
  private url = "https://d5duolb1cde5dmflb7bd.apigw.yandexcloud.net/api/v1/plans"

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService) {
  }

  createPlan(request: CreatePlanRequest): Observable<CreatePlanResponse> {
    return this.httpClient.post<CreatePlanResponse>(this.url, request, this.getOptions())
  }

  getPlansList(): Observable<GetPlansResponse[]> {
    return this.httpClient.get<GetPlansResponse[]>(this.url, this.getOptions())
  }

  getPlanById(request: GetPlanRequest): Observable<PlanDto> {
    return this.httpClient.get<PlanDto>(this.url + "/" + request.id, this.getOptions())
  }

  deletePlanById(request: DeletePlanRequest): Observable<{}> {
    return this.httpClient.delete(this.url + "/" + request.id, this.getOptions())
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
