import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { EquiposRoutingModule } from './equipos-routing.module';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { AddEquipoComponent } from './pages/add-equipo/add-equipo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, EquipoComponent, AddEquipoComponent],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    ReactiveFormsModule
  ]
})
export class EquiposModule { }
