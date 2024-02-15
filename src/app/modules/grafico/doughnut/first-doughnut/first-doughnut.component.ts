import {Component, Input, OnChanges} from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-first-doughnut',
  templateUrl: './first-doughnut.component.html',
  styleUrl: './first-doughnut.component.css'
})
export class FirstDoughnutComponent implements OnChanges{
  @Input() dados: any;
  @Input() title!: string;
  @Input() font!: string;
  @Input() align!: string;
  @Input() corrigir!: number;

  cores: any = {
    right: ['#67A700', '#00643A', '#5200D8', '#0080F6', '#1DADADFF'],
    left: ['#F67600', '#FFC90C', '#FF0F00', '#E91EC8', '#FCFF6B']
  };
  valor!: string;
  chartData: any;
  Highcharts: typeof Highcharts = Highcharts;

  ngOnChanges() {
    this.calculation(this.dados);
    this.configGraphics();
  }

  configGraphics() {
    const self = this;
    this.chartData = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        marginTop: 0,
        style: {
          fontFamily: this.font
        },
        events:{
          render: function (){
            var chart : any = this,
              parser = new DOMParser(),
              htmlString = self.valor,
              doc = parser.parseFromString(htmlString, 'text/html'),
              text = doc.body.innerHTML || "",
              centerX = chart.chartWidth / 2 - self.corrigir,
              centerY = chart.chartHeight / 2 - 15;
            if (chart.customText) {
              chart.customText.destroy();
            }

            chart.customText = chart.renderer.text(text, centerX, centerY)
              .css({
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              })
              .attr({
                align: 'center',
                zIndex: 999,
                useHTML: true
              })
              .add();
          }
        }

      },
      title: {
        text: this.title,
        align: 'left',
        style: {
          color: 'white',
          fontSize: '1rem'
        },
      },
      tooltip: {
        pointFormat: '{point.name}: <b>{point.percentage:.2f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          innerSize: '70%',
          borderWidth: 2,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true
        }
      },
      legend: {
        labelFormat: '{name} : {percentage:.2f}%',
        align: this.align,
        verticalAlign: 'middle',
        layout: 'vertical',
        itemStyle: {
          color: 'white',
          fontSize: '0.7rem',
        },
      },
      series: [{
        animation: {
          duration: 2000
        },
        enableMouseTracking: true,
        colorByPoint: true,
        colors: this.cores[this.align],
        data: this.dados
      }]
    }
  }
  calculation(value: any) {
    let valores : number = 0;
    value.forEach((res: any) => {
      valores += res["y"];
    })

    const trilhao = 10000000000000;
    const bilhao = 1000000000;
    const milhao = 1000000;
    const mil = 1000;

    if (valores >= trilhao) {
      this.valor = `${(valores / trilhao).toFixed(2)} <br> Trilhões`;
    } else if (valores >= bilhao) {
      this.valor = `${(valores / bilhao).toFixed(2)} <br> Bilhões`;
    } else if (valores >= milhao) {
      this.valor = `${(valores / milhao).toFixed(2)} <br> Milhões`;
    } else if (valores >= mil) {
      this.valor = `${(valores / mil).toFixed(2)} <br> Mil`;
    } else {
      this.valor = `${valores}`;
    }
  }

}
