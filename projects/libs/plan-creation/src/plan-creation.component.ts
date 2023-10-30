import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreatePlanRequest} from 'projects/libs/api/src/lib/dtos/create-plan-request';
import {PlanClient} from 'projects/libs/api/src/lib/plan-client';
import {BehaviorSubject, debounceTime, Subject, takeUntil, tap} from "rxjs";
import {Router} from "@angular/router";

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
    initialBalance: new FormControl(0, [Validators.required]),
    period: new FormControl()
  });

  constructor(planClient: PlanClient, router: Router) {
    this.onButtonClick$.pipe(
      takeUntil(this.destroy$),
      tap(() => {
        const startDate = this.planForm.value.period.from;
        const endDate = this.planForm.value.period.to;

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
