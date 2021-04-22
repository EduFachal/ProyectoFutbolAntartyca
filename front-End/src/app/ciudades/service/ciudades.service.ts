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

  getCiudadById(id: string) {
    return this.http.get<Ciudad>(`${this.baseUrl}/ciudad/ciudades/${id}`);
  }

  addCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${this.baseUrl}/ciudad/save`, ciudad);
  }

  updateCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${this.baseUrl}/ciudad/update`, ciudad);
  }

  deleteCiudad(ciudad: Ciudad) {
    return this.http.get<Ciudad>(`${this.baseUrl}/ciudad/delete/${ciudad.cod_ciudad}`);
  }
}
