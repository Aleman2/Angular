import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import {Usuarios} from '../model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
url = 'http://localhost:5080/api/Usuario';
  constructor(private httpclient: HttpClient) { }

  //GetUsuarios
  getUsuarios(): Observable<any>{
    return this.httpclient.get(this.url+"/GetUsuarios")
  }
  getUsuariosbyId(id:number): Observable<Usuarios>{
    let params = new HttpParams().set('id', id)
    return this.httpclient.get<Usuarios>((this.url+"/Detalles/"+id),{params:params})
  }
  //Post
  insertUsuario(usuario:any):Observable<any>{
    return this.httpclient.post(this.url+"/Create", usuario)
  }

  Search(usuario:string, clave:string): Observable<Usuarios>{
    let params = new HttpParams()
    params = params.append('usuario', usuario)
    params = params.append('clave', clave)
    return this.httpclient.get<Usuarios>(this.url+"/Detalles/"+usuario+'/'+clave)
  }

  updateUsuario(id:number, usuario:any):Observable<any>{
    return this.httpclient.put(this.url+"/Edit/"+id, usuario)
  }

  deleteUsuario(id:number): Observable<any>{
    return this.httpclient.delete(this.url+"/Delete/" +id)

  }
}
