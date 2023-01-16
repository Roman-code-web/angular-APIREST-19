import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetalleComponent } from './componentes/card-detalle/card-detalle.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"detalle/:id" , component:DetalleComponent  },
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
