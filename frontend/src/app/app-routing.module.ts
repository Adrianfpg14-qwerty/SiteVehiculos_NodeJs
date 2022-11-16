import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MostrarPersonaComponent } from './components/persona/mostrar-persona/mostrar-persona.component'
import { CrearPersonaComponent } from './components/persona/crear-persona/crear-persona.component'
import { ActualizarPersonaComponent } from './components/persona/actualizar-persona/actualizar-persona.component'

import { MostrarMultaComponent } from './components/multa/mostrar-multa/mostrar-multa.component'
import { CrearMultaComponent } from './components/multa/crear-multa/crear-multa.component'
import { ActualizarMultaComponent } from './components/multa/actualizar-multa/actualizar-multa.component'

import { MostrarVehiculoComponent } from './components/vehiculo/mostrar-vehiculo/mostrar-vehiculo.component'
import { CrearVehiculoComponent } from './components/vehiculo/crear-vehiculo/crear-vehiculo.component'
import { ActualizarVehiculoComponent } from './components/vehiculo/actualizar-vehiculo/actualizar-vehiculo.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },


  // PERSONAS
  {
    path: 'personas',
    component: MostrarPersonaComponent,
  },
  {
    path: 'addpersonas',
    component: CrearPersonaComponent,
  },
  {
    path: 'personas/edit/:id',
    component: ActualizarPersonaComponent,
  },

  // MULTAS
  {
    path: 'multas',
    component: MostrarMultaComponent,
  },
  {
    path: 'addmultas',
    component: CrearMultaComponent,
  },
  {
    path: 'multas/edit/:id',
    component: ActualizarMultaComponent,
  },

  // VEHICULOS
  {
    path: 'vehiculos',
    component: MostrarVehiculoComponent,
  },
  {
    path: 'addvehiculos',
    component: CrearVehiculoComponent,
  },
  {
    path: 'vehiculos/edit/:id',
    component: ActualizarVehiculoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
