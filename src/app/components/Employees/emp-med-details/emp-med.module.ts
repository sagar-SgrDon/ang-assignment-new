import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpMedDetailsComponent } from './emp-med-details.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EmpMedRoutingModule } from './emp-med-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { EmpMedicalService } from 'src/app/services/emp-medical.service';

@NgModule({
  declarations: [EmpMedDetailsComponent],
  imports: [CommonModule, EmpMedRoutingModule, MatTableModule, MatSortModule],
  providers: [AuthGuard, EmpMedicalService],
})
export class EmpMedModule {
  constructor() {
    console.log('employee medical Module loaded ');
  }
}
