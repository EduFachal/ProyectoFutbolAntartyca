import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/departamentos/interfaces/departamento';
import { Ciudad } from '../../interfaces/ciudad';
import { CiudadesService } from '../../service/ciudades.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  ciudades : Ciudad[] = [];
  numDeparts: number[] = [];
  constructor(private ciudadService : CiudadesService) { }

  ngOnInit(): void {
    this.ciudadService.getCiudades().subscribe(resp => this.ciudades = resp);
  }

}
