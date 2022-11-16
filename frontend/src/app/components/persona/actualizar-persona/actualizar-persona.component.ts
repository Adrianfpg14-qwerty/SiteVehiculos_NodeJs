import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PersonaI } from '../../../models/persona';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css'],
})
export class ActualizarPersonaComponent implements OnInit {
  public id: number = 0;

  public form: FormGroup = this.formBuilder.group({
    id: [''],
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // let idpersona = this.route.snapshot.paramMap.get("id");
    this.getPersona(this.id);
  }

  getPersona(id: number) {
    this.personaService.getOnePersona(id).subscribe({
      next: (data) => {
        this.form.setValue(data.persona);
        console.log(data.persona)
      },
    });
  }

  onSubmit(): void {
    const formValue: PersonaI = this.form.value;
    const id: number = this.form.value.id;
    this.personaService.updatePersona(id, formValue).subscribe(
      () => {   
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Persona Actualizada',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('personas');
      },
      (err) => {
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
