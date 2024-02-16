import {Component, Input, OnChanges, OnInit} from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-first-horizontal-bar',
  templateUrl: './first-horizontal-bar.component.html',
  styleUrl: './first-horizontal-bar.component.css'
})
export class FirstHorizontalBarComponent implements OnChanges {
  @Input() dados: any;
  @Input() selected: any;
  @Input() categoria: any;
  @Input() font!: string;
  @Input() title!: string;
  @Input() valor!: boolean;

  soma!: any ;
  value: string = "";


  Highcharts: typeof Highcharts = Highcharts;
  chartData: any;

  constructor() {

  }



  ngOnChanges() {
    this.valueAndColor();
    if(this.valor){
      this.value = " - " + this.soma.toString();
    }
    this.configGraphics();
  }

  configGraphics() {
    this.chartData = {
      credits: {
        enabled: false,
      },
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        style: {
          fontFamily: this.font
        }
      },
      title: {
        text: this.title + this.value,
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
            fontSize: '0.7rem'
          }
        },
      },
      yAxis: {
        gridLineWidth: 0,
        title:{
          text: false
        },
        labels:{
          enabled: false,
        }
      },
      tooltip: {
        shared: true,
      },
      legend: {
        enabled: false
      },
      series: [{
        type: 'bar',
        data: this.valueAndColor(),
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
        }
      }]
    }
  }

  valueAndColor() {
    this.soma = 0;
    let cor: any = {
      0: [[0, '#361AE4'], [0.7257, '#6901D0']],
      1: [[0.3819, '#11D100'], [1, 'rgba(48, 94, 255, 0.98)']],
      2: [[0, '#E9D83D'], [1, '#2FDB04']],
      3: [[0, '#FE0089'], [0.7031, 'rgba(255, 153, 0, 0.67)']],
      4: [[0, '#007FFE'], [0.5122, 'rgba(3, 138, 130, 0.67)']]
    }

    let datas : any = [];

    if(this.categoria){
      for(let i = 0; i < this.categoria.length; i++){
        this.soma += this.dados[this.selected].data[i]
        datas.push({
          y: this.dados[this.selected].data[i],
          color: {
            linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
            stops: cor[i]
          }
        })
      }
    }
    return datas;
  }

}
