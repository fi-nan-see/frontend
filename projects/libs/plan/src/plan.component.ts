import {Component, Input} from '@angular/core';
import {map, Observable} from "rxjs";
import {IncomeDto, OutcomeDto, PlanDto} from "./dtos";
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
  planId: string = '';

  plan$: Observable<PlanDto>;

  incomes$: Observable<IncomeDto[]>;
  outcomes$: Observable<OutcomeDto[]>;

  constructor(private readonly planService: PlanService) {
    this.plan$ = this.planService.getPlan(this.planId);

    this.incomes$ = this.plan$.pipe(map(plan => plan.incomes))
    this.outcomes$ = this.plan$.pipe(map(plan => plan.outcomes))
  }

}
