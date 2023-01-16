import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataPokemonService } from 'src/app/servicios/data-pokemon.service';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.css']
})
export class CardDetalleComponent implements OnInit  {
  //1.variable
  nomOrCod!:string;
  pokemonDetalle:any=[]; 
  //2.constructor
  constructor(private dataPokemon: DataPokemonService, private ruta:ActivatedRoute){}
  //3.oninit
  ngOnInit(): void {
    this.ruta.paramMap.subscribe((params: ParamMap) => {
      this.nomOrCod = String( params.get('id'));
      this.getPokemonIDorCOD(this.nomOrCod);
      console.log(this.pokemonDetalle)
    })

  }

  //4.funcion
  getPokemonIDorCOD(nomOrCod:string){
    let pokemon;
    this.dataPokemon.getPokemon(nomOrCod).subscribe(
      res=>{
        pokemon={
          index:nomOrCod,
          imagen:res.sprites.front_default,
          nombre:res.name,
          ataque:res.stats[1].base_stat,
          especial:res.stats[3].base_stat,
          defensa:res.stats[2].base_stat,

        }
        this.pokemonDetalle=pokemon ;
      },
      error=>{
        this.pokemonDetalle='error';
      }
    )
   
  }
}
