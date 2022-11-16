import { Component, OnInit } from '@angular/core';
import { MultaI } from 'src/app/models/multa';
import { Router } from '@angular/router';
import { MultaService } from '../../../services/multa.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-multa',
  templateUrl: './mostrar-multa.component.html',
  styleUrls: ['./mostrar-multa.component.css'],
})
export class MostrarMultaComponent implements OnInit {
  public multas: MultaI[] = [];

  constructor(
    private multaService: MultaService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarMultas();
  }

  mostrarMultas() {
    this.multaService.getAllMulta().subscribe({
      next: (data) => {
        this.multas = data.multas;
        console.log(this.multas)
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/multas');
    this.multaService.deleteMulta(id).subscribe(
      () => {
        this.messageService.add({ severity: 'warn', summary: 'Notificación', detail: 'Multa Eliminado', life: 5000 });
        this.mostrarMultas();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/multas');
      }
    );
  }


  imprimir(id: number) { }
}
