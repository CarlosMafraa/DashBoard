import {Component, Input, OnChanges} from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-first-vertical-bar',
  templateUrl: './first-vertical-bar.component.html',
  styleUrl: './first-vertical-bar.component.css'
})

export class FirstVerticalBarComponent implements OnChanges {
  @Input() dados: any;
  @Input() title: string = "Lucros entre Contratos";
  @Input() font!: string;

  Highcharts: typeof Highcharts = Highcharts;
  chartData: any;

  ngOnChanges() {
    this.configGraphics();
  }

  configGraphics() {
    this.chartData = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: {
          fontFamily: this.font
        }
      },
      title: {
        text: this.title,
        align: 'left',
        style: {
          color: 'white',
          fontSize: '1rem'
        }
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            color: 'white',
            fontSize: '0.7rem'
          }
        },
      },
      yAxis: {
        title:{
          enabled: false,
        },
        labels: {
          style: {
            color: 'white',
            fontSize: '0.7rem'
          }
        },
        gridLineWidth: 0
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}',
            style: {
              textOutline: 'transparent',
              color: 'white'
            }

          }
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b>'
      },
      series: [{
        colorByPoint: true,
        data: this.dados
      }],
      drilldown: {
        breadcrumbs: {
          position: {
            align: 'right'
          }
        }
      }
    }
  }
}
