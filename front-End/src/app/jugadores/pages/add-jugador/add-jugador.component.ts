import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Jugador } from '../../interfaces/jugador.interface';
import { JugadoresService } from '../../service/jugadores.service';

@Component({
  selector: 'app-add-jugador',
  templateUrl: './add-jugador.component.html',
  styles: [
  ]
})
export class AddJugadorComponent implements OnInit {

  jugador: Jugador={
    cod_jugador: '',
    nombre: '',
    telefono: '',
    puesto: '',
    equipo: ''
  };

  constructor(private jugadorService : JugadoresService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')){
      return;
    }
  
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.jugadorService.getJugadorById(id))
    )
    .subscribe( jugador => this.jugador = jugador);
  }

  // Metodo para guardar un heroe o para modificarlo
  save() {
   /* if (this.jugador.nombre.trim().length === 0) {
      return;
    }
    if (this.jugador.cod_jugador) {
      this.jugadorService.updateHero(this.hero)
        .subscribe(hero => { 
          this.showSnackbar('Hero has been updated')
          this.router.navigate(['/heroes']) })
    } else {
      this.heroesService.addHero(this.hero)
        .subscribe(hero => { 
          this.showSnackbar('Hero has been created')
          this.router.navigate(['/heroes']) })
    }*/
  }

  // Metodo para borra un heroe
  deleteJug() {
    this.jugadorService.deleteJugador(this.jugador)
          .subscribe(resp => {
            this.router.navigate(['/jugadores/list']);
      })
  }
}
