import { Component, OnInit } from '@angular/core';
import { DataPokemonService } from 'src/app/servicios/data-pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
//1. declaro variables
  listaPokemon:any=[];

//2. services
constructor(public dataPokemon:DataPokemonService){}
//3.implementamos el oninit
ngOnInit():void{
this.getPokemons();
}
//4.funcion

  getPokemons(){
    let pokemon;
    for (let i = 1; i <=150; i++) {
     this.dataPokemon.getPokemon(String(i)).subscribe(
      res=>{
        pokemon={
          index:i,
          imagen:res.sprites.front_default,
          nombre: res.name,
        }
        this.listaPokemon.push(pokemon);
      },
      error=>{}
     )
    }
   // console.log(this.listaPokemon);
  }

}
