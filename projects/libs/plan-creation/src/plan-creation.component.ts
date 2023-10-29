import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { PlanClient } from 'projects/libs/api-client/src';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'lib-plan-creation',
  templateUrl: './plan-creation.component.html',
  styleUrls: [
    './plan-creation.component.css'
  ],
})
export class PlanCreationComponent {
  loginButtonClick$ = new Subject<void>();

  planForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    initialBalance: new FormControl(0, [Validators.required]),
    period: new FormControl()
  });

  constructor(private readonly planClient: PlanClient) {
  }

  createPlan() {
    this.loginButtonClick$.pipe().subscribe(
      _ => {
        this.planClient.createPlan();
      }
    );
  }
}
