import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetailPokemonModel, ResponsePokemonList } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly url: string = environment.apiURL;

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
    * Método que obtiene lista de pokemon
    * @returns array pokemon
  */
  getPokemonList(page: number): Observable<ResponsePokemonList> {
    let req = `${this.url}?offset=${page}`
    return this.http.get<ResponsePokemonList>(req).pipe(
      catchError( error => {
        return this.getThrowError(error);
      })
    );
  }

  /**
    * Método que obtiene detalles del pokemon
    * @param idPokemon
    * @returns objeto pokemon
  */
  getPokemonById(idPokemon: number): Observable<DetailPokemonModel> {
    let req = `${this.url}/${idPokemon}`
    return this.http.get<any>(req).pipe(
      map( data => {
        const pokemon: DetailPokemonModel = {
          img: data.sprites.front_default,
          nombre: data.name,
          tipo: data.types,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          ataqueEspecial: data.stats[3].base_stat,
          defensaEspecial: data.stats[4].base_stat,
          velocidad: data.stats[5].base_stat
        }
        return pokemon;
      }),
      catchError( error => {
        return this.getThrowError(error);
      })
    );
  }

  private getThrowError(error: any) {
    const statusCode = error.status;
    switch (statusCode) {
      case 401:
        return throwError(() => 'Acceso no autorizado');
      case 404:
        return throwError(() => 'Endpoint no encontrado');
      default:
        break;
    }
    return throwError(() => error.statusText)
  }
}
