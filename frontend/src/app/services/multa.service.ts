import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultaI } from '../models/multa';

@Injectable({
  providedIn: 'root',
})
export class MultaService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/multas/`;

  constructor(private http: HttpClient) {}

  getAllMulta(): Observable<{ multas: MultaI[] }> {
    return this.http.get<{ multas: MultaI[] }>(this.base_path);
  }

  getOneMulta(id: number): Observable<{ multa: MultaI[] }> {
    return this.http.get<{ multa: MultaI[] }>(`${this.base_path}${id}`);
  }

  createMulta(data: any): Observable<MultaI> {
    return this.http.post<MultaI>(this.base_path, data);
  }

  updateMulta(id: number, data: any): Observable<MultaI> {
    console.log(id, data);
    return this.http.put<MultaI>(`${this.base_path}${id}`, data);
  }

  deleteMulta(id: number): Observable<MultaI> {
    return this.http.delete<MultaI>(`${this.base_path}${id}`);
  }
}
