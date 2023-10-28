import { NgModule } from '@angular/core';
import { TransactionCarouselComponent } from './transaction-carousel.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import {NgForOf, NgIf} from "@angular/common";
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";
import {TuiFormatNumberPipeModule} from "@taiga-ui/core";
import {TuiIslandModule} from "@taiga-ui/kit";



@NgModule({
  declarations: [
    TransactionCarouselComponent,
    TransactionComponent
  ],
  imports: [
    NgIf,
    TuiCurrencyPipeModule,
    TuiFormatNumberPipeModule,
    TuiIslandModule,
    NgForOf
  ],
  exports: [
    TransactionCarouselComponent
  ]
})
export class TransactionCarouselModule { }
