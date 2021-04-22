import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Ciudad } from 'src/app/ciudades/interfaces/ciudad';
import { Departamento } from 'src/app/departamentos/interfaces/departamento';
import { DepartamentosService } from 'src/app/departamentos/service/departamentos.service';
import { Federacion } from 'src/app/federaciones/interfaces/federacion';
import { Empleado } from '../../interfaces/empleado';
import { EmpleadosService } from '../../service/empleados.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styles: [
  ]
})
export class AddEmpleadoComponent implements OnInit {

  ciudad: Ciudad = {
    cod_ciudad: '1',
    nombre: '',
    torneos:[]
  }


  federacion: Federacion={
    cod_federacion:'2',
    cif: '',
    direccion: '',
    telefono: ''
  }

  departamento: Departamento={
    cod_depart: '',
    nombre: '',
    descripcion: '',
    federacion: this.federacion,
    ciudad: this.ciudad,
    empleados:[]
  }

  departamentos: Departamento[] = [];

  empleado: Empleado = {
    cod_emp: '',
    nombre: '',
	  dni: '',
	  direccion: '',
	  telefono: '',
	  departamento: this.departamento,
  }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    dni:['',[Validators.required,Validators.minLength(3)]],
    direccion:['',[Validators.required,Validators.minLength(3)]],
    telefono:['',[Validators.required, Validators.minLength(0)]],
    nombre_depart:['',[Validators.required, Validators.minLength(0)]],
  })

  constructor(private empleadoService: EmpleadosService,
    private departamentoService: DepartamentosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(resp =>this.departamentos = resp)
    if(!this.router.url.includes('edit')){
      return;
    }

    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.empleadoService.getEmpleadoById(id))
      )
      .subscribe(empleado => this.empleado = empleado);

    this.myForm.reset({
      nombre: '',
      dni: '',
      direccion: '',
      telefono: ''
    })
  }

  saveEmpleado() {

    if (this.empleado.cod_emp) {
      this.empleadoService.updateEmpleado(this.empleado)
        .subscribe(resp => {
          this.router.navigate(['/empleados/list'])
        })
    } else {
      this.empleado = { ...this.empleado, ...this.myForm.value }
      this.empleado.cod_emp = "1";
      this.departamento.cod_depart = this.myForm.get('nombre_depart')?.value
      this.empleado.departamento = this.departamento;
      this.empleadoService.addEmpleado(this.empleado)
        .subscribe(resp => {
          this.router.navigate(['/empleados/list'])
        })
    }
  }

  deleteEmpleado() {
    this.empleadoService.deleteEmpleado(this.empleado)
      .subscribe(resp => {
        this.router.navigate(['/empleados/list']);
      })
  }

  validField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


}
