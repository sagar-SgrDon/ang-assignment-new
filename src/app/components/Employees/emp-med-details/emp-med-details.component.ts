import { Component } from '@angular/core';
import * as EmployeeMedicalDetails from '../../../../assets/json/empMed.json';

@Component({
  selector: 'app-emp-med-details',
  templateUrl: './emp-med-details.component.html',
  styleUrls: ['./emp-med-details.component.css'],
})
export class EmpMedDetailsComponent {
  policyMaxAmount!: number;
  empMedData: any = (EmployeeMedicalDetails as any).default;

  constructor() {}
  calPolicyMaxAmount(salary: number) {
    if (salary < 500000) return (this.policyMaxAmount = 1000000);
    else return (this.policyMaxAmount = salary * 2.5);
  }

  calBalanceLeft(claimedAmount: number) {
    return this.policyMaxAmount - claimedAmount;
  }
}
