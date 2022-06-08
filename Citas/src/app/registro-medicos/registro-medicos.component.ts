
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from 'src/app/service/medicos.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registro-medicos',
  templateUrl: './registro-medicos.component.html',
  styleUrls: ['./registro-medicos.component.css']
})
export class RegistroMedicosComponent {

  listUsers: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _medicosService: MedicosService) {
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        apellidos: ['', [Validators.required, Validators.maxLength(35), Validators.minLength(5)]],
        user: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2)]],
        NumColegiado: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2)]],
        clave: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]]
      })
     }



  guardarMedico() {
  const medico: any = {
      nombre: this.form.get('nombre')?.value,
      apellidos: this.form.get('apellidos')?.value,
      user: this.form.get('user')?.value,
      clave: this.form.get('clave')?.value,
      NumColegiado: this.form.get('NumColegiado')?.value,

    }

    if(this.id == undefined) {
        this._medicosService.insertMedico(medico).subscribe(data => {
          this.toastr.success('Registrado con exito!', 'Medico Registrada');
          console.log(data);

          this.form.reset();
        }, error => {
          console.log(error);

          this.toastr.error('Opss.. ocurrio un error','Error')
        })
    }


  }

}
