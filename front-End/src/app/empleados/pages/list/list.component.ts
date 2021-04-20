import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleado';
import { EmpleadosService } from '../../service/empleados.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  public page!: number;
  empleados: Empleado[] = [];
  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(resp =>this.empleados = resp)
  }


}
