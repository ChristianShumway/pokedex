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
  @Output()
  public idPokemon = new EventEmitter<number>();

  showPokemon() {
    const cadena = this.pokemon.url;
    const ultimoNumero = cadena.match(/\/(\d+)\/$/);
    if (ultimoNumero !== null) {
      const idPokemon = parseInt(ultimoNumero[1]);
      this.idPokemon.emit(idPokemon);
    }
  }

}
