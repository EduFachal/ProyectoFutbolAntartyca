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
}
