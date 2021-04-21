import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from '../../interfaces/equipo';
import { EquiposService } from '../../service/equipos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  equipo: Equipo = {
    cod_equipo: '',
    nombre_equipo: '',
    direccion: '',
    fecha_fundacion: '',
    jugadores:[],
    torneos:[]
  }

  myForm: FormGroup = this.fb.group({
    nombre_equipo:['',[Validators.minLength(3)]],
    direccion:['',[Validators.minLength(3)]],
    fecha_fundacion:['',[Validators.minLength(0)]],
  })

  constructor(private equipoService: EquiposService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }
    
  ngOnInit(): void {
   // this.equipoService.getEquipoByFilter().subscribe(equipo =>this.equipos = equipo)
   this.myForm.reset({
    nombre_equipo: '',
    direccion: '',
    fecha_fundacion: ''

  })
  }

  buscarEquipo(){
    this.equipo = { ...this.equipo, ...this.myForm.value }
    console.log(this.equipo)
    this.equipoService.getEquipoByFilter(this.equipo)
      .subscribe(resp => this.equipo = resp);
      console.log(this.equipo)  
  }

  validField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }
}
