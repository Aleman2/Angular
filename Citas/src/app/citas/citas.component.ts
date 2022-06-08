import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from 'src/app/service/cita.service';
import { Cita } from 'src/app/model/cita';
import { PacientesService } from 'src/app/service/pacientes.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { MedicosService } from 'src/app/service/medicos.service';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  listCitas: any[] = [];
  paciente:string;
  tipo:String;
  medico:String;
  id:Number;
   constructor(private fb: FormBuilder,
    private _citasService: CitaService,
    private router: Router,
    private module: AppModule) {
    {

    }
   }
   ngOnInit(): void {
    this.tipo = String(sessionStorage.getItem('tipo'))
    this.id = Number(sessionStorage.getItem('id'))
    if(this.tipo == "paciente"){

      this.paciente = String('paciente')
      }else if(this.tipo == "medico"){
        this.medico = String('medico')
      }




    this._citasService.getCitas().subscribe(data => {
      const id2 = this.id
      const List : Array<Cita> = []
      if(this.tipo == "paciente"){
        data.forEach(function(x){
          if(x.paciente.id == id2){
            List.push(x)

          }else{
            List.push(x)
          }
      }
      );
      }else if(this.tipo == "medico"){
        data.forEach(function(x){
          if(x.medico.id == id2){
            List.push(x)

          }
      })
    }
      this.listCitas = List
      console.log(this.listCitas)

    }, error => {
      console.log(error);
    })



  }

  verdiagnostico(id){
    this.router.navigate(['diagnostico'], { queryParams: { id: id } })

  }

  creardiagnostico(id){
    this.router.navigate(['crear-diagnostico'], { queryParams: { id: id } })

  }
  crearcita(){
    this.router.navigate(['crear-cita'], { queryParams: { id: this.id } })
  }

}
