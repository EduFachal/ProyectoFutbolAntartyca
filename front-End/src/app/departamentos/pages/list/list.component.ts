import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Departamento } from '../../interfaces/departamento';
import { DepartamentosService } from '../../service/departamentos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  departamentos: Departamento[] = [];
  constructor(private departamentosService: DepartamentosService) { }

  ngOnInit(): void {
    this.departamentosService.getDepartamentos().subscribe(resp =>this.departamentos = resp)
  }

}
