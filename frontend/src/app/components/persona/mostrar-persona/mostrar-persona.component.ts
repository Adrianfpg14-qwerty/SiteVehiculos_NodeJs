import { Component, OnInit } from '@angular/core';
import { PersonaI } from 'src/app/models/persona';
import { Router } from '@angular/router';
import { PersonaService } from '../../../services/persona.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css'],
})
export class MostrarPersonaComponent implements OnInit {
  public personas: PersonaI[] = [];

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarPersonas();
  }

  mostrarPersonas() {
    this.personaService.getAllPersona().subscribe({
      next: (data) => {
        this.personas = data.personas;
        console.log(this.personas)
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/personas');
    this.personaService.deletePersona(id).subscribe(
      () => {
        this.messageService.add({ severity: 'warn', summary: 'Notificación', detail: 'Persona Eliminado', life: 5000 });
        this.mostrarPersonas();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/personas');
      }
    );
  }


  imprimir(id: number) { }
}
