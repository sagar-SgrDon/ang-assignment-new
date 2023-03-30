import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string =
    'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

  url2: string = 'https://angular-assignemnt.onrender.com/employee';
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.url2);
  }

  addEmployees(empData: Employee) {
    return this.http.post<Employee[]>(this.url2, empData);
  }

  updateEmployee(id: string, empData: Employee) {
    return this.http.put<Employee[]>(this.url2 + `/${id}`, empData);
  }

  getEmployee(id: string) {
    return this.http.get(this.url2 + `/${id}`);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.url2 + `/${id}`);
  }
}
