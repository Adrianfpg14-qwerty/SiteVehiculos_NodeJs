import { Component, OnInit } from '@angular/core';
import { VehiculoI } from 'src/app/models/vehiculo';
import { Router } from '@angular/router';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-vehiculo',
  templateUrl: './mostrar-vehiculo.component.html',
  styleUrls: ['./mostrar-vehiculo.component.css'],
})
export class MostrarVehiculoComponent implements OnInit {
  public vehiculos: VehiculoI[] = [];

  constructor(
    private vehiculoService: VehiculoService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarVehiculos();
  }

  mostrarVehiculos() {
    this.vehiculoService.getAllVehiculo().subscribe({
      next: (data) => {
        this.vehiculos = data.vehiculos;
        console.log(this.vehiculos)
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/vehiculos');
    this.vehiculoService.deleteVehiculo(id).subscribe(
      () => {
        this.messageService.add({ severity: 'warn', summary: 'Notificación', detail: 'Vehiculo Eliminado', life: 5000 });
        this.mostrarVehiculos();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/vehiculos');
      }
    );
  }


  imprimir(id: number) { }
}
