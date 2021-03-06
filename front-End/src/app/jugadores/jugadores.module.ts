import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { JugadoresRoutingModule } from './jugadores-routing.module';
import { AddJugadorComponent } from './pages/add-jugador/add-jugador.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [ListComponent,JugadorComponent, AddJugadorComponent, SearchComponent],
  imports: [
    CommonModule,
    JugadoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class JugadoresModule { }
