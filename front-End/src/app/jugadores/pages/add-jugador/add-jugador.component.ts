import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
//import { Equipo } from 'src/app/equipos/interfaces/equipo';
import { EquiposService } from 'src/app/equipos/service/equipos.service';
import { Equipo, Jugador } from '../../interfaces/jugador.interface';
import { JugadoresService } from '../../service/jugadores.service';

@Component({
  selector: 'app-add-jugador',
  templateUrl: './add-jugador.component.html',
  styles: [
  ]
})
export class AddJugadorComponent implements OnInit {

  puestos: string[]=['Delantero','Centrocampista','Defensa','Portero'];
/*
  equipo:Equipo={
    cod_equipo : '',
    nombre_equipo : '',
    direccion : '',
    fecha_fundacion : '',
    jugadores:[],
    torneos:[],
  }*/

  equipo: Equipo={
    cod_equipo: '',
    nombre_equipo: ''
  }

  equipos: Equipo[] = [];

  jugador: Jugador={
    cod_jugador: '',
    nombre: '',
    telefono: '',
    puesto: '',
    goles: 0,
    altura: 0,
    tarjetas: 0,
    activo: false,
    fecha_nacimiento: new Date(),
    equipo: this.equipo
  };

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    telefono:['',[Validators.required, Validators.minLength(0)]],
    nombre_equipo:['',[Validators.required, Validators.minLength(0)]],
    puesto:['',[Validators.required, Validators.minLength(0)]],
    goles:[0,[Validators.required, Validators.minLength(0)]],
    altura:[0,[Validators.required, Validators.minLength(0)]],
    tarjetas:[0,[Validators.required, Validators.minLength(0)]],
    fecha_nacimiento:['',[Validators.required, Validators.minLength(0)]],
    activo: [false]})


  constructor(private jugadorService : JugadoresService,
              private equipoService : EquiposService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(resp =>this.equipos = resp)
    if(!this.router.url.includes('edit')){
      return;
    }
     
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.jugadorService.getJugadorById(id))
    )
    .subscribe( jugador => this.jugador = jugador);
    this.myForm.reset({
      nombre: '',
      telefono: '',
      puesto: '',
      nombre_equipo:'',
      goles: 0,
      altura: 0,
      tarjetas: 0,
      fecha_nacimiento: 0,
      activo: false  
    })
  }

  save() {
    if (this.jugador.cod_jugador) {
      this.jugadorService.updateJugador(this.jugador)
        .subscribe(resp => { 
          this.router.navigate(['/jugadores/list']) })
    } else {
      this.jugador = {...this.jugador,...this.myForm.value}
      this.jugador.cod_jugador="1";
      this.jugador.fecha_nacimiento=this.myForm.get('fecha_nacimiento')?.value
      this.equipo.cod_equipo=this.myForm.get('nombre_equipo')?.value;
      this.jugador.equipo = this.equipo;
      this.jugadorService.addJugador(this.jugador)
        .subscribe(resp => { 
          this.router.navigate(['/jugadores/list']) })
    }
  }

  deleteJug() {
    this.jugadorService.deleteJugador(this.jugador)
          .subscribe(resp => {
            this.router.navigate(['/jugadores/list']);
      })
  }

  validField(field: string){
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched;
  }
}
