import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeMedical } from 'src/app/models/employeeMedical';
import { EmpMedicalService } from 'src/app/services/emp-medical.service';
import * as EmployeeMedicalDetails from '../../../../assets/json/empMed.json';

@Component({
  selector: 'app-emp-med-details',
  templateUrl: './emp-med-details.component.html',
  styleUrls: ['./emp-med-details.component.css'],
})
export class EmpMedDetailsComponent implements AfterViewInit {
  policyMaxAmount!: number;
  @ViewChild(MatSort) sort!: MatSort;
  emp: string[] = [
    'id',
    'policyName',
    'salary',
    'claimedAmount',
    'policyMaxAmount',
    'balance',
    'numberOfDependents',
  ];
  empMedData: EmployeeMedical[] = (EmployeeMedicalDetails as any).default;
  dataSource = new MatTableDataSource(this.empMedData);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private empMedicalService: EmpMedicalService
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  calPolicyMaxAmount(salary: number) {
    this.policyMaxAmount = this.empMedicalService.calcPolicyMaxAmount(salary);
    return this.policyMaxAmount;
  }

  calBalanceLeft(claimedAmount: number) {
    return this.policyMaxAmount - claimedAmount;
  }

  /* Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
