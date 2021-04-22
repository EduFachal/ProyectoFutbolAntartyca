import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Jugador, Equipo } from 'src/app/jugadores/interfaces/jugador.interface';
import { JugadoresService } from 'src/app/jugadores/service/jugadores.service';
import { MenuRutasAcciones, MenuRutasPrincipales } from '../interfaces/shared-interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`li{
    cursor:pointer;
  };
  ul{
    margin-bottom:5%
  }`
  ]
})
export class MenuComponent {

  equipo: Equipo = {
    cod_equipo: '',
    nombre_equipo: ''
  }

  jugador: Jugador = {
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
  }

  jugadores: Jugador[] = [];

  term: string = "";

  jugadorSelected: Jugador | undefined;

  rutaChild: MenuRutasAcciones[] = [];
  txtMin: string = "";
  nombreRuta: string = "/";
  menu: MenuRutasPrincipales[] = [
    { ruta: '/jugadores/list', texto: 'Jugadores', childrenRouting: [] },
    { ruta: '/equipos/list', texto: 'Equipos', childrenRouting: [] },
    { ruta: '/torneos/list', texto: 'Torneos', childrenRouting: [] },
    { ruta: '/federaciones/list', texto: 'Federaciones', childrenRouting: [] },
    { ruta: '/departamentos/list', texto: 'Departamentos', childrenRouting: [] },
    { ruta: '/ciudades/list', texto: 'Ciudades', childrenRouting: [] },
    { ruta: '/empleados/list', texto: 'Empleados', childrenRouting: [] }];

  constructor(private jugadorService: JugadoresService) { }

  getValue(txt: string) {
    this.txtMin = txt.toLowerCase();

    this.rutaChild = [];

    this.nombreRuta += this.txtMin + '/add';

    this.rutaChild.push(
      {
        rutaChildren: this.nombreRuta,
        textoChildren: 'Añadir ' + txt
      });
    if (this.txtMin === "jugadores") {
      this.nombreRuta = "/";
      this.nombreRuta += this.txtMin + '/search';

      this.rutaChild.push(
        {
          rutaChildren: this.nombreRuta,
          textoChildren: 'Buscar ' + txt
        });
      this.nombreRuta = "/";
    }

  }

  searching() {
    this.jugadorService.getPrompts(this.term.trim())
      .subscribe(resp => this.jugadores = resp);
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.jugadorSelected = undefined;
      return;
    }
    const jugador: Jugador = event.option.value;
    this.term = jugador.nombre;

    this.jugadorService.getJugadorById(jugador.cod_jugador!)
      .subscribe(resp => this.jugador = resp);
  }
}
