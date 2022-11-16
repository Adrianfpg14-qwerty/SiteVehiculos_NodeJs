import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { VehiculoI } from 'src/app/models/vehiculo';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-actualizar-vehiculo',
  templateUrl: './actualizar-vehiculo.component.html',
  styleUrls: ['./actualizar-vehiculo.component.css']
})
export class ActualizarVehiculoComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
    matricula: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelos: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idVehiculo = this.route.snapshot.paramMap.get("id");
    this.getVehiculo(this.id);

  }



  getVehiculo(id: number) {
    this.vehiculoService.getOneVehiculo(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data.vehiculo)
          // console.log(data.vehiculo)
        }
      })
  }

  onSubmit(): void {
    const formValue: VehiculoI = this.form.value;
    const id: number = this.form.value.id
    this.vehiculoService.updateVehiculo(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'Vehiculo Actualizado', life: 5000 });

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
