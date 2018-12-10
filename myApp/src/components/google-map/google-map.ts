import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild } from '@angular/core';

// declare var google;

/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapEelement;
  public map: any;

  constructor(private geolocation: Geolocation, public firedb: AngularFireDatabase) {
    
  }

  public ngOnInit(){  
    this.initMap();
  }
  
  public initMap(){

    this.geolocation.getCurrentPosition()
    .then((resp) => {
      
      let coords = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);      
      let mapOptions: google.maps.MapOptions = {
        zoom: 16,
        center: coords,
        disableDefaultUI: true,
        styles:  [
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
        
      }
      this.map = new google.maps.Map(this.mapEelement.nativeElement, mapOptions);
      let marker = new google.maps.Marker({
      position:coords, 
      map: this.map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      animation: google.maps.Animation.DROP
    });
    var map = this.map;
    var pontos = this.firedb.database.ref('estacionamentos/');
    pontos.on('value', function(snapshot){
      snapshot.forEach(function(childSnapshot){    
        
        var latlng = new google.maps.LatLng(childSnapshot.val().lat, childSnapshot.val().lng);        
        let marker = new google.maps.Marker({
          position:latlng, 
          map: map,
          icon: childSnapshot.val().vaga == 0 ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        })
      })      
    })
     })
     .catch((error) => {
       console.log('Não deu pra te achar.', error);
     });

    

  }


}
