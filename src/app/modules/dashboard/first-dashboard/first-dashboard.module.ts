import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstDashboardComponent} from "./first-dashboard.component";
import {FirstCombinedComponent} from "../../grafico/combined/first-combined/first-combined.component";
import {HighchartsChartModule} from "highcharts-angular";
import {FormsModule} from "@angular/forms";
import {FirstLineComponent} from "../../grafico/line/first-line/first-line.component";
import {CardComponent} from "../../shared/card/card.component";
import {RealPipe} from "../../shared/pipe/real";
import {
  FirstHorizontalBarComponent
} from "../../grafico/bar/horizontal-bar/first-horizontal-bar/first-horizontal-bar.component";
import {FirstDoughnutComponent} from "../../grafico/doughnut/first-doughnut/first-doughnut.component";
import {
  FirstVerticalBarComponent
} from "../../grafico/bar/vertical-bar/first-vertical-bar/first-vertical-bar.component";

@NgModule({
  declarations: [
    FirstDashboardComponent,
    FirstCombinedComponent,
    FirstLineComponent,
    FirstHorizontalBarComponent,
    FirstDoughnutComponent,
    FirstVerticalBarComponent,
    CardComponent
  ],
  exports: [
    FirstDashboardComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    FormsModule,
    RealPipe,
  ]
})
export class FirstDashboardModule { }
