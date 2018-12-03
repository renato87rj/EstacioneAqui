import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  public parking = {"nome": "", "telefone": "", "endereco": "", "bairro":"", "cidade": "", "estado": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private estaciona: ParkingProvider) {
  }

  
  cadastraEstacionamento(){
    this.estaciona.cadastrar(this.parking)
    .then(() => {

    })
    .catch((erro) => {
      
    })
  }

}
