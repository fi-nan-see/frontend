import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { CreatePlanRequest } from 'projects/libs/api/src/lib/dtos/create-plan-request';
import { PlanClient } from 'projects/libs/api/src/lib/plan-client';
import {Subject, tap} from "rxjs";

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

  constructor(planClient: PlanClient) {
    this.onButtonClick$.pipe(
      tap(() => {
        const request = new CreatePlanRequest(
          this.planForm.value.name ?? '',
          this.planForm.value.initialBalance ?? 0,
          new Date(),
          new Date()
        );

        console.log(request);

        planClient.createPlan(request)
          .pipe(tap((response) => {
            console.log(response);
            console.log(this.planForm.value.period)
          }))
          .subscribe();
      })
    ).subscribe();
  }
}
