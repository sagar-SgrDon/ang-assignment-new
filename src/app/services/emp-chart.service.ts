import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class EmpChartService {
  constructor() {}

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
