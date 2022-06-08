import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/service/pacientes.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { MedicosService } from 'src/app/service/medicos.service';
import { AppModule } from 'src/app/app.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private module:AppModule,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private _pacienteService: PacientesService,
    private _medicoService: MedicosService,

    private _usuarioService: UsuariosService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]]
    })
   }

   ngOnInit(): void {

      sessionStorage.removeItem('id'),
      sessionStorage.removeItem('tipo')
  }


  IniciarSesion() {
 const usuario = this.form.get('usuario')?.value;
const clave = this.form.get('clave')?.value;

    this._usuarioService.Search(usuario, clave).subscribe(data => {

      if(data === null){
        console.log('no encontrado');
      }else{
        const id = Number(data.id);
        this._pacienteService.getPacientebyId(id).subscribe(data => {
          console.log(data)
          if(data === null){
            console.log("NO es paciente");
          }else{

            sessionStorage.setItem('tipo','paciente');
            sessionStorage.setItem('id' ,String(data.id));
            console.log(sessionStorage.getItem('tipo'));
            console.log(sessionStorage.getItem('id'));

this.router.navigate(['inicio'])
          }
        }, error => {
          console.log("NO es paciente");
        })
        this._medicoService.getMedicobyId(id).subscribe(data => {
          console.log(data)
          if(data === null){
            console.log("NO es medico");
          }else{
            sessionStorage.setItem('tipo','medico');
            sessionStorage.setItem('id' ,String(data.id));
            console.log(sessionStorage.getItem('tipo'));
            console.log(sessionStorage.getItem('id'));

            this.router.navigate(['inicio'])
          }
        }, error => {
          console.log("NO es medico");
        })

      }

    }, error => {
      this.toastr.error('Usuario o contraseña equivocado','Error')
      console.log(error);
    })
  }


}
