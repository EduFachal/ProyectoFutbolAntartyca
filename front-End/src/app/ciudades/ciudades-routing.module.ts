import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCiudadComponent } from './pages/add-ciudad/add-ciudad.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'add',
    component:AddCiudadComponent
  },
  {
    path:'edit/:id',
    component:AddCiudadComponent
  },
  {
    path:':id',
    component:CiudadComponent
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
export class CiudadesRoutingModule { }
