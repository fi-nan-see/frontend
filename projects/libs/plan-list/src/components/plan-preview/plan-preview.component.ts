import {Component, Input} from '@angular/core';
import {PlanPreviewDto} from "../../dtos";
import { Nullish } from 'projects/libs/utils/src';

@Component({
  selector: 'plan-preview',
  templateUrl: './plan-preview.component.html',
  styleUrls: ['./plan-preview.component.css']
})
export class PlanPreviewComponent{
  @Input()
  planPreview: Nullish<PlanPreviewDto>;
}
