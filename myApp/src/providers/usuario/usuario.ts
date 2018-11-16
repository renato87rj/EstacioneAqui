import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public urlUsuario = "http://localhost:8000/usuario";

  public urlCadastro = "http://localhost:8000/api/register";
  public urlLogin = "http://localhost:8000/api/login";

  constructor(public http: HttpClient) {
    
  }

  public mostrar():Observable<any>{
    return this.http.get(this.urlUsuario);  
  }

  public salvar(usuario):Observable<any>{
    return this.http.post(this.urlCadastro, usuario);
  }

  public deletar(id):Observable<any>{
    return this.http.delete(this.urlUsuario + "/" + id);    
  }

  public editar(usuario):Observable<any>{
    return this.http.put(this.urlUsuario + "/" + usuario.id, usuario);
  }

  public login(usuario):Observable<any>{
    return this.http.post(this.urlLogin, usuario);

  }

}
