import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeChartsRoutingModule } from './employee-charts-routing.module';
import { EmployeeChartsComponent } from './employee-charts.component';
import { NgChartsModule } from 'ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [EmployeeChartsComponent],
  imports: [
    CommonModule,
    EmployeeChartsRoutingModule,
    NgChartsModule,
    TabsModule,
  ],
  providers: [],
  exports: [],
})
export class EmployeeChartsModule {
  constructor() {
    console.log('Employee Charts Module Loaded');
  }
}
