import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule
  ]
})
export class PagesModule { }
