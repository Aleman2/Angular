import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import {Pacientes} from '../model/pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url = 'http://localhost:5080/api/Paciente';
  constructor(private httpclient: HttpClient) { }

  //GetUsuarios
  getPaciente(): Observable<any>{
    return this.httpclient.get(this.url+"/GetPacientes")
  }
  getPacientebyId(id:number): Observable<Pacientes>{

    return this.httpclient.get<Pacientes>((this.url+"/Detalles/"+id))
  }
  //Post
  insertPaciente(paciente:Pacientes):Observable<any>{
    return this.httpclient.post(this.url+"/Create", paciente)
  }

  updatePaciente(id:number, paciente:Pacientes):Observable<any>{
    return this.httpclient.put(this.url+"/Edit/"+id, paciente)
  }

  deletePaciente(id:number): Observable<any>{
    return this.httpclient.delete(this.url+"/Delete/" +id)

  }
}
