import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiculoI } from '../models/vehiculo';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/vehiculos/`;

  constructor(private http: HttpClient) {}

  getAllVehiculo(): Observable<{ vehiculos: VehiculoI[] }> {
    return this.http.get<{ vehiculos: VehiculoI[] }>(this.base_path);
  }

  getOneVehiculo(id: number): Observable<{ vehiculo: VehiculoI[] }> {
    return this.http.get<{ vehiculo: VehiculoI[] }>(`${this.base_path}${id}`);
  }

  createVehiculo(data: any): Observable<VehiculoI> {
    return this.http.post<VehiculoI>(this.base_path, data);
  }

  updateVehiculo(id: number, data: any): Observable<VehiculoI> {
    console.log(id, data);
    return this.http.put<VehiculoI>(`${this.base_path}${id}`, data);
  }

  deleteVehiculo(id: number): Observable<VehiculoI> {
    return this.http.delete<VehiculoI>(`${this.base_path}${id}`);
  }
}
