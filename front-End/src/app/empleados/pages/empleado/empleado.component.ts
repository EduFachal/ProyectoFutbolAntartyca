import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Empleado } from '../../interfaces/empleado';
import { EmpleadosService } from '../../service/empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styles: [
  ]
})
export class EmpleadoComponent implements OnInit {

  empleado! : Empleado;
  constructor(private empleadoService : EmpleadosService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.empleadoService.getEmpleadoById(id))
    )
    .subscribe( empleado => this.empleado = empleado);
    
  }

}
