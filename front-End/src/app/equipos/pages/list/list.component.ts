import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../interfaces/equipo';
import { EquiposService } from '../../service/equipos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  equipos: Equipo[] = [];
  constructor(private equipoService: EquiposService) { }

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(equipo =>this.equipos = equipo)
  }

}
