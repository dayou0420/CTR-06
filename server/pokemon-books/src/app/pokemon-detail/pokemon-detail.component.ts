import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../pokemons';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;

  pokemon: any;

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public radarChartLabels: string[] = [ '体力', '攻撃力', '防御力', 'すばやさ'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: []
  };

  public radarChartType: ChartType = 'radar';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = +map.get('id')!;
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.datasets.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.Speed
        ],
        label: 'Series B'
      });
    });
  }

}
