import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../interfaces/jugador.interface';
import { JugadoresService } from '../../service/jugadores.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  @Input() jugadores : Jugador[] = [];
  constructor(private jugadorService : JugadoresService) { }

  ngOnInit(): void {
    this.jugadorService.getJugadores().subscribe(jugador => this.jugadores = jugador);
  }
}
