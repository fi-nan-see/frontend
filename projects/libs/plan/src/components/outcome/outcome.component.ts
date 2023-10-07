import {Component, Input} from '@angular/core';
import {OutcomeDto} from "../../dtos";
import {Nullish} from 'projects/libs/utils/src';
import {tuiFormatNumber} from "@taiga-ui/core";

@Component({
  selector: 'outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent {
  @Input({required: true})
  outcome: Nullish<OutcomeDto> = null;
  protected readonly tuiFormatNumber = tuiFormatNumber;
}
