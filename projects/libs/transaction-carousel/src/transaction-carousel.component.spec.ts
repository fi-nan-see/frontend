import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCarouselComponent } from './transaction-carousel.component';

describe('TransactionCarouselComponent', () => {
  let component: TransactionCarouselComponent;
  let fixture: ComponentFixture<TransactionCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionCarouselComponent]
    });
    fixture = TestBed.createComponent(TransactionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
