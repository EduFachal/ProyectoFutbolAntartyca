import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'jugadores',
  loadChildren: () => import('./jugadores/jugadores.module').then(m => m.JugadoresModule)
},
{
  path:'equipos',
  loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)
},
{
  path: '**',
  redirectTo: '404'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
