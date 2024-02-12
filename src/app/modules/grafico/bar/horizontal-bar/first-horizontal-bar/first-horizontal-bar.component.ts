import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-first-horizontal-bar',
  templateUrl: './first-horizontal-bar.component.html',
  styleUrl: './first-horizontal-bar.component.css'
})
export class FirstHorizontalBarComponent implements OnChanges{
  @Input() dados: any;
  @Input() selected: any;
  @Input() categoria: any;
  @Input() font!: string;

  title: string = 'Lucros & Gastos';
  Highcharts: typeof Highcharts = Highcharts;
  chartData:any;

  ngOnChanges(changes: SimpleChanges) {
    this.configGraphics();
  }

  configGraphics(){

  }

}
