import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Federacion } from '../../interfaces/federacion';
import { FederacionesService } from '../../service/federaciones.service';

@Component({
  selector: 'app-add-federacion',
  templateUrl: './add-federacion.component.html',
  styles: [
  ]
})
export class AddFederacionComponent implements OnInit {
  federacion: Federacion = {
    cod_federacion : '',
	  cif: '',
	  direccion: '',
	  telefono: ''
  }

  myForm: FormGroup = this.fb.group({
    cif:['',[Validators.required,Validators.minLength(3)]],
    direccion:['',[Validators.required, Validators.minLength(0)]],
    telefono:['',[Validators.required, Validators.minLength(0)]]
  })

  constructor(private federacionesService: FederacionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.federacionesService.getFederacionById(id))
      )
      .subscribe(federacion => this.federacion = federacion);

    this.myForm.reset({
      cif: '',
      direccion: '',
      telefono: ''

    })
  }

  saveFederacion() {

    if (this.federacion.cod_federacion) {
      this.federacionesService.updateFederacion(this.federacion)
        .subscribe(resp => {
          this.router.navigate(['/federaciones/list'])
        })
    } else {
      this.federacion = { ...this.federacion, ...this.myForm.value }
      this.federacion.cod_federacion = "1";
      this.federacionesService.addFederacion(this.federacion)
        .subscribe(resp => {
          this.router.navigate(['/federaciones/list'])
        })
    }
  }

  deleteFederacion() {
    this.federacionesService.deleteFederacion(this.federacion)
      .subscribe(resp => {
        this.router.navigate(['/federaciones/list']);
      })
  }

  validField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


}
