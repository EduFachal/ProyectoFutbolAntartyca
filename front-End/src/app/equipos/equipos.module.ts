import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { EquiposRoutingModule } from './equipos-routing.module';
import { EquipoComponent } from './pages/equipo/equipo.component';



@NgModule({
  declarations: [ListComponent, EquipoComponent],
  imports: [
    CommonModule,
    EquiposRoutingModule
  ]
})
export class EquiposModule { }
