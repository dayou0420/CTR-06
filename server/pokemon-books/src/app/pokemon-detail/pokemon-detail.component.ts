import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;

  pokemon: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = +map.get('id')!;
      this.pokemon = this.pokemons[id - 1];
    });
  }

}
