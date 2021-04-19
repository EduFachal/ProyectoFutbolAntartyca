import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getEquipos() {
    return this.http.get<Equipo[]>(`${this.baseUrl}/equipo/equipos`);
  }
  // Servicio para buscar los heroes por Id
  getEquipoById(id: string) {
    return this.http.get<Equipo>(`${this.baseUrl}/equipo/equipo/${id}`);
  }

  // Servicio para añadir un heroe y que te devuelva a la pagina heroes
  addEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(`${this.baseUrl}/equipo/save`, equipo);
  }

  // Servicio para modificar un heroe y que te devuelva a la pagina del heroe segun su id
  updateEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(`${this.baseUrl}/equipo/update`, equipo);
  }

  // Servicio para borrar un equipo
  deleteEquipo(equipo: Equipo) {
    return this.http.get<Equipo>(`${this.baseUrl}/equipo/delete/${equipo.cod_equipo}`);
  }
}
