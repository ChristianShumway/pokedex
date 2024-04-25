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
  public page: number = 0;
  public totalByPage: number = 20;
  public totalPages: number = 0;
  public currencypage: number = 1;
  public ref!: DynamicDialogRef;

  constructor(
    private readonly pokemonService: PokemonService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList(this.page).subscribe({
      next: response => {
        if(!response) return;
        this.pokemonList = response.results;
        this.totalPokemon = response.count;
        this.totalPages = Math.round(this.totalPokemon / this.totalByPage);
      },
      error: error => console.error(error)
    })
  }

  onShowDataPokemon(idPokemon: number) {
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

  // ?Paginador
  onPageChange(action: 'prev' | 'next') {
    if(action === 'next') {
      this.page = this.page + this.totalByPage;
      this.currencypage = this.currencypage + 1;
    } else if (action === 'prev') {
      this.page = this.page - this.totalByPage;
      this.currencypage = this.currencypage - 1;
    }
    this.getPokemonList();
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}
