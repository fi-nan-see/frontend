import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreatePlanRequest} from 'projects/libs/api/src/lib/dtos/create-plan-request';
import {PlanClient} from 'projects/libs/api/src/lib/plan-client';
import {BehaviorSubject, debounceTime, Subject, takeUntil, tap} from "rxjs";
import {Router} from "@angular/router";
import {TuiDayRange} from "@taiga-ui/cdk";
import { Nullish } from 'projects/libs/utils/src';

@Component({
  selector: 'lib-plan-creation',
  templateUrl: './plan-creation.component.html',
  styleUrls: [
    './plan-creation.component.css'
  ],
})
export class PlanCreationComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  loading$ = new BehaviorSubject(false);

  onButtonClick$ = new Subject<void>();

  planForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    initialBalance: new FormControl(null, [Validators.required]),
    period: new FormControl<TuiDayRange | null>(null, [Validators.required])
  });

  constructor(planClient: PlanClient, router: Router) {
    this.onButtonClick$.pipe(
      takeUntil(this.destroy$),
      tap(() => {
        const period = this.planForm.value.period;

        if (!period)
          throw Error();

        const startDate = period.from;
        const endDate = period.to;

        const request = new CreatePlanRequest(
          this.planForm.value.name ?? '',
          this.planForm.value.initialBalance ?? 0,
          new Date(startDate.year, startDate.month, startDate.day),
          new Date(endDate.year, endDate.month, endDate.day)
        );

        this.loading$.next(true);
        planClient.createPlan(request).pipe(
          takeUntil(this.destroy$),
          debounceTime(500),
          tap(async response => {
            this.loading$.next(false);
            await router.navigate(['plan', response.id]);
          })
        ).subscribe()
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
