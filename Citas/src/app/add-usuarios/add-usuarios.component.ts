import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.css']
})
export class AddUsuariosComponent implements OnInit {

  listUsers: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _usuarioService: UsuariosService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', [Validators.required, Validators.maxLength(35), Validators.minLength(5)]],
      user: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      clave: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]]
    })
   }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {

    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }

  obtenerUsuarios2() {
 const nombre = this.form.get('nombre')?.value;
const clave = this.form.get('clave')?.value;

    this._usuarioService.Search(nombre, clave).subscribe(data => {
      console.log(data);
    }, error => {
      this.toastr.error('Usuario o contraseña equivocado','Error')
      console.log(error);
    })
  }

  guardarUsuario() {
  const usuario: any = {
      nombre: this.form.get('nombre')?.value,
      apellidos: this.form.get('apellidos')?.value,
      user: this.form.get('user')?.value,
      clave: this.form.get('clave')?.value,
    }

    if(this.id == undefined) {
        this._usuarioService.insertUsuario(usuario).subscribe(data => {
          this.toastr.success('La tarjeta fue registrada con exito!', 'Usuario Registrada');
          this.obtenerUsuarios();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
        })
    }else {

      usuario.id = this.id;
      this._usuarioService.updateUsuario(this.id,usuario).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('La usuario fue actualizada con exito!', 'Tarjeta Actualizada');
        this.obtenerUsuarios();
      }, error => {
        console.log(error);
      })

    }


  }

  eliminarUsuario(id: number) {
    this._usuarioService.deleteUsuario(id).subscribe(data => {
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
