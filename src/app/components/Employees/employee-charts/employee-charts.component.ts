import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { EmpChartService } from 'src/app/services/emp-chart.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-charts',
  templateUrl: './employee-charts.component.html',
  styleUrls: ['./employee-charts.component.css'],
})
export class EmployeeChartsComponent {
  chartData: any;
  labelData: any[] = [];
  realData: any[] = [];
  constructor(
    private employeeService: EmployeeService,
    private empChartService: EmpChartService
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.chartData = res;
      if (!this.chartData) return;
      for (let i = 0; i < this.chartData.length; i++) {
        let data = this.chartData[i];
        this.labelData.push(data.firstName + ' ' + data.lastName);
        this.realData.push(data.salary);
      }
      this.empChartService.renderChart(
        this.labelData,
        this.realData,
        'bar',
        'barchart'
      );
      this.empChartService.renderChart(
        this.labelData,
        this.realData,
        'pie',
        'piechart'
      );
      this.empChartService.renderChart(
        this.labelData,
        this.realData,
        'line',
        'linechart'
      );
    });
  }
}
