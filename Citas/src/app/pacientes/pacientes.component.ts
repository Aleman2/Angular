import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/service/pacientes.service';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/service/usuarios.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  listPacientes: any[] = [];
  listUsers: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(
    private toastr: ToastrService,
    private _pacientesService: PacientesService,
    private _usuarioService: UsuariosService) {

   }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerPacientes()
  }

  obtenerPacientes() {

    this._pacientesService.getPaciente().subscribe(data => {
      console.log(data);
      this.listPacientes = data;
    }, error => {
      console.log(error);
    })
  }

  obtenerUsuarios() {

    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }



  eliminarUsuario(id: number) {
    this._pacientesService.deletePaciente(id).subscribe(data => {
      this.toastr.error('La tarjeta fue eliminada con exito!','Tarjeta eliminada');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })

  }

  editarUsuario(usuario: any) {
    this.accion = 'Editar';
    this.id = usuario.id;

    this.form.patchValue({
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      user: usuario.user,
      clave: usuario.clave,
    })
  }

}
