import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name!: string;
  @Input() valor!: number;
  @Input() icon!: string;

  colorValue(value: string): string{
    if(value === "Receita Total" || value === "Compras" ){
      return 'receita'
    } else  if(value === "Lucro Líquido" || value === "Lucro Bruto"){
      return 'lucro'
    } else {
      return 'despesas'
    }
  }
}
