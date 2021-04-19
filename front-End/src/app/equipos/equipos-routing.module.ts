import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../equipos/pages/list/list.component';
import { AddEquipoComponent } from './pages/add-equipo/add-equipo.component';
import { EquipoComponent } from './pages/equipo/equipo.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'add',
    component:AddEquipoComponent
  },
  {
    path:'edit/:id',
    component:AddEquipoComponent
  },
  {
    path:':id',
    component:EquipoComponent
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
export class EquiposRoutingModule { }
