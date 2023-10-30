import {Injectable} from '@angular/core';
import {PlanDto} from "../dtos";
import {delay, map, Observable, of, timer} from "rxjs";
import {PlanClient} from 'projects/libs/api/src/lib/plan-client';
import {GetPlanRequest} from 'projects/libs/api/src/lib/dtos/get-plan-request';
import {DeletePlanRequest} from 'projects/libs/api/src/lib/dtos/delete-plan-request';

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
            id: plan.id,
            name: plan.name,
            startDate: plan.start_date,
            endDate: plan.end_date,
            initialBalance: plan.initial_balance,
            currentBalance: plan.current_balance,
            currentDailyBalance: plan.current_daily_balance ?? 0,
            remains: 0,
            incomes: plan.incomes.map(income => {
              return {
                id: income.id,
                name: income.name,
                date: income.date,
                sum: income.amount
              }
            }),
            outcomes: plan.outcomes.map(outcome => {
              return {
                id: outcome.id,
                name: outcome.name,
                date: outcome.date,
                sum: outcome.amount
              }
            })
          }
        })
      );
  }

  deletePlan(id: string): Observable<void> {
    return this.planClient.deletePlanById(new DeletePlanRequest(id))
      .pipe(map(() => {
      }));
  }
}
