import {Component, Input} from '@angular/core';
import {Transaction} from "./components/transaction/models";

@Component({
  selector: 'lib-transaction-carousel',
  templateUrl: './transaction-carousel.component.html',
  styleUrls: [
    './transaction-carousel.component.css'
  ]
})
export class TransactionCarouselComponent {
  @Input({required: true})
  transactions: Transaction[] = [];
}
