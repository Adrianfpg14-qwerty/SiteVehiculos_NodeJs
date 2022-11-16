import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';

import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MostrarPersonaComponent } from './components/persona/mostrar-persona/mostrar-persona.component';
import { CrearPersonaComponent } from './components/persona/crear-persona/crear-persona.component';
import { ActualizarPersonaComponent } from './components/persona/actualizar-persona/actualizar-persona.component';
import { EliminarPersonaComponent } from './components/persona/eliminar-persona/eliminar-persona.component';
import { MostrarMultaComponent } from './components/multa/mostrar-multa/mostrar-multa.component';
import { CrearMultaComponent } from './components/multa/crear-multa/crear-multa.component';
import { ActualizarMultaComponent } from './components/multa/actualizar-multa/actualizar-multa.component';
import { EliminarMultaComponent } from './components/multa/eliminar-multa/eliminar-multa.component';
import { MostrarVehiculoComponent } from './components/vehiculo/mostrar-vehiculo/mostrar-vehiculo.component';
import { CrearVehiculoComponent } from './components/vehiculo/crear-vehiculo/crear-vehiculo.component';
import { ActualizarVehiculoComponent } from './components/vehiculo/actualizar-vehiculo/actualizar-vehiculo.component';
import { EliminarVehiculoComponent } from './components/vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MostrarPersonaComponent,
    CrearPersonaComponent,
    ActualizarPersonaComponent,
    EliminarPersonaComponent,
    MostrarMultaComponent,
    CrearMultaComponent,
    ActualizarMultaComponent,
    EliminarMultaComponent,
    MostrarVehiculoComponent,
    CrearVehiculoComponent,
    ActualizarVehiculoComponent,
    EliminarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
