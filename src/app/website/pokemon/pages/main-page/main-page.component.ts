import { PokemonModel } from 'src/app/core/models/pokemon.model';
import { PokemonService } from './../../../../core/services/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public pokemonList: PokemonModel[] = [];
  public totalPokemon!: number;
  public totalByPage: number = 20;

  constructor(
    private readonly pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe({
      next: response => {
        if(!response) return;
        this.pokemonList = response.results;
        this.totalPokemon = response.count;
      },
      error: error => console.error(error)
    })
  }

  onShowDataPokemon(idPokemon: number) {
    console.log(idPokemon);
  }

}
