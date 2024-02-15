import {Component, Input, OnChanges} from '@angular/core';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';

Highcharts3D(Highcharts);
@Component({
  selector: 'app-first-vertical-bar',
  templateUrl: './first-vertical-bar.component.html',
  styleUrl: './first-vertical-bar.component.css'
})

export class FirstVerticalBarComponent implements OnChanges {
  @Input() dados: any;
  @Input() title: string = "Lucro por Contratos";
  @Input() font!: string;

  Highcharts: typeof Highcharts = Highcharts;
  chartData: any;
  cores: any = {
    padrao: ['#67A700', '#00643A', '#5200D8', '#0080F6', '#1DADADFF']
  };

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
        options3d: {
          enabled: true,
          alpha: 30,
          beta: 0,
          depth: 5,
          viewDistance: 150
        },
        backgroundColor: 'transparent',
        style: {
          fontFamily: this.font
        },
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
        gridLineWidth: 0,

        labels: {
          style: {
            color: 'white',
            fontSize: '0.7rem'
          }
        },
      },
      yAxis: {
        title: {
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
            format: null,
            formatter: function (): string {
              const point = (this as any).point;
              if (point && typeof point.y !== 'undefined') {
                const num = point.y;
                if (num >= 1000000) {
                  return (num / 1000000).toFixed(0) + ' KK';
                } else if (num >= 1000) {
                  return (num / 1000).toFixed(0) + ' K';
                } else {
                  return num.toString();
                }
              }
              return '';
            },
            style: {
              textOutline: 'transparent',
              color: 'white'
            }

          }
        }
      },
      tooltip: {
        enabled: true
      },
      series: [{
        colorByPoint: true,
        colors: this.cores['padrao'],
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

  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + ' Milhões';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + ' Mil';
    } else {
      return num.toString();
    }
  }
}
