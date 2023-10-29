import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanClient {
  baseUrl = "https://d5duolb1cde5dmflb7bd.apigw.yandexcloud.net/api/v1";

  constructor(private readonly httpClient: HttpClient) {
  }

  createPlan() {
    this.httpClient.post(this.baseUrl,
      {
        name: "План на октябрь",
        initial_balance: 10000,
        start_date: "01.10.2023",
        end_date: "31.10.2023"
      })
  }
}
