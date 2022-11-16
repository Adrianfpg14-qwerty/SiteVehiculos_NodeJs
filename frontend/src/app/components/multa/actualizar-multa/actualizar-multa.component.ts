import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MultaI } from 'src/app/models/multa';
import { MultaService } from 'src/app/services/multa.service';

@Component({
  selector: 'app-actualizar-multa',
  templateUrl: './actualizar-multa.component.html',
  styleUrls: ['./actualizar-multa.component.css'],
})
export class ActualizarMultaComponent implements OnInit {
  public id: number = 0;
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // let idmulta = this.route.snapshot.paramMap.get("id");
    this.getMulta(this.id);
  }

  getMulta(id: number) {
    this.multaService.getOneMulta(id).subscribe({
      next: (data) => {
        this.form.setValue(data.multa);
        console.log(data.multa)
      },
    });
  }

  onSubmit(): void {
    const formValue: MultaI = this.form.value;
    const id: number = this.form.value.id;
    this.multaService.updateMulta(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Multa Actualizada',
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
  
}
