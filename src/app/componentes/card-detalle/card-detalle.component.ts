import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataPokemonService } from 'src/app/servicios/data-pokemon.service';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.css']
})
export class CardDetalleComponent implements OnInit {
  //1.variable
  nomOrCod!:string;
  pokemonDetalle:any=[]; 
  //2.constructor
  constructor(private dataPokemon: DataPokemonService, private ruta:ActivatedRoute){}
  //3.oninit
  ngOnInit(): void {
  this.nomOrCod= String(this.ruta.snapshot.paramMap.get('id'));
  this.getPokemonIDorCOD(this.nomOrCod);
  }
  //4.funcion
  getPokemonIDorCOD(nomOrCod:string){
    let pokemon;
    this.dataPokemon.getPokemon(nomOrCod).subscribe(
      res=>{
        pokemon={
          index:nomOrCod,
          imagen:res.sprites.front_default,
          nombre:res.name
        }
        this.pokemonDetalle.push(pokemon) ;
      },
      error=>{}
    )
    console.log(this.pokemonDetalle)
  }
}
