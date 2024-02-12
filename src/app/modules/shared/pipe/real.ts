import { Pipe, PipeTransform } from '@angular/core';

@Pipe({standalone: true, name: 'real'})
export class RealPipe implements PipeTransform {
  transform(value: number): string {
    let valorFormatado = value.toFixed(2).replace('.', ',');
    let partes = valorFormatado.split(",");
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${partes.join(",")}`;
  }
}
