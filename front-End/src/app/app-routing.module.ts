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
  path:'departamentos',
  loadChildren: () => import('./departamentos/departamentos.module').then(m => m.DepartamentosModule)
},
{
  path:'empleados',
  loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule)
},
{
  path:'federaciones',
  loadChildren: () => import('./federaciones/federaciones.module').then(m => m.FederacionesModule)
},
{
  path:'torneos',
  loadChildren: () => import('./torneos/torneos.module').then(m => m.TorneosModule)
},
{
  path:'ciudades',
  loadChildren: () => import('./ciudades/ciudades.module').then(m => m.CiudadesModule)
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
