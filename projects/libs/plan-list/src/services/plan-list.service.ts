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
            id: plan.ID,
            name: plan.Name,
            startDate: plan.StartDate,
            endDate: plan.EndDate,
            currentBalance: 12000,
            isActual: true,
            // currentBalance: plan.current_balance,
            // isActual: plan.is_actual
          }
        }
      ))
    )
  }
}
