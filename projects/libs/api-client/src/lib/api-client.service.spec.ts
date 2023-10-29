import { TestBed } from '@angular/core/testing';

import { PlanClient } from './plan-client.service';

describe('ApiClientService', () => {
  let service: PlanClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
