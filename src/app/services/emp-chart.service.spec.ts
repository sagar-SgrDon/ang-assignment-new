import { TestBed } from '@angular/core/testing';

import { EmpChartService } from './emp-chart.service';

describe('EmpChartService', () => {
  let service: EmpChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
