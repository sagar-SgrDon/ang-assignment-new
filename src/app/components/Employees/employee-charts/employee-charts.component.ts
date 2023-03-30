import { Component } from '@angular/core';
import { Chart } from 'chart.js';
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
  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.chartData = res;
      if (!this.chartData) return;
      for (let i = 0; i < this.chartData.length; i++) {
        let data = this.chartData[i];
        this.labelData.push(data.firstName + ' ' + data.lastName);
        this.realData.push(data.salary);
      }
      this.renderChart(this.labelData, this.realData, 'bar', 'barchart');
      this.renderChart(this.labelData, this.realData, 'pie', 'piechart');
      this.renderChart(this.labelData, this.realData, 'line', 'linechart');
    });
  }

  renderChart(labelData: string[], realData: number[], type: any, id: any) {
    return new Chart(id, {
      type: type,

      data: {
        labels: labelData,
        datasets: [
          {
            label: 'Salary',
            data: realData,
            backgroundColor: [
              'green',
              'blue',
              'orange',
              'yellow',
              'cyan',
              'pink',
              'red',
            ],
          },
        ],
      },
    });
  }
}
