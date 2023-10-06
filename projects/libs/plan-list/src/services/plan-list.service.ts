import {Injectable} from '@angular/core';
import {PlanPreviewDto} from "../dtos";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanListService {

  readonly plans: PlanPreviewDto[] = [
    {
      id: '1',
      startDate: '2020-01-01',
      endDate: '2020-01-31',
      currentBalance: 1000,
      isActual: true
    },
    {
      id: '2',
      startDate: '2020-02-01',
      endDate: '2020-02-29',
      currentBalance: 2000,
      isActual: false
    },
    {
      id: '3',
      startDate: '2020-03-01',
      endDate: '2020-03-31',
      currentBalance: 3000,
      isActual: false
    }
  ];

  constructor() {
  }

  getPlanPreviews(): Observable<PlanPreviewDto[]> {
    return of(this.plans);
  }
}
