import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartamentoComponent } from './pages/add-departamento/add-departamento.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'add',
    component:AddDepartamentoComponent
  },
  {
    path:'edit/:id',
    component:AddDepartamentoComponent
  },
  {
    path:':id',
    component:DepartamentoComponent
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
export class DepartamentosRoutingModule { }
