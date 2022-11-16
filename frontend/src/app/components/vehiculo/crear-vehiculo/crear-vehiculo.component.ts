import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { VehiculoI } from 'src/app/models/vehiculo';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    matricula: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelos: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: VehiculoI = this.form.value;
    console.log(formValue);
    this.vehiculoService.createVehiculo(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'Vehiculo Creado', life: 5000 });

        }, 0);
        this.router.navigateByUrl('vehiculos');

      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/vehiculos');
  }

  get matricula() { return this.form.get('matricula'); }
  get marca() { return this.form.get('marca'); }
  get modelos() { return this.form.get('modelos'); }



}
