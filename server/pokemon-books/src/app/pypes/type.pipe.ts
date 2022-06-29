import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})

export class TypePipe implements PipeTransform {

  japanese: any = {
    Grass: 'くさ',
    Poison: 'どく',
    Fire: 'ほのお',
    Flying: 'ひこう',
    Water: 'みず'
  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  }

}
