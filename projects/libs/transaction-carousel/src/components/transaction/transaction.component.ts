import {Component, Input} from '@angular/core';
import {Transaction} from "./models";
import {Nullish} from 'projects/libs/utils/src';

@Component({
  selector: 'lib-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  @Input({required: true})
  transaction: Nullish<Transaction> = null;
}
