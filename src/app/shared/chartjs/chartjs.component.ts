import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'chartjs',
  templateUrl: 'chartjs.component.html',
  styleUrls: [ 'chartjs.component.css' ]
})
export class ChartJsComponent implements AfterViewInit{
  @ViewChild('chartJsCanvas') canvas: ElementRef;
  public context;
  public chart;
  public options;
  public data;

  constructor() {}
  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.prepareChart();
  }

  prepareChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: [ 'one', 'two', 'three', 'four', 'five' ],
        datasets: [
          {
            data: [1,2,3,4,5],
            borderColor: '#3cba9f'
          },
          {
            data: [5,4,3,2,1],
            borderColor: '#ffcc00'
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{ display: true }],
          yAxes: [{ display: true }]
        }
      }
    });
  }
}

