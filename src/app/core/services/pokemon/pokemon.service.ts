import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  getPokemonList(): Observable<any> {
    let req = `${this.url}`
    return this.http.get<any>(req).pipe(
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
