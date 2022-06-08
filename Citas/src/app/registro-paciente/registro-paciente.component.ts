

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/service/pacientes.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent {

  listUsers: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _pacienteservice: PacientesService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', [Validators.required, Validators.maxLength(35), Validators.minLength(5)]],
      user: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2)]],
      nss: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      numTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2)]],
      direccion: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      clave: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]]
    })
   }



  guardarPaciente() {
  const paciente: any = {
      nombre: this.form.get('nombre')?.value,
      apellidos: this.form.get('apellidos')?.value,
      user: this.form.get('user')?.value,
      clave: this.form.get('clave')?.value,
      nss: this.form.get('nss')?.value,
      numTarjeta: this.form.get('numTarjeta')?.value,
      telefono: this.form.get('telefono')?.value,
      direccion: this.form.get('direccion')?.value,
    }

    if(this.id == undefined) {
        this._pacienteservice.insertPaciente(paciente).subscribe(data => {
          this.toastr.success('Registrado con exito!', 'Paciente Registrada');
          console.log(data);

          this.form.reset();
        }, error => {
          console.log(error);

          this.toastr.error('Opss.. ocurrio un error','Error')
        })
    }


  }

}
