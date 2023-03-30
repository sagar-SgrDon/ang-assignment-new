import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as EmployeeMedicalDetails from '../../assets/json/empMed.json';

@Injectable({
  providedIn: 'root',
})
export class EmpMedicalService {
  // empMedData: any = (EmployeeMedicalDetails as any).default;
  // policyMaxAmount = new Subject<any>();
  // constructor() {
  //   console.log(this.empMedData);
  // }
  // getEmpMedical() {
  //   return this.empMedData;
  // }
  // PolicyMaxAmount(salary: number) {
  //   if (salary >= 500000) return this.policyMaxAmount.next(100000);
  //   else return this.policyMaxAmount.next(salary * 2.5);
  // }
  // calBalanceLeft(claimedAmount: number) {
  //   return this.policyMaxAmount - claimedAmount;
  // }
}
