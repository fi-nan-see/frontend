import {Component, Input, OnDestroy} from '@angular/core';
import {map, Observable, Subject, takeUntil, tap} from "rxjs";
import {IncomeDto, OutcomeDto, PlanDto} from "./dtos";
import {PlanService} from "./services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.css'
  ]
})
export class PlanComponent implements OnDestroy {
  plan$: Observable<PlanDto>;

  incomes$: Observable<IncomeDto[]>;
  outcomes$: Observable<OutcomeDto[]>;

  onDeleteButtonClick$ = new Subject<void>();
  destroy$ = new Subject<void>();

  constructor(planService: PlanService,
              route: ActivatedRoute,
              router: Router) {
    const planId = route.snapshot.paramMap.get('id') ?? '';
    this.plan$ = planService.getPlan(planId);

    this.incomes$ = this.plan$.pipe(map(plan => plan.incomes))
    this.outcomes$ = this.plan$.pipe(map(plan => plan.outcomes))

    this.onDeleteButtonClick$.pipe(
      takeUntil(this.destroy$),
      tap(() => {
        planService.deletePlan(planId).pipe(
          takeUntil(this.destroy$),
          tap(async () => {
            console.log("adgadgag")
            await router.navigate(['plan-list']);
          })
        ).subscribe();
      })
    )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
