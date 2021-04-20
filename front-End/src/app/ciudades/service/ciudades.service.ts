import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../interfaces/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCiudades() {
    return this.http.get<Ciudad[]>(`${this.baseUrl}/ciudad/ciudades`);
  }
  // Servicio para buscar los heroes por Id
  getCiudadById(id: string) {
    return this.http.get<Ciudad>(`${this.baseUrl}/ciudad/ciudades/${id}`);
  }

  // Servicio para añadir un heroe y que te devuelva a la pagina heroes
  addCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${this.baseUrl}/ciudad/save`, ciudad);
  }

  // Servicio para modificar un heroe y que te devuelva a la pagina del heroe segun su id
  updateCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${this.baseUrl}/ciudad/update`, ciudad);
  }

  // Servicio para borrar un equipo
  deleteCiudad(ciudad: Ciudad) {
    return this.http.get<Ciudad>(`${this.baseUrl}/ciudad/delete/${ciudad.cod_ciudad}`);
  }
}
