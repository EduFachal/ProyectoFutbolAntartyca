import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from './pages/add-empleado/add-empleado.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'add',
    component:AddEmpleadoComponent
  },
  {
    path:'edit/:id',
    component:AddEmpleadoComponent
  },
  {
    path:':id',
    component:EmpleadoComponent
  },
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
export class EmpleadosRoutingModule { }
