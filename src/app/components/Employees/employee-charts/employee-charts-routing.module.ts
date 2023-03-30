import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EmployeeChartsComponent } from './employee-charts.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeChartsComponent,
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeChartsRoutingModule {}
