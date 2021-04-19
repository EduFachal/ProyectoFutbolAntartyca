import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../interfaces/jugador.interface';
import { JugadoresService } from '../../service/jugadores.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styles: [
  ]
})
export class JugadorComponent implements OnInit {

  jugador! : Jugador;
  constructor(private jugadorService : JugadoresService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.jugadorService.getJugadorById(id))
    )
    .subscribe( jugador => this.jugador = jugador);
  }

}
