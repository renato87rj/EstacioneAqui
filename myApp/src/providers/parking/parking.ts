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

  constructor(public http: HttpClient, public firedb: AngularFireDatabase) {
    console.log('Hello ParkingProvider Provider');
  }

  public cadastrar(estacionamento: any){
    return new Promise((resolve, reject) => {
      var fire = this.firedb;
      this.geocoder.geocode({'address':estacionamento.endereco}, function(results, status){
      if (status == google.maps.GeocoderStatus.OK) {
        this.latlng = {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()};
        var e = fire.database.ref('estacionamentos/').push(estacionamento);
        fire.database.ref('estacionamentos/'+e.key).update(this.latlng)
        .then((result) => {
          resolve() 
       }).catch((e) => {
          reject((e))
       });
      }
      else {
        console.log(status);
      }
      
    })
  })
  
  }

}
