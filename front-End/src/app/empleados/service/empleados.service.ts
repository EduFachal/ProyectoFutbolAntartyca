import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get<Empleado[]>(`${this.baseUrl}/empleado/empleados`);
  }

  getEmpleadoById(id: string) {
    return this.http.get<Empleado>(`${this.baseUrl}/empleado/empleados/${id}`);
  }

  addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.baseUrl}/empleado/save`, empleado);
  }

  updateEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.baseUrl}/empleado/update`, empleado);
  }

  deleteEmpleado(empleado: Empleado) {
    return this.http.get<Empleado>(`${this.baseUrl}/empleado/delete/${empleado.cod_emp}`);
  }
}
