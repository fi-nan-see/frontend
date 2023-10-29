import {HttpClient} from "@angular/common/http";
import {CreatePlanResponse} from "./dtos/create-plan-response";
import {CreatePlanRequest} from "./dtos/create-plan-request";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PlanClient {
  private url = "https://d5duolb1cde5dmflb7bd.apigw.yandexcloud.net/api/v1/plans"

  constructor(private readonly httpClient: HttpClient) {
  }

  createPlan(request: CreatePlanRequest): Observable<CreatePlanResponse> {
    return this.httpClient.post<CreatePlanResponse>(this.url, request)
  }
}
