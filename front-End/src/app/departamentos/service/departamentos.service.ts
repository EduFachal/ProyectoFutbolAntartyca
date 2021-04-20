import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDepartamentos() {
    return this.http.get<Departamento[]>(`${this.baseUrl}/departamento/departamentos`);
  }
  // Servicio para buscar los heroes por Id
  getDepartamentoById(id: string) {
    return this.http.get<Departamento>(`${this.baseUrl}/departamento/departamentos/${id}`);
  }

  // Servicio para añadir un heroe y que te devuelva a la pagina heroes
  addDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.baseUrl}/departamento/save`, departamento);
  }

  // Servicio para modificar un heroe y que te devuelva a la pagina del heroe segun su id
  updateDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.baseUrl}/departamento/update`, departamento);
  }

  // Servicio para borrar un equipo
  deleteDepartamento(departamento: Departamento) {
    return this.http.get<Departamento>(`${this.baseUrl}/departamento/delete/${departamento.cod_depart}`);
  }
}
