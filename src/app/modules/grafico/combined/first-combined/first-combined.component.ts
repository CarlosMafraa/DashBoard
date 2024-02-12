import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-first-combined',
  templateUrl: './first-combined.component.html',
  styleUrl: './first-combined.component.css'
})
export class FirstCombinedComponent implements OnChanges{
  @Input() dados: any;
  @Input() selected: any;
  @Input() categoria: any;
  @Input() font!: string;

  title: string = 'Lucros & Gastos';
  Highcharts: typeof Highcharts = Highcharts;
  chartData:any;

  ngOnChanges() {
    this.configGraphics();
  }


  configGraphics(){
    this.chartData = {
      credits: {
        enabled: false,
      },
      chart: {
        zoomType: 'xy',
        backgroundColor: 'transparent',
        style: {
          fontFamily: this.font
        }
      },
      title:{
        text: this.title,
        align: 'left',
        style: {
          color: 'white',
          fontSize: '1rem'
        }
      },
      xAxis: [{
        categories: this.categoria,
        crosshair: true,
        labels: {
          style: {
            color: 'white',
            fontSize: '0.5rem'

          }
        },
      }],
      yAxis: [{
        gridLineWidth: 0,
        title:{
          text: false
        },
        labels:{
          enabled: false,
        }
      }],
      tooltip: {
        shared: true
      },
      legend: {
        itemStyle: {
          color: 'white',
          fontSize: '0.7rem',
        },
        verticalAlign: 'bottom',
        floating: false,
      },
      series: [{
        name: 'Lucros Mensais',
        type: 'column',
        data: this.dados[this.selected].bar,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#00C42B'],
            [0.2083, '#00C42B'],
            [1, 'rgba(217, 217, 217, 0)']
          ]
        },
        borderColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#00C42B'],
            [0.2083, '#00C42B'],
            [1, 'rgba(217, 217, 217, 0)']
          ]
        },
        borderRadius: 100,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
        }
      }, {
        name: 'Gastos Mensais',
        type: 'spline',
        data: this.dados[this.selected].line,
        dataLabels:{
          text: false
        }
      }]
    };
  }

}
