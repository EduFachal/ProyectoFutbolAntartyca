import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Equipo } from '../../interfaces/equipo';
import { EquiposService } from '../../service/equipos.service';

@Component({
  selector: 'app-add-equipo',
  templateUrl: './add-equipo.component.html',
  styles: [
  ]
})
export class AddEquipoComponent implements OnInit {

  equipo: Equipo = {
    cod_equipo: '',
    nombre_equipo: '',
    direccion: '',
    fecha_fundacion: '',
    jugadores:[],
    torneos:[]
  }

  myForm: FormGroup = this.fb.group({
    nombre_equipo:['',[Validators.required,Validators.minLength(3)]],
    direccion:['',[Validators.required,Validators.minLength(3)]],
    fecha_fundacion:['',[Validators.required, Validators.minLength(0)]],
  })

  constructor(private equipoService: EquiposService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.equipoService.getEquipoById(id))
      )
      .subscribe(equipo => this.equipo = equipo);

    this.myForm.reset({
      nombre_equipo: '',
      direccion: '',
      fecha_fundacion: ''

    })
  }

  saveEquipo() {

    if (this.equipo.cod_equipo) {
      this.equipoService.updateEquipo(this.equipo)
        .subscribe(resp => {
          this.router.navigate(['/equipos/list'])
        })
    } else {
      this.equipo = { ...this.equipo, ...this.myForm.value }
      this.equipo.cod_equipo = "1";
      this.equipoService.addEquipo(this.equipo)
        .subscribe(resp => {
          this.router.navigate(['/equipos/list'])
        })
    }
  }

  deleteEquipo() {
    this.equipoService.deleteEquipo(this.equipo)
      .subscribe(resp => {
        this.router.navigate(['/equipos/list']);
      })
  }

  validField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

}
