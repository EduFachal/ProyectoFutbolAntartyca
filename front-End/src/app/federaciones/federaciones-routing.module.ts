import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFederacionComponent } from './pages/add-federacion/add-federacion.component';
import { FederacionComponent } from './pages/federacion/federacion.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'add',
    component:AddFederacionComponent
  },
  {
    path:'edit/:id',
    component:AddFederacionComponent
  },
  {
    path:':id',
    component:FederacionComponent
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
export class FederacionesRoutingModule { }
