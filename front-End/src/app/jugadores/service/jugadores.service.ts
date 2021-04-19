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

  // Servicio para buscar los heroes por Id
  getJugadorById(id: string) {
    return this.http.get<Jugador>(`${this.baseUrl}/jugador/jugadores/${id}`);
  }

  // Servicio para añadir un heroe y que te devuelva a la pagina heroes
  addJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.baseUrl}/heroes`, jugador);
  }

  // Servicio para modificar un heroe y que te devuelva a la pagina del heroe segun su id
  updateJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.baseUrl}/heroes/${jugador.cod_jugador}`, jugador);
  }

  // Servicio para borrar un heroe
  deleteJugador(jugador: Jugador) {
    return this.http.get<Jugador>(`${this.baseUrl}/jugador/borrar/${jugador.cod_jugador}`);
  }
}
