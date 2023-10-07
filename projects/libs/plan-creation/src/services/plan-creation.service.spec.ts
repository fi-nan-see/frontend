import { TestBed } from '@angular/core/testing';

import { PlanCreationService } from './plan-creation.service';

describe('PlanCreationService', () => {
  let service: PlanCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
