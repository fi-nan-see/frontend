import {Injectable} from '@angular/core';
import {PlanDto} from "../dtos";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  getPlan(id: string): Observable<PlanDto> {
    return of({
      id: '1',
      startDate: '2020-01-01',
      endDate: '2020-01-31',
      initialBalance: 1000,
      currentBalance: 22000,
      currentDailyBalance: 1000,
      incomes: [],
      outcomes: []
    }).pipe(delay(5000));
  }
}
