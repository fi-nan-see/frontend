import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {PlanDto} from "./dtos";
import {PlanService} from "./services";

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.css'
  ]
})
export class PlanComponent {
  @Input({required: true})
  planId: string = '1';

  plan$: Observable<PlanDto>;

  constructor(private readonly planService: PlanService) {
    this.plan$ = this.planService.getPlan(this.planId);
  }
}
