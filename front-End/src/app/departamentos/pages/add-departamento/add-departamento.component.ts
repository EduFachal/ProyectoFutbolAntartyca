import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Federacion } from 'src/app/federaciones/interfaces/federacion';
import { Departamento } from '../../interfaces/departamento';
import { DepartamentosService } from '../../service/departamentos.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styles: [
  ]
})
export class AddDepartamentoComponent implements OnInit {

  federacion: Federacion={
    cod_federacion:'2',
    cif: '',
    direccion: '',
    telefono: ''
  }

  departamento: Departamento = {
    cod_depart: '',
    nombre: '',
    descripcion: '',
    federacion: this.federacion,
    empleados: []
  }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    descripcion:['',[Validators.required, Validators.minLength(0)]],
  })

  constructor(private departamentoService: DepartamentosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.departamentoService.getDepartamentoById(id))
      )
      .subscribe(departamento => this.departamento = departamento);

    this.myForm.reset({
      nombre: '',
      descripcion: ''
    })
  }

  saveDepartamento() {

    if (this.departamento.cod_depart) {
      this.departamentoService.updateDepartamento(this.departamento)
        .subscribe(resp => {
          this.router.navigate(['/departamentos/list'])
        })
    } else {
      this.departamento = { ...this.departamento, ...this.myForm.value }
      this.departamento.cod_depart = "1";
      this.departamento.federacion = this.federacion;
      this.departamentoService.addDepartamento(this.departamento)
        .subscribe(resp => {
          this.router.navigate(['/departamentos/list'])
        })
    }
  }

  deleteDepartamento() {
    this.departamentoService.deleteDepartamento(this.departamento)
      .subscribe(resp => {
        this.router.navigate(['/departamentos/list']);
      })
  }

  validField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


}
