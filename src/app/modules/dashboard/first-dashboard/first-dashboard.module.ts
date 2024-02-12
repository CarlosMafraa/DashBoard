import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstDashboardComponent} from "./first-dashboard.component";
import {FirstCombinedComponent} from "../../grafico/combined/first-combined/first-combined.component";
import {HighchartsChartModule} from "highcharts-angular";
import {FormsModule} from "@angular/forms";
import {FirstLineComponent} from "../../grafico/line/first-line/first-line.component";
import {CardComponent} from "../../shared/card/card.component";
import {RealPipe} from "../../shared/pipe/real";

@NgModule({
  declarations: [
    FirstDashboardComponent,
    FirstCombinedComponent,
    FirstLineComponent,
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
