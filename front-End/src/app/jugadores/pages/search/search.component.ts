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
    fechaInicio:[''],
    fechaFin:[''],
  })

  constructor(private jugadorService: JugadoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }
    
  ngOnInit(): void {
   this.form.reset({
    goles: '',
    fechaInicio: '',
    fechaFin: ''

  })
  }

  buscarEquipo(){
    if(this.form.get('goles')?.value != ''){
      this.jugadorService.buscarJugadoresPorGoles(this.form.get('goles')?.value)
      .subscribe(resp => this.jugadores = resp);
    }else if(this.form.get('fechas')?.value != ''){
      this.jugadorService.buscarJugadoresPorFecha(this.form.get('fechaInicio')?.value,this.form.get('fechaFin')?.value)
      .subscribe(resp => this.jugadores = resp);
    }
    
  }

  limpiarTabla(){
    this.jugadores = [];
  }
}
