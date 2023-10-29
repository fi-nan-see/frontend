import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'lib-plan-creation',
  templateUrl: './plan-creation.component.html',
  styleUrls: [
    './plan-creation.component.css'
  ],
})
export class PlanCreationComponent {
  planForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    initialBalance: new FormControl(0, [Validators.required]),
    period: new FormControl()
  });
}
