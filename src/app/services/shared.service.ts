import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  invokeDisplayEmp = new EventEmitter();
  subscription!: Subscription;
  addEmp = new BehaviorSubject(true);
  id!: string;
  empData!: Employee;

  constructor() {}

  onDisplayEmployee() {
    this.invokeDisplayEmp.emit();
  }
}
