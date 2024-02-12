import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {SecondDashboardModule} from "./modules/dashboard/second-dashboard/second-dashboard.module";
import {ThirdDashboardModule} from "./modules/dashboard/third-dashboard/third-dashboard.module";
import {FirstDashboardModule} from "./modules/dashboard/first-dashboard/first-dashboard.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FirstDashboardModule,
    SecondDashboardModule,
    ThirdDashboardModule,
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
