import {Component} from '@angular/core';
import {PlanListService} from "./services";

@Component({
  selector: 'lib-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: [
    './plan-list.component.css'
  ]
})
export class PlanListComponent {
  constructor(private readonly planListService: PlanListService) {
  }

  planPreviews$ = this.planListService.getPlanPreviews();
}
