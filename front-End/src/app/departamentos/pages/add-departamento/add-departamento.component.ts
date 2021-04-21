import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Ciudad } from 'src/app/ciudades/interfaces/ciudad';
import { CiudadesService } from 'src/app/ciudades/service/ciudades.service';
import { Federacion } from 'src/app/federaciones/interfaces/federacion';
import { FederacionesService } from 'src/app/federaciones/service/federaciones.service';
import { Departamento } from '../../interfaces/departamento';
import { DepartamentosService } from '../../service/departamentos.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styles: [
  ]
})
export class AddDepartamentoComponent implements OnInit {

  ciudad: Ciudad = {
    cod_ciudad: '52',
    nombre: '',
  }

  ciudades: Ciudad[] = [];
  
  federacion: Federacion={
    cod_federacion:'2',
    cif: '',
    direccion: '',
    telefono: ''
  }

  federaciones: Federacion[] = [];

  departamento: Departamento = {
    cod_depart: '',
    nombre: '',
    descripcion: '',
    federacion: this.federacion,
    ciudad: this.ciudad,
    empleados: []
  }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    descripcion:['',[Validators.required, Validators.minLength(0)]],
    nombre_federac:['',[Validators.required, Validators.minLength(0)]],
    nombre_ciudad:['',[Validators.required, Validators.minLength(0)]],
  })

  constructor(private departamentoService: DepartamentosService,
    private federacionService: FederacionesService,
    private ciudadService: CiudadesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.federacionService.getFederaciones().subscribe(resp =>this.federaciones = resp)
    this.ciudadService.getCiudades().subscribe(resp =>this.ciudades = resp)

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
      this.ciudad.cod_ciudad=this.myForm.get('nombre_ciudad')?.value
      
      this.federacion.cod_federacion=this.myForm.get('nombre_federac')?.value
      console.log(this.ciudad)
      this.departamento.ciudad = this.ciudad
      this.departamento.federacion = this.federacion;
      console.log(this.departamento)
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
