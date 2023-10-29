import {Injectable} from '@angular/core';
import {PlanDto} from "../dtos";
import {delay, map, Observable, of} from "rxjs";
import {PlanClient} from 'projects/libs/api/src/lib/plan-client';
import {GetPlanRequest} from 'projects/libs/api/src/lib/dtos/get-plan-request';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  constructor(private readonly planClient: PlanClient) {
  }

  getPlan(id: string): Observable<PlanDto> {
    return this.planClient.getPlanById(new GetPlanRequest(id))
      .pipe(
        map(plan => {
          return {
            id: plan.ID,
            name: plan.Name,
            startDate: plan.StartDate,
            endDate: plan.EndDate,
            initialBalance: plan.InitialBalance,
            currentBalance: plan.current_balance,
            currentDailyBalance: plan.current_daily_balance,
            remains: 0,
            incomes: [],
            outcomes: []
          }
        })
      );
  }
}
