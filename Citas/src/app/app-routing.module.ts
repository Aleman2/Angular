import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import {RegistroMedicosComponent} from './registro-medicos/registro-medicos.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';
import { AddUsuariosComponent } from './add-usuarios/add-usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { CitasComponent } from './citas/citas.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { CrearDiagnosticoComponent } from './crear-diagnostico/crear-diagnostico.component';
import { PacientesComponent } from './pacientes/pacientes.component';




const routes: Routes = [
{path:'inicio-sesion',component: InicioSesionComponent },
{path:'add-usuarios',component: AddUsuariosComponent },
{path:'inicio',component: InicioComponent },
{path:'citas',component: CitasComponent },
{path:'diagnostico',component: DiagnosticoComponent },
{path:'contacto',component: ContactoComponent },
{path:'crear-cita',component: CrearCitaComponent },
{path:'crear-diagnostico',component: CrearDiagnosticoComponent },
{path:'pacientes',component: PacientesComponent },


{path:'registro-medicos',component: RegistroMedicosComponent },
{path:'registro-pacientes',component: RegistroPacienteComponent },
{path:'**',pathMatch:'full', redirectTo: 'inicio-sesion'},






];

export const app_routes = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
