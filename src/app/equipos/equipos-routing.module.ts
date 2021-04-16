import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../equipos/pages/list/list.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'equipo',
 //   component:JugadorComponent
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
