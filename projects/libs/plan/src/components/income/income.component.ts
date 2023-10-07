import {Component, Input} from '@angular/core';
import {IncomeDto} from "../../dtos";
import { Nullish } from 'projects/libs/utils/src';

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  @Input({required: true})
  income: Nullish<IncomeDto> = null;
}
