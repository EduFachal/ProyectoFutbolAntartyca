import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Ciudad } from '../../interfaces/ciudad';
import { CiudadesService } from '../../service/ciudades.service';

@Component({
  selector: 'app-add-ciudad',
  templateUrl: './add-ciudad.component.html',
  styles: [
  ]
})
export class AddCiudadComponent implements OnInit {

  ciudad: Ciudad={
    cod_ciudad: '',
    nombre: ''
  }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]]
  })

  constructor(private ciudadService: CiudadesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.ciudadService.getCiudadById(id))
      )
      .subscribe(resp => this.ciudad = resp);

    this.myForm.reset({
      nombre: ''
    })
  }

  saveCiudad() {

    if (this.ciudad.cod_ciudad) {
      this.ciudadService.updateCiudad(this.ciudad)
        .subscribe(resp => {
          this.router.navigate(['/ciudades/list'])
        })
    } else {
      this.ciudad = { ...this.ciudad, ...this.myForm.value }
      this.ciudad.cod_ciudad = "1";
      this.ciudadService.addCiudad(this.ciudad)
        .subscribe(resp => {
          this.router.navigate(['/ciudades/list'])
        })
    }
  }

  deleteCiudad() {
    this.ciudadService.deleteCiudad(this.ciudad)
      .subscribe(resp => {
        this.router.navigate(['/ciudades/list']);
      })
  }

  validField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


}
