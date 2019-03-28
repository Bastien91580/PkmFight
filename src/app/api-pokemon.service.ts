import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model'

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  constructor(private http: HttpClient) { }

  getPkmn(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
