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

  getDepartamentoById(id: string) {
    return this.http.get<Departamento>(`${this.baseUrl}/departamento/departamentos/${id}`);
  }

  addDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.baseUrl}/departamento/save`, departamento);
  }

  updateDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.baseUrl}/departamento/update`, departamento);
  }

  deleteDepartamento(departamento: Departamento) {
    return this.http.get<Departamento>(`${this.baseUrl}/departamento/delete/${departamento.cod_depart}`);
  }
}
