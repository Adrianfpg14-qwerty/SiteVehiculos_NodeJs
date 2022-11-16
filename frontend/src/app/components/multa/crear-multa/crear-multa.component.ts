import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MultaI } from 'src/app/models/multa';
import { MultaService } from 'src/app/services/multa.service';

// PERSONA
import { PersonaI } from 'src/app/models/persona';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-crear-multa',
  templateUrl: './crear-multa.component.html',
  styleUrls: ['./crear-multa.component.css'],
})
export class CrearMultaComponent implements OnInit {

  // PERSONA
  public personas: PersonaI[] = [];

  public form: FormGroup = this.formBuilder.group({
    id: [''],
    consecutivoDeMultas: ['', [Validators.required]],
    fechaYHora: ['', [Validators.required]],
    lugarInfracion: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private multaService: MultaService,
    private messageService: MessageService,
    private router: Router,

    // PERSONA
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    // PERSONA
    this.mostrarPersonas();
  }

  // PERSONA
  mostrarPersonas() {
    this.personaService.getAllPersona().subscribe({
      next: (data) => {
        this.personas = data.personas;
        console.log(this.personas)
      },
    });
  }

  onSubmit(): void {
    const formValue: MultaI = this.form.value;
    console.log(formValue);
    this.multaService.createMulta(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Multa Creada',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('multas');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/multas');
  }


  get consecutivoDeMultas() { return this.form.get('consecutivoDeMultas'); }
  get fechaYHora() { return this.form.get('fechaYHora'); }
  get lugarInfracion() { return this.form.get('lugarInfracion'); }

  // get persona() { return this.form.get('persona'); }

}
