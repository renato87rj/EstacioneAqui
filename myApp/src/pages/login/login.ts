import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController} from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider, public alertCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }

  public login()
  {
    this.usuarioService.login(this.dadosLogin)
    .subscribe(
      response => {
        let nome = JSON.stringify(response.usuario);
        this.presentToast("Seja bem vindo"+ nome +"!"); 
        this.navCtrl.setRoot(HomePage);
      },
      error => {
        this.showAlert('Erro', JSON.stringify(error.message));
      });
  }
      showAlert(title, mensagem) {
        this.alertCtrl.create({
          title: title,
          subTitle: mensagem,
          buttons: ['OK']
        }).present();
        
      }

      cadastro() {
        this.navCtrl.push(CadastroPage);
      }

      presentToast(mensagem) {
        const toast = this.toastCtrl.create({
          message: mensagem,
          duration: 3000
        });
        toast.present();
      }



}
