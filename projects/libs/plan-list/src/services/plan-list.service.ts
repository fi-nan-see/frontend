import {Injectable} from '@angular/core';
import {PlanPreviewDto} from "../dtos";
import {map, Observable} from "rxjs";
import { PlanClient } from 'projects/libs/api/src/lib/plan-client';

@Injectable({
  providedIn: 'root'
})
export class PlanListService {
  constructor(private readonly planClient: PlanClient) {
  }

  getPlanPreviews(): Observable<PlanPreviewDto[]> {
    return this.planClient.getPlansList().pipe(
      map(plans => plans.map<PlanPreviewDto>(
        (plan) => {
          return {
            id: plan.id,
            name: plan.name,
            startDate: plan.start_date,
            endDate: plan.end_date,
            currentBalance: plan.current_balance,
            isActual: plan.is_actual,
          }
        }
      ))
    )
  }
}
