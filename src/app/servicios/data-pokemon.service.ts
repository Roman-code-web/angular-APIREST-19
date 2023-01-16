import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPokemonService {
  //1. declaro variable.
  urlAPIPokemon="https://pokeapi.co/api/v2/";
  constructor( public http:HttpClient) { }

  //2. funcion para obtener pokemones
  getPokemon(index : string){
   return  this.http.get<any>(`${this.urlAPIPokemon}pokemon/${index}`);
  }
}
