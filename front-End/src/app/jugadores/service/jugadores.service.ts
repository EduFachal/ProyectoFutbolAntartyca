import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../interfaces/jugador.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getJugadores() {
    return this.http.get<Jugador[]>(`${this.baseUrl}/jugador/jugadores`);
  }

  getPrompts( term : string){
    return this.http.get<Jugador[]>(`${this.baseUrl}/jugador/jugadores?q=${ term }&_limit=6`);
  }

  getJugadorById(id: string) {
    return this.http.get<Jugador>(`${this.baseUrl}/jugador/jugadores/${id}`);
  }

  addJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.baseUrl}/jugador/save`, jugador);
  }

  updateJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.baseUrl}/jugador/update`, jugador);
  }

  deleteJugador(jugador: Jugador) {
    return this.http.get<Jugador>(`${this.baseUrl}/jugador/delete/${jugador.cod_jugador}`);
  }

  buscarJugadoresPorGolesYPosicion(posicion: string , goles: string) {
    return this.http.get<Jugador[]>(`${this.baseUrl}/jugador/buscarPorPuestoYGoles/${posicion}/${goles}`);
  }

  buscarJugadoresPorGoles(goles: string) {
    return this.http.get<Jugador[]>(`${this.baseUrl}/jugador/busquedaPorGoles/${goles}`);
  }

  buscarJugadoresPorFecha(fechaInicio : Date, fechaFin : Date){
    return this.http.get<Jugador[]>(`${this.baseUrl}/jugador/buscarEntreFechas/${fechaInicio}/${fechaFin}`);
  }

  sacarExcel(goles: string){
    return this.http.get<Jugador[]>(`${this.baseUrl}/jugador//busquedaPorGoles/${goles}/export/excel`);
  }
}
