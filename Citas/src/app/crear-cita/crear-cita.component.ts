import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from 'src/app/service/cita.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  listUsers: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;
  paciente:string;

  tipo: String;
  medico: String;
  data: String;
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private _citaService: CitaService) {
    this.form = this.fb.group({
      fechahora: ['', Validators.required],
      motivocita: ['', [Validators.required, Validators.maxLength(35), Validators.minLength(5)]],
      paciente: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2)]],

    })
   }
   ngOnInit(): void {
    this.tipo = String(sessionStorage.getItem('tipo'));
    this.id = Number(sessionStorage.getItem('id'));
    if (this.tipo == 'paciente') {
      this.paciente = String('paciente');
    } else if (this.tipo == 'medico') {
      this.medico = String('medico');
    }



}


  guardarCita() {
  const cita: any = {
    fechahora: this.form.get('fechahora')?.value,
    motivocita: this.form.get('motivocita')?.value,

    }

    if(this.id == undefined) {
        this._citaService.insertCita(cita).subscribe(data => {
          this.toastr.success('Registrado con exito!', 'Cita Registrada');
          console.log(data);

          this.form.reset();
        }, error => {
          console.log(error);

          this.toastr.error('Opss.. ocurrio un error','Error')
        })
    }


  }

}
