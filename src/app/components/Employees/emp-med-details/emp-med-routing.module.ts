import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EmpMedDetailsComponent } from './emp-med-details.component';

const routes: Routes = [
  {
    path: '',
    component: EmpMedDetailsComponent,
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpMedRoutingModule {}
