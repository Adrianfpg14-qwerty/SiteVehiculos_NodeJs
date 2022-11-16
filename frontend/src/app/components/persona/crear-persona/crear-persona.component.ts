import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from '../../../services/persona.service';
import { PersonaI } from '../../../models/persona';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})

export class CrearPersonaComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    dni: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    tipoDePersonas: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: PersonaI = this.form.value;
    console.log(formValue);
    this.personaService.createPersona(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'Persona Creado', life: 5000 });

        }, 0);
        this.router.navigateByUrl('personas');

      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/personas');
  }

  get dni() { return this.form.get('dni'); }
  get nombre() { return this.form.get('nombre'); }
  get apellidos() { return this.form.get('apellidos'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  get ciudad() { return this.form.get('ciudad'); }
  get tipoDePersonas() { return this.form.get('tipoDePersonas'); }

}
