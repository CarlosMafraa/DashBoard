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
  categoriaFirstBarH: string[] = ["Operacional", "Compras", "Estratégico", "Administrativo","Almoxarifado"];
  categoriaSecondBarH: string[] = ["Emergência", "Alta", "Normal", "Baixa"];

  years: string[] = [];
  selectedYear!: string;
  selectedCompany!: string;
  selectedMonth!: string;
  titleFirstBarH: string = "Despesas por departamento";
  titleSecondBarH : string = "Criticidades de Compras";
  titleFirstDoughnut: string = "Lucro Total";
  titleSecondDoughnut : string = "Gasto Total";

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

  dadosBarHOne: any = {
    "Janeiro": {data: [65, 59, 80, 81, 55]},
    "Fevereiro": {data: [75, 69, 90, 91 , 50]},
    "Março": {data: [85, 79, 100, 101 ,60]}
  };

  dadosBarHTwo: any = {
    "Janeiro": { data: [65, 59, 80, 81]},
    "Fevereiro":{data: [75, 69, 90, 91]},
    "Março": {data: [85, 79, 100, 101]}};

  dadosBarVOne: any = [{name: "SEDUC", y: 10000 , drilldown:"SEDUC"}, {name: "Projex Consulting", y: 15986,  drilldown:"Projex Consulting"}, {name:"DENSO", y: 55976 , drilldown: "DENSO"}, {name: "COMETAIS", y: 198000,  drilldown: "COMETAIS"}, {name: "Shopping Ponta Negra", y: 98765 ,  drilldown: "Shopping Ponta Negra"},{name: "Shopping Grande Circular", y: 98655,  drilldown: "Shopping Grande Circular"}];


  firstName: string = "Receita Total";
  secondName: string = "Lucro Líquido";
  thirdName: string = "Lucro Bruto";
  fourthName: string = "Total de Despesas";
  fifthName: string = "Em Compras";
  sixthName: string = "Compras";
  firstValor: number = 57514.15;
  secondValor: number = 47247.97;
  thirdValor: number = 52847.99;
  fourthValor: number = 11145.00;
  fifthValor: number = 21324.45;
  sixthValor: number = 152;
  firstIcon: string = '';
  secondIcon: string = '';
  thirdIcon: string = '';
  fourthIcon: string = '';
  fifthIcon: string = '';
  sixthIcon: string = '';

  dadosDoughnutOne: any = [{name: "SEDUC", y: 10000}, {name: "Projex Consulting", y: 15986}, {name:"DENSO", y: 55976}, {name: "COMETAIS", y: 198000}, {name: "Shopping Ponta Negra", y: 98765},{name: "Shopping Grande Circular", y: 98655}];
  dadosDoughnutTwo: any = [{name: "SEDUC", y: 1000}, {name: "Projex Consulting", y: 11986}, {name:"DENSO", y: 15976}, {name: "COMETAIS", y: 16700}, {name: "Shopping Ponta Negra", y: 23765},{name: "Shopping Grande Circular", y: 60655}];


  constructor() {
    const currentYear = new Date().getFullYear();
    this.years = [currentYear, currentYear - 1, currentYear - 2].map(String);
    this.selectedYear = this.years[0];
    this.selectedCompany = this.empresas[0];
    this.selectedMonth = this.meses[0];
  }

  onYearChange(value: any) {
    this.selectedYear = value;
  }

  onCompanyChange(value: any) {
    this.selectedCompany = value;
    console.log(value)
  }

  onMonthChange(value: any) {
    this.selectedMonth = value;
  }

}
