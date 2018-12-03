import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  private indice = 'usuarios/';

  // contentHeader = new HttpHeaders({"Content-Type": "application/json", "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQwYzFjNmIzN2FhZmFmMjE4YTdlOTQyODhlYWM5MDA1ZTkwYTdmMDYzN2UyZmJiYTU4MjI0Yjg0MzkwNzEwYmE1OThiZTg0OWRjNGZiZTg2In0.eyJhdWQiOiIxIiwianRpIjoiNDBjMWM2YjM3YWFmYWYyMThhN2U5NDI4OGVhYzkwMDVlOTBhN2YwNjM3ZTJmYmJhNTgyMjRiODQzOTA3MTBiYTU5OGJlODQ5ZGM0ZmJlODYiLCJpYXQiOjE1NDI3NDM0NjgsIm5iZiI6MTU0Mjc0MzQ2OCwiZXhwIjoxNTc0Mjc5NDY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.b1s39kvfaLXpApst4Lly8tunJ-vNT9EcgN-e3mN6v4KUBxCBdOuh4FMawRJWqJ7gfjugw-sKkWbEkeNNLcUqi263rtmByGowBAkZJ_WBPfZDhyam2jhCi5zl8xSK1CXtppBrB5OMaXZtF_fAlkuvfjFKM6TRfj1lsPUchSQan2WM3C0tFKViq_QuQZt8aJToDBl6BZHWbn2iI93-ycsX10vjoHU-tqNnnxVUSUcPD8KI-b86ObEBHky2KwNXAGZ7FhpEqWIirpNJ4zIzr34hY3shAiEsQpU98v8ituFmn3NR-d_jNc6V2GDTYheiXrDkYizBWrOfbkt14TLohLqH4bxI92WTQL2igDehcwYTyKWo_yHVrhiDgHWep900b-CEstlwDEMUIFuQIgT9mM0nXMxtnEbB7-Bzsy0nY35yoMgzNT4gaAWyVnbYrDB-lfkKpTR9cnYdlr5TfL0gFCg2dXS3vfLRluH01GJNYFPUGdKxQ4mQGeieKKOia3A5XqCFVZBzkapF-jI-myc1jxTkFFzxWDjcAjRKVniXQPjWl-7xYzplOC5jYIsWuLXe7_g1R38zrTbplIhGdoUd7RBONFP4h3K8cBCU4UgWBa-7_XZC1H4hVsyUqjV0tpbIweEKR8uwrciuNLJ3eHmR2eal4gIZoqpuLIFo8zEr95LBTXE"}); 
  
  constructor(private db: AngularFireDatabase, private fireauth: AngularFireAuth, /*private firedb: AngularFirestore*/) {
    
  }
  
 
  public salvar(usuario: any){
    
    // return this.http.post("http://localhost:8000/api/user",usuario, {headers:this.contentHeader});
    return new Promise((resolve, reject) => {      
      this.fireauth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((user) => {
       this.fireauth.auth.currentUser.updateProfile({
         displayName: usuario.nome,
         photoURL:"",
       })
        // this.db.object(this.indice).set(usuario)        
        resolve()
      })
      .catch((e) => reject(e))
    });

  }

  public login(email, senha){
    // return this.http.post("http://localhost:8000/api/login", usuario, {headers:this.contentHeader});
    return new Promise((resolve, reject) => {
      this.fireauth.auth.signInWithEmailAndPassword(email, senha)
      .then(() => 
      resolve())
      .catch((e) => reject(e))
    });
  }

  public logout(){
    return this.fireauth.auth.signOut();
  }

}
