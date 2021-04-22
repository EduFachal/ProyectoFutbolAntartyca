import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Federacion } from '../interfaces/federacion';

@Injectable({
  providedIn: 'root'
})
export class FederacionesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFederaciones() {
    return this.http.get<Federacion[]>(`${this.baseUrl}/federacion/federaciones`);
  }
  
  getFederacionById(id: string) {
    return this.http.get<Federacion>(`${this.baseUrl}/federacion/federaciones/${id}`);
  }

  addFederacion(federacion: Federacion): Observable<Federacion> {
    return this.http.post<Federacion>(`${this.baseUrl}/federacion/save`, federacion);
  }

  updateFederacion(federacion: Federacion): Observable<Federacion> {
    return this.http.post<Federacion>(`${this.baseUrl}/federacion/update`, federacion);
  }

  deleteFederacion(federacion: Federacion) {
    return this.http.get<Federacion>(`${this.baseUrl}/federacion/delete/${federacion.cod_federacion}`);
  }
}
