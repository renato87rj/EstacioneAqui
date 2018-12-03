import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ParkingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParkingProvider {

  private index= "Estacionamentos/";

  constructor(public http: HttpClient, private firedb: AngularFireDatabase) {
    console.log('Hello ParkingProvider Provider');
  }

  public cadastrar(estacionamento: any){
    return new Promise((resolve, reject) => {    
      this.firedb.list(this.index)
      .push(estacionamento)
      .then(() => resolve())    
    })
  }

}
