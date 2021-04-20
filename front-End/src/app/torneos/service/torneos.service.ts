import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Torneo } from '../interfaces/torneo';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTorneos() {
    return this.http.get<Torneo[]>(`${this.baseUrl}/torneo/torneos`);
  }

  // Servicio para buscar los heroes por Id
  getTorneoById(id: string) {
    return this.http.get<Torneo>(`${this.baseUrl}/torneo/torneos/${id}`);
  }

  // Servicio para añadir un heroe y que te devuelva a la pagina heroes
  addTorneo(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(`${this.baseUrl}/torneo/save`, torneo);
  }

  // Servicio para modificar un heroe y que te devuelva a la pagina del heroe segun su id
  updateTorneo(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(`${this.baseUrl}/torneo/update`, torneo);
  }

  // Servicio para borrar un heroe
  deleteTorneo(torneo: Torneo) {
    return this.http.get<Torneo>(`${this.baseUrl}/torneo/delete/${torneo.cod_torneo}`);
  }
}
