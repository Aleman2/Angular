import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import {Cita} from '../model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  url = 'http://localhost:5080/api/Citas';
  constructor(private httpclient: HttpClient) { }

  //GetUsuarios
  getCitas(): Observable<any>{
    return this.httpclient.get(this.url+"/GetCitas")
  }
  getCitabyId(id:number): Observable<Cita>{

    return this.httpclient.get<Cita>(this.url+"/Detalles/"+id)
  }
  //Post
  insertCita(cita:Cita):Observable<any>{
    return this.httpclient.post(this.url+"/Create", cita)
  }

  updateCita(cita:Cita):Observable<any>{
    return this.httpclient.put(this.url+"/Edit", cita)
  }

  deleteCita(id:number): Observable<any>{
    return this.httpclient.delete(this.url+"/Delete/" +id)

  }
}
