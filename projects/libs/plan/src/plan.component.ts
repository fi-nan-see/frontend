import {Component, Input} from '@angular/core';
import {map, Observable} from "rxjs";
import {IncomeDto, OutcomeDto, PlanDto} from "./dtos";
import {PlanService} from "./services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.css'
  ]
})
export class PlanComponent {
  plan$: Observable<PlanDto>;

  incomes$: Observable<IncomeDto[]>;
  outcomes$: Observable<OutcomeDto[]>;

  constructor(private readonly planService: PlanService,
              private readonly route: ActivatedRoute) {
    const planId = this.route.snapshot.paramMap.get('id') ?? '';
    this.plan$ = this.planService.getPlan(planId);

    this.incomes$ = this.plan$.pipe(map(plan => plan.incomes))
    this.outcomes$ = this.plan$.pipe(map(plan => plan.outcomes))
  }

}
