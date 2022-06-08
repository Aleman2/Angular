import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {app_routes} from "./app-routing.module"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AddUsuariosComponent } from './add-usuarios/add-usuarios.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';
import { RegistroMedicosComponent } from './registro-medicos/registro-medicos.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CitasComponent } from './citas/citas.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { CrearDiagnosticoComponent } from './crear-diagnostico/crear-diagnostico.component';
import { PacientesComponent } from './pacientes/pacientes.component';

@NgModule({
  declarations: [
    AppComponent,

    AddUsuariosComponent,
    AddUsuariosComponent,
    RegistroUsuarioComponent,
    RegistroPacienteComponent,
    RegistroMedicosComponent,
    InicioSesionComponent,
    InicioComponent,
    MenuComponent,
    FooterComponent,
    CitasComponent,
    DiagnosticoComponent,
    ContactoComponent,
    CrearCitaComponent,
    CrearDiagnosticoComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),

    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    app_routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


}
