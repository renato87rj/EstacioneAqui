import { AdminVagaPage } from './../admin-vaga/admin-vaga';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

/**
 * Generated class for the AdminEstacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-estac',
  templateUrl: 'admin-estac.html',
})
export class AdminEstacPage {

  @ViewChild("map") mapEelement;
  public map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireauth: AngularFireAuth, public firedb: AngularFireDatabase, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }

  public ngOnInit(){  
    this.initMap();
  }

  public initMap(){
    var lat;
    var lng;
    var vaga;
    var user = this.fireauth.auth.currentUser;

    var ref = this.firedb.database.ref('estacionamentos/');    
    ref.orderByChild('usuario').equalTo(user.uid).on('child_added', function(snapshot){
      lat = snapshot.val().lat;
      lng = snapshot.val().lng;
      vaga = snapshot.val().vaga;
    })
      
      let coords = new google.maps.LatLng(lat,lng);      
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
      var map = new google.maps.Map(this.mapEelement.nativeElement, mapOptions);
      let marker = new google.maps.Marker({
      position:coords, 
      map: map,
      icon: vaga == 0 ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      animation: google.maps.Animation.DROP
    });
  }

  public vagas(){
    let vagaModal = this.modalCtrl.create(AdminVagaPage);
    vagaModal.present();
  }

 
}
