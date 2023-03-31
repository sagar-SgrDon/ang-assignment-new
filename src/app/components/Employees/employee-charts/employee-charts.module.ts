import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeChartsRoutingModule } from './employee-charts-routing.module';
import { EmployeeChartsComponent } from './employee-charts.component';
import { NgChartsModule } from 'ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EmpChartService } from 'src/app/services/emp-chart.service';

@NgModule({
  declarations: [EmployeeChartsComponent],
  imports: [
    CommonModule,
    EmployeeChartsRoutingModule,
    NgChartsModule,
    TabsModule,
  ],
  providers: [EmpChartService],
  exports: [],
})
export class EmployeeChartsModule {
  constructor() {
    console.log('Employee Charts Module Loaded');
  }
}
