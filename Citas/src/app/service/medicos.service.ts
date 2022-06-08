import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import {Medicos} from '../model/medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  url = 'http://localhost:5080/api/Medicos';
  constructor(private httpclient: HttpClient) { }

  //GetUsuarios
  getMedico(): Observable<any>{
    return this.httpclient.get(this.url+"/GetMedicos")
  }
  getMedicobyId(id:number): Observable<Medicos>{
    return this.httpclient.get<Medicos>(this.url+"/Detalles/"+id)
  }

  //Post
  insertMedico(medico:Medicos):Observable<any>{
    return this.httpclient.post(this.url+"/Create", medico)
  }

  updateMedico(id:number, medico:Medicos):Observable<any>{
    return this.httpclient.put(this.url+"/Edit/"+id, medico)
  }

  deleteMedico(id:number): Observable<any>{
    return this.httpclient.delete(this.url+"/Delete/"+id)

  }
}
