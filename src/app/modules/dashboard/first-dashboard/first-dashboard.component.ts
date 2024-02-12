import { Component } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-first-dashboard',
  templateUrl: './first-dashboard.component.html',
  styleUrl: './first-dashboard.component.css'
})
export class FirstDashboardComponent {
  fonte: string = "Arial";
  meses: any = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  empresas: any = ["SEDUC","Projex Consulting","DENSO","COMETAIS","Shopping Ponta Negra","Shopping Grande Circular"];
  years: string[] = [];
  selectedYear!: string;
  selectedCompany!: string;

  dadosBarLine: any = {
    2024:{
      line: [50, 25, 12, 48, 56, 76, 42, 35, 60, 70, 80, 90],
      bar: [21, 84, 24, 75, 37, 65, 34, 45, 55, 65, 75, 85]
    },
    2023: {
      line: [30, 45, 32, 28, 56, 46, 42, 52, 62, 72, 82, 92],
      barra: [11, 64, 24, 35, 27, 45, 34, 44, 54, 64, 74, 84]
    },
    2022: {
      line: [40, 35, 22, 38, 46, 66, 32, 25, 50, 60, 70, 80],
      barra: [31, 74, 14, 65, 27, 55, 24, 35, 45, 55, 65, 75]
    }
  };

  dadosLine: any = {
    "SEDUC": {
      0: [50, 25, 12, 48, 56, 76, 42, 35, 60, 70, 80, 90],
      1: [21, 84, 24, 75, 37, 65, 34, 45, 55, 65, 75, 85],
      2: [30, 45, 32, 28, 56, 46, 42, 52, 62, 72, 82, 92]
    },
    "Projex Consulting": {
      0: [30, 45, 32, 28, 56, 46, 42, 52, 62, 72, 82, 92],
      1: [11, 64, 24, 35, 27, 45, 34, 44, 54, 64, 74, 84],
      2: [50, 25, 12, 48, 56, 76, 42, 35, 60, 70, 80, 90]
    },
    "DENSO": {
      0: [40, 35, 22, 38, 46, 66, 32, 25, 50, 60, 70, 80],
      1: [31, 74, 14, 65, 27, 55, 24, 35, 45, 55, 65, 75],
      2: [11, 64, 24, 35, 27, 45, 34, 44, 54, 64, 74, 84]}
  };



  constructor() {
    const currentYear = new Date().getFullYear();
    this.years = [currentYear, currentYear - 1, currentYear - 2].map(String);
    this.selectedYear = this.years[0];
    this.selectedCompany = this.empresas[0];

  }

  onYearChange(event: any) {
    this.selectedYear = event.target.value;
  }

  onCompanyChange(event: any) {
    this.selectedCompany = event.target.value;
    console.log(this.selectedCompany)


  }

  protected readonly of = of;
}
