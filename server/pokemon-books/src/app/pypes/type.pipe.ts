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
    Water: 'みず',
    Bug: 'むし',
    Normal: 'ノーマル',
    Electric: 'でんき',
    Ground: 'じめん',
    Rock: 'いわ',
    Ice: 'こおり',
    Fighting: 'かくとう',
    Psychic: 'エスパー',
    Ghost: 'ゴースト',
    Dragon: 'ドラゴン'
  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  }

}
