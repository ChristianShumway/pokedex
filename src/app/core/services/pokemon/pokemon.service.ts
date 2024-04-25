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
  getPokemonList(): Observable<ResponsePokemonList> {
    let req = `${this.url}`
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
        console.log(data);
        const pokemon: DetailPokemonModel = {
          img: '',
          nombre: data.name,
          tipo: data.types,
          hp: 'string',
          ataque: 'string',
          defensa: 'string',
          ataqueEspecial: 'string',
          defensaEspecial: 'string',
          velocidad: ''
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
