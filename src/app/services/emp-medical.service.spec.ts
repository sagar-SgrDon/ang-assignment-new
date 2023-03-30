import { TestBed } from '@angular/core/testing';

import { EmpMedicalService } from './emp-medical.service';

describe('EmpMedicalService', () => {
  let service: EmpMedicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpMedicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
