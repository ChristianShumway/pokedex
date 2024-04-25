import { PokemonModel } from 'src/app/core/models/pokemon.model';
import { PokemonService } from './../../../../core/services/pokemon/pokemon.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalPokemonComponent } from 'src/app/shared/components/modal-pokemon/modal-pokemon.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements OnInit, OnDestroy {

  public pokemonList: PokemonModel[] = [];
  public totalPokemon!: number;
  public totalByPage: number = 20;
  public ref!: DynamicDialogRef;

  constructor(
    private readonly pokemonService: PokemonService,
    public dialogService: DialogService
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
    this.pokemonService.getPokemonById(idPokemon).subscribe({
      next: response => {
        if(!response) return;
        this.ref = this.dialogService.open(ModalPokemonComponent, {
          width: '50%',
          contentStyle: {"overflow": "auto"},
          baseZIndex: 10000,
          maximizable: true,
          data: {
            pokemon: response
          }
        });
      }
    })
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}
