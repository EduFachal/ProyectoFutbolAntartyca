import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/equipos/interfaces/equipo';
import { Jugador } from '../../interfaces/jugador.interface';
import { JugadoresService } from '../../service/jugadores.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  puestos: string[]=['Delantero','Centrocampista','Defensa','Portero'];

  equipo: Equipo = {
    cod_equipo: '',
    nombre_equipo: '',
    direccion: '',
    fecha_fundacion: '',
    jugadores:[],
    torneos:[]
  }
  jugadores: Jugador[] = [];
  jugador: Jugador = {
    cod_jugador: '',
    nombre: '',
    telefono: '',
    puesto: '',
    goles: 0,
    altura: 0,
    tarjetas: 0,
    activo: true,
    fecha_nacimiento: new Date(),
    equipo: this.equipo
  }

  form: FormGroup = this.fb.group({
    goles:[''],
    puesto:[''],
    fechaInicio:[''],
    fechaFin:[''],
  })

  constructor(private jugadorService: JugadoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }
    
  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(){
    this.form.reset({
      goles: '',
      puesto: '',
      fechaInicio: '',
      fechaFin: ''})
  }

  buscarEquipoGolesPosicion(){

    if(this.form.get('goles')?.value != '' && this.form.get('puesto')?.value != ''  && this.form.get('puesto')?.value != null){ 
     this.jugadorService.buscarJugadoresPorGolesYPosicion(this.form.get('puesto')?.value,this.form.get('goles')?.value)
      .subscribe(resp => this.jugadores = resp);

    } else if(this.form.get('goles')?.value != '' && this.form.get('puesto')?.value != null ){
      this.jugadorService.buscarJugadoresPorGoles(this.form.get('goles')?.value)
      .subscribe(resp => this.jugadores = resp);
    }
    this.resetForm();
  }

  buscarEquipo(){
    
  if(this.form.get('fechas')?.value != ''){
      this.jugadorService.buscarJugadoresPorFecha(this.form.get('fechaInicio')?.value,this.form.get('fechaFin')?.value)
      .subscribe(resp => this.jugadores = resp);
    } 
    this.resetForm();
  }

  sacarExcelButton(){

    if(this.form.get('goles')?.value != ''){ 
      this.jugadorService.sacarExcel(this.form.get('goles')?.value)
       .subscribe(resp => this.jugadores = resp);
      window.alert('Se extrajo su excel')
     }
  }

  limpiarTabla(){
    this.jugadores = [];
  }
}
