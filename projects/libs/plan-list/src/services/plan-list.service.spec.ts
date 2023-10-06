import { TestBed } from '@angular/core/testing';

import { PlanListService } from './plan-list.service';

describe('PlanListService', () => {
  let service: PlanListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
