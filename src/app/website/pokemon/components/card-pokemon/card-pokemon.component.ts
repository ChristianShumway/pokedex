import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonModel } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'pokemon-card',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent {

  @Input()
  public pokemon!: PokemonModel;
  @Input()
  public index!: number;
  @Output()
  public idPokemon = new EventEmitter<number>();

  showPokemon(index: number) {
    this.idPokemon.emit(index + 1);
  }

}
