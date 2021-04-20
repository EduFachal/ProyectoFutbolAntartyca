import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTorneoComponent } from './pages/add-torneo/add-torneo.component';
import { ListComponent } from './pages/list/list.component';
import { TorneoComponent } from './pages/torneo/torneo.component';

const routes: Routes = [{
  path:'',
  children:[{
    path:'list',
    component:ListComponent
  },
  {
    path:'add',
    component:AddTorneoComponent
  },
  {
    path:'edit/:id',
    component:AddTorneoComponent
  },
  {
    path:':id',
    component:TorneoComponent
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
export class TorneosRoutingModule { }
