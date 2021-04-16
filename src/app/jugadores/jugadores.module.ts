import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { JugadoresRoutingModule } from './jugadores-routing.module';


@NgModule({
  declarations: [ListComponent,JugadorComponent],
  imports: [
    CommonModule,
    JugadoresRoutingModule
  ]
})
export class JugadoresModule { }
