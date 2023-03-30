import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  addEmp!: boolean;
  editEmp!: boolean;
  id: string = this.sharedService.id;
  empData!: Employee;
  form: any;
  disabled = false;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private employeeService: EmployeeService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.addEmp.pipe(take(1)).subscribe((val) => {
      this.addEmp = val;
      this.editEmp = !this.addEmp;
      // console.log(this.addEmp, this.editEmp);
      if (this.editEmp) {
        this.empData = this.sharedService.empData;
        this.form = this.fb.group({
          firstName: [this.empData.firstName, Validators.required],
          lastName: [this.empData.lastName, Validators.required],
          email: [this.empData.email, [Validators.required, Validators.email]],
          age: [this.empData.age, Validators.required],
          contactNumber: [this.empData.contactNumber, Validators.required],
          salary: [this.empData.salary, Validators.required],
          address: [this.empData.address, Validators.required],
        });
      } else {
        this.form = this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          age: ['', Validators.required],
          contactNumber: ['', Validators.required],
          salary: ['', Validators.required],
          address: ['', Validators.required],
        });
      }
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get age() {
    return this.form.get('age');
  }
  get email() {
    return this.form.get('email');
  }
  get contactNumber() {
    return this.form.get('contactNumber');
  }
  get salary() {
    return this.form.get('salary');
  }
  get address() {
    return this.form.get('address');
  }

  addEmployee() {
    this.disabled = true;
    // console.log(this.form.value);
    this.employeeService.addEmployees(this.form.value).subscribe((res) => {
      if (res) {
        setTimeout(() => {
          this.form.reset();
          this.disabled = false;
          this.activeModal.close();
          this.sharedService.onDisplayEmployee();
        }, 1500);
      }
    });
  }

  updateEmployee() {
    this.disabled = true;
    this.employeeService
      .updateEmployee(this.id, this.form.value)
      .subscribe((res) => {
        if (res) {
          setTimeout(() => {
            this.form.reset();
            this.disabled = false;
            this.activeModal.close();
            this.sharedService.onDisplayEmployee();
          }, 1500);
        }
      });
  }
}
