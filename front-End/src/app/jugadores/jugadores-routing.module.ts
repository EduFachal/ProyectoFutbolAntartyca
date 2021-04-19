import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { AddJugadorComponent } from './pages/add-jugador/add-jugador.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'add',
    component:AddJugadorComponent
  },
  {
    path:'edit/:id',
    component:AddJugadorComponent
  },
  {
    path:':id',
    component:JugadorComponent
  },
  // Ruta en caso de no detectar alguna de las anteriores para redirigir a list
  {
    path:'**',
    redirectTo:'list'
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadoresRoutingModule { }
