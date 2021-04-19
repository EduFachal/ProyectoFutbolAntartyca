import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private baseUrl: string = environment.baseUrl;
  
  constructor(private http : HttpClient) { }

  getEquipos(){
    return this.http.get<Equipo[]>(`${this.baseUrl}/equipo/equipos`);
  }
}
