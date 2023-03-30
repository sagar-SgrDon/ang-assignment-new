import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpMedDetailsComponent } from './emp-med-details.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EmpMedRoutingModule } from './emp-med-routing.module';

@NgModule({
  declarations: [EmpMedDetailsComponent],
  imports: [CommonModule, EmpMedRoutingModule],
  providers: [AuthGuard],
})
export class EmpMedModule {
  constructor() {
    console.log('employee medical Module loaded ');
  }
}
