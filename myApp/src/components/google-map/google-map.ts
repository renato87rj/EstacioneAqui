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

  constructor(private geolocation: Geolocation) {
    
  }

  ngOnInit(){  
    this.initMap();
  }
  
  initMap(){

    
     

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
      icon: 'assets/imgs/m1.png',
      animation: google.maps.Animation.DROP
    });
     })
     .catch((error) => {
       console.log('Não deu pra te achar.', error);
     });

    //  let watch = this.geolocation.watchPosition();
    //   watch.subscribe((data) => {
    //   data can be a set of coordinates, or an error (if an error occurred).
    //   data.coords.latitude
    //   data.coords.longitude
    //   });

  }


}