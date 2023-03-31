import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeePortalComponent } from './components/Employees/employee-portal/employee-portal.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'employee',
    component: EmployeePortalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'emp-medical-details',
    loadChildren: () =>
      import('./components/Employees/emp-med-details/emp-med.module').then(
        (mod) => mod.EmpMedModule
      ),
  },
  {
    path: 'employee-charts',
    loadChildren: () =>
      import(
        './components/Employees/employee-charts/employee-charts.module'
      ).then((m) => m.EmployeeChartsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
