import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import {Diagnostico} from '../model/diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {

  url = 'http://localhost:5080/api/Diagnosticos';
  constructor(private httpclient: HttpClient) { }

  //GetUsuarios
  getDiagnostico(): Observable<any>{
    return this.httpclient.get(this.url+"/GetDiagnostico")
  }
  getDiagnosticobyId(id:Number): Observable<Diagnostico>{
    return this.httpclient.get<Diagnostico>(this.url+"/Detalles/"+id)
  }
  //Post
  insertDiagnostico(diagnostico:Diagnostico):Observable<any>{
    return this.httpclient.post(this.url+"/Create", diagnostico)
  }

  updateDiagnostico(diagnostico:Diagnostico):Observable<any>{
    return this.httpclient.put(this.url+"/Edit", diagnostico)
  }

  deleteDiagnostico(id:number): Observable<any>{
    return this.httpclient.delete(this.url+"/Delete/" +id)

  }
}
