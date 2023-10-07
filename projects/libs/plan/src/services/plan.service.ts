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
      name: 'План на январь',
      startDate: '2020-01-01',
      endDate: '2020-01-31',
      initialBalance: 1000,
      currentBalance: 22000,
      currentDailyBalance: 1000,
      incomes: [
        {
          id: '1',
          name: 'Зарплата',
          sum: 20000,
          date: '2020-01-01',
        },
        {
          id: '2',
          name: 'Отдадут долг',
          sum: 2000,
          date: '2020-01-04',
        },
        {
          id: '3',
          name: 'Кэшбэк',
          sum: 1000,
          date: '2020-01-14',
        }
      ],
      outcomes: [
        {
          id: '1',
          name: 'Продукты',
          sum: 1000,
          date: '2020-01-01',
        }
      ]
    }).pipe(delay(0));
  }
}
