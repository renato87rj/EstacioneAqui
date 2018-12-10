import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
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

  geocoder = new google.maps.Geocoder();
  public latlng = {lat:"", lng:""};

  constructor(public http: HttpClient, public firedb: AngularFireDatabase, public fireauth: AngularFireAuth) {
    console.log('Hello ParkingProvider Provider');
  }

  public cadastrar(estacionamento: any){
    return new Promise((resolve, reject) => {
      var fire = this.firedb;
      var user = this.fireauth.auth.currentUser;
    
      //converte endereco em latitude e longitude
      this.geocoder.geocode({'address':estacionamento.endereco}, function(results, status){
      if (status == google.maps.GeocoderStatus.OK) {
        this.latlng = {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()};

        //salvo na variavel para pegar a chave do ultimo item salvo
        var e = fire.database.ref('estacionamentos/').push(estacionamento);
        
        //faço a referencia do ultimo item salvo para atualizar latitude e longitude 
        fire.database.ref('estacionamentos/'+e.key).update(this.latlng)
        fire.database.ref('estacionamentos/'+e.key).child('usuario').set(user.uid)
        
        .then((result) => {           
          resolve() 
        })
        .catch((e) => { reject((e)) });
      }
      else {
        console.log(status);
      }
      
    })
    
  })
  
  }

}
