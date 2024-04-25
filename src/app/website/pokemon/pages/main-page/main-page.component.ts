import { PokemonService } from './../../../../core/services/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private readonly pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe({
      next: response => {
        console.log({response})
      }
    })
  }

}
