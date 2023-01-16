import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';
import { InputBuscarComponent } from './input-buscar/input-buscar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    CardDetalleComponent,
    InputBuscarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CardComponent,
    CardDetalleComponent,
    InputBuscarComponent
  ]
})
export class ComponentesModule { }
