import { Pokemons } from './pokemons';
import { PokemonArray } from './types/pokemon';

Pokemons.map((v, i) => {
    const list = `
    <td>${v.id}</td>
    <td>${v.name.japanese}</td>
    <td><img src="./sprites/00${i+1}MS.png" alt=""></td>
    <td><img src="./sprites/0${i+1}MS.png" alt=""></td>
    <td><img src="./sprites/${i+1}MS.png" alt=""></td>
    `
    const trElement = document.createElement('tr')! as HTMLTableRowElement;
    trElement.innerHTML = list;
    document.querySelector('tbody')?.appendChild(trElement);
});
