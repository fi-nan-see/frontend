import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreatePlanRequest} from 'projects/libs/api/src/lib/dtos/create-plan-request';
import {PlanClient} from 'projects/libs/api/src/lib/plan-client';
import {Subject, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'lib-plan-creation',
  templateUrl: './plan-creation.component.html',
  styleUrls: [
    './plan-creation.component.css'
  ],
})
export class PlanCreationComponent {
  onButtonClick$ = new Subject<void>();

  planForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    initialBalance: new FormControl(0, [Validators.required]),
    period: new FormControl()
  });

  constructor(planClient: PlanClient, router: Router) {
    this.onButtonClick$.pipe(
      tap(() => {
        const startDate = this.planForm.value.period.from;
        const endDate = this.planForm.value.period.to;

        const request = new CreatePlanRequest(
          this.planForm.value.name ?? '',
          this.planForm.value.initialBalance ?? 0,
          new Date(startDate.year, startDate.month, startDate.day),
          new Date(endDate.year, endDate.month, endDate.day)
        );

        planClient.createPlan(request).pipe(
            tap(async response => {
              await router.navigate(['plan', response.id]);
            })
          ).subscribe()
      })
    ).subscribe();
  }
}
