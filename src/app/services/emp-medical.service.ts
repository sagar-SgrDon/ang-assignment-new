import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpMedicalService {
  constructor() {}

  calcPolicyMaxAmount(salary: number) {
    if (salary <= 500000) return 100000;
    else return salary * 2.5;
  }
}
