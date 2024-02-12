import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  name: number = 0;
  valor: any ='' ;

  colorValue(name: any) {
  return ''
  }
}
