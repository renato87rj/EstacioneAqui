import { AdminEstacPage } from './../admin-estac/admin-estac';
import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ParkingProvider } from '../../providers/parking/parking';

/**
 * Generated class for the EstacionamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estacionamento',
  templateUrl: 'estacionamento.html',
})
export class EstacionamentoPage {

  public parking = {"nome": "", "endereco": "", "lat":"", "lng": "", "vaga": 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, private estacionaService: ParkingProvider, private toastCtrl: ToastController) {
  }

  
  cadastraEstacionamento(){
    this.estacionaService.cadastrar(this.parking)
    .then(() => {
      this.presentToast();
      this.navCtrl.setRoot(AdminEstacPage);
    })
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Cadastro realizado.',
      duration: 3000
    });
    toast.present();
  }



}
