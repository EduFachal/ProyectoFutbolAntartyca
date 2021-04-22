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

  getTorneoById(id: string) {
    return this.http.get<Torneo>(`${this.baseUrl}/torneo/torneos/${id}`);
  }

  addTorneo(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(`${this.baseUrl}/torneo/save`, torneo);
  }

  updateTorneo(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(`${this.baseUrl}/torneo/update`, torneo);
  }

  deleteTorneo(torneo: Torneo) {
    return this.http.get<Torneo>(`${this.baseUrl}/torneo/delete/${torneo.cod_torneo}`);
  }
}
