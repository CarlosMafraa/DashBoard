import {Component, Input, OnChanges} from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-first-line',
  templateUrl: './first-line.component.html',
  styleUrl: './first-line.component.css'
})
export class FirstLineComponent implements OnChanges {
  @Input() dados: any;
  @Input() selected!: string;
  @Input() categoria: any;
  @Input() font!: string;
  title: string = 'Empenho';

  chartData: any;
  Highcharts: typeof Highcharts = Highcharts;

  ngOnChanges() {
    this.configGraphics()
  }

  configGraphics(){
    this.chartData = {
      credits: {
        enabled: false,
      },
      chart:{
        type: 'spline',
        backgroundColor: 'transparent',
        fontFamily: this.font,
      },
      title:{
        text: this.title,
        align: 'left',
        style: {
          color: 'white',
          fontSize: '1rem'
        }
      },
      xAxis: {
        categories: this.categoria,
        labels: {
          style: {
            color: 'white',
            fontSize: '0.5rem',
          }
        },
      },
      yAxis: {
        gridLineWidth: 0,
        title:{
          enabled: false,
        },
        labels: {
          style: {
            enabled: false,
            color: 'white',
            fontSize: '0.5rem',
          }
        }
      },
      legend: {
        itemStyle: {
          color: 'white',
          fontSize: '0.5rem',
        },
      },
      series:[{
        type: 'line',
        name: 'Cronograma de Desembolso',
        data: this.dados[this.selected][0],
        marker:{
          symbol: 'circle',
        }
      },
        {
          type: 'line',
          name: 'Empenho Dísponível',
          data: this.dados[this.selected][1]

        },
        {
          type: 'area',
          name: 'Empenho Consumido',
          data: this.dados[this.selected][2],
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0.3, 'rgba(20,255,0,0.4)'],
              [0.91, 'rgba(20, 255, 0, 0)']
            ]
          },
        }
      ]
    }
  }
}


