import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Equipo } from '../../interfaces/equipo';
import { EquiposService } from '../../service/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [
  ]
})
export class EquipoComponent implements OnInit {

  equipo! : Equipo;
  constructor(private equipoService : EquiposService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.equipoService.getEquipoById(id))
    )
    .subscribe( equipo => this.equipo = equipo);
  }

}
