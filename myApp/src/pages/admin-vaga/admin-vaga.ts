import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the AdminVagaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-vaga',
  templateUrl: 'admin-vaga.html',
})
export class AdminVagaPage {

  @ViewChild('lotado') lotado;
  geocoder = new google.maps.Geocoder();
  public nome: any;
  public endereco: any;
  public vaga: any;
  public latlng = {lat:"", lng:""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public fireauth: AngularFireAuth, public firedb: AngularFireDatabase, public viewCtrl: ViewController, public toastCtrl: ToastController) {

    this.nome = this.navParams.get('nome');
    this.endereco = this.navParams.get('endereco'); 
    this.navParams.get('vaga') == 0 ? this.vaga = 'false' : this.vaga = 'true';
    console.log(this.vaga);
  }

  public alterar(){
    var lotado = this.lotado.value;
    var vaga;
    var user = this.fireauth.auth.currentUser;
    var firedb = this.firedb;

    var ref = this.firedb.database.ref('estacionamentos/');    
    ref.orderByChild('usuario').equalTo(user.uid).on('child_added', function(snapshot){      
      lotado == true ? vaga = 1 : vaga = 0;      
      var e = snapshot.key;
      firedb.database.ref('estacionamentos/'+e).update({vaga:vaga});
    })
    this.dismiss();
    this.presentToast();
  }

  dismiss() {    
    this.viewCtrl.dismiss();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vagas Atualizadas',
      duration: 3000
    });
    toast.present();
  }

  editar(){
    var e;
    var latlng;
    var fire = this.firedb;
    var user = this.fireauth.auth.currentUser;    
    var ref = this.firedb.database.ref('estacionamentos/');    
    ref.orderByChild('usuario').equalTo(user.uid).on('child_added', function(snapshot){           
      e = snapshot.key;           
    })
    this.firedb.database.ref('estacionamentos/'+e).update({nome:this.nome, endereco: this.endereco});    

    this.geocoder.geocode({'address':this.endereco}, function(results, status){
      if (status == google.maps.GeocoderStatus.OK) {
        latlng = {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()};
        fire.database.ref('estacionamentos/'+e).update(latlng);
      }      
    })
    
    this.dismiss();
  }
}
