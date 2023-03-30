import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SharedService } from 'src/app/services/shared.service';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css'],
})
export class EmployeePortalComponent implements OnInit, OnDestroy {
  employee!: Employee[];
  faTableCells = faTableCells;
  faAddressCard = faAddressCard;
  faEdit = faEdit;
  faTrash = faTrash;
  loaded: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private sharedService: SharedService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.displayEmployees();
    this.sharedService.subscription =
      this.sharedService.invokeDisplayEmp.subscribe(() => {
        this.displayEmployees();
      });
  }
  ngOnDestroy() {
    this.sharedService.subscription.unsubscribe();
  }

  showImage(fName: any, lName: any) {
    return `https://hub.dummyapis.com/Image?text=${
      fName[0] + lName[0]
    }&height=45&width=45`;
  }

  displayEmployees() {
    this.loaded = true;
    this.employeeService.getEmployees().subscribe((emp: Employee[]) => {
      if (emp) {
        this.employee = emp;
        this.loaded = false;
      }
    });
  }

  openModal() {
    this.modalService.open(EmployeeCrudComponent, {
      keyboard: false,
      backdrop: 'static',
    });
  }

  addEmployee() {
    this.sharedService.addEmp.next(true);
    this.openModal();
  }

  editEmployee(id: string, empData: Employee) {
    this.sharedService.addEmp.next(false);
    this.sharedService.id = id;
    this.sharedService.empData = empData;
    // console.log(id, empData);
    this.openModal();
  }

  deleteEmp(id: string) {
    if (confirm('Are you sure you want to delete this Employee?'))
      this.employeeService.deleteEmployee(id).subscribe((res) => {
        if (res) this.displayEmployees();
      });
  }
}
