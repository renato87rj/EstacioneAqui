import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public dadosLogin = {"email": "", "password": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider, public alertCtrl: AlertController) {
  }

  public login()
  {
    this.usuarioService.login(this.dadosLogin)
    .subscribe(
      response => {
        // this.showAlert('Cadastro realizado com sucesso');
        this.navCtrl.setRoot(HomePage);
      },
      error => {
        this.showAlert('Erro', 'Dados inválidos');
      });
  }
      showAlert(title, mensagem) {
        this.alertCtrl.create({
          title: title,
          subTitle: mensagem,
          buttons: ['OK']
        }).present();
        
      }



}
