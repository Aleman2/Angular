import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from 'src/app/service/cita.service';
import { Diagnostico } from 'src/app/model/diagnostico';
import { PacientesService } from 'src/app/service/pacientes.service';
import { DiagnosticoService } from 'src/app/service/diagnostico.service';
import { MedicosService } from 'src/app/service/medicos.service';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css'],
})
export class DiagnosticoComponent implements OnInit {
  listCitas: any[] = [];
  diagnostico:   Diagnostico
  paciente:string;

  tipo: String;
  medico: String;
  id: Number;
  data: String;
  constructor(
    private fb: FormBuilder,
    private _diagnosticoService: DiagnosticoService,
    private route: ActivatedRoute,
    private router: Router,
    private module: AppModule
  ) {}

  ngOnInit(): void {
    this.tipo = String(sessionStorage.getItem('tipo'));
    this.id = Number(sessionStorage.getItem('id'));
    if (this.tipo == 'paciente') {
      this.paciente = String('paciente');
    } else if (this.tipo == 'medico') {
      this.medico = String('medico');
    }

    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });

    this._diagnosticoService.getDiagnosticobyId(this.id).subscribe(data => {


        this.diagnostico = data
        console.log(this.diagnostico)
  })

}
}
