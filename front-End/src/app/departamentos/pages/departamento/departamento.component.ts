import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Departamento } from '../../interfaces/departamento';
import { DepartamentosService } from '../../service/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styles: [
  ]
})
export class DepartamentoComponent implements OnInit {

  departamento! : Departamento;
  constructor(private departamentoService : DepartamentosService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.departamentoService.getDepartamentoById(id))
    )
    .subscribe( departamento => this.departamento = departamento);
    
  }

}
