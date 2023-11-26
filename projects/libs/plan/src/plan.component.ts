import {Component, Input, OnDestroy} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, share, shareReplay, Subject, takeUntil, tap} from "rxjs";
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
  loadingFailed$: Observable<boolean>;

  incomes$: Observable<IncomeDto[]>;
  outcomes$: Observable<OutcomeDto[]>;

  onDeleteButtonClick$ = new Subject<void>();

  deleting$ = new BehaviorSubject(false);
  destroy$ = new Subject<void>();


  constructor(planService: PlanService,
              route: ActivatedRoute,
              router: Router) {
    const planId = route.snapshot.paramMap.get('id') ?? '';
    this.plan$ = planService.getPlan(planId).pipe(
      catchError(() => of({} as PlanDto)),
      shareReplay({bufferSize: 1, refCount: false})
    );

    this.loadingFailed$ = this.plan$.pipe(
      map((plan) => !Object.keys(plan).length)
    )

    this.incomes$ = this.plan$.pipe(map(plan => plan.incomes))
    this.outcomes$ = this.plan$.pipe(map(plan => plan.outcomes))

    this.onDeleteButtonClick$.pipe(
      takeUntil(this.destroy$),
      tap(() => {
        this.deleting$.next(true);
        planService.deletePlan(planId).pipe(
          takeUntil(this.destroy$),
          tap(() => router.navigate(['plan-list']))
        ).subscribe();
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
