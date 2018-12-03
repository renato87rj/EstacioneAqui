import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController} from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFireAuth } from '@angular/fire/auth';

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

  // public dadosLogin = {"email": "", "password": ""};
  @ViewChild('email') email;
  @ViewChild('senha') senha;

  nome: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private usuarioService: UsuarioProvider, 
    public alertCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController,
    private fireauth: AngularFireAuth) {

    this.menu.swipeEnable(false);

    this.fireauth.authState.subscribe(user => {
      if (!user) {
        this.nome = null;        
        return;
      }
      this.nome = user.displayName;   
      
    })
  }

  public login()
  {
    this.usuarioService.login(this.email.value, this.senha.value)
    .then(() => {        
        this.presentToast("Seja bem vindo " + this.nome + "!");
        this.navCtrl.setRoot(HomePage);
      })
    .catch((erro) => {
        this.showAlert('Erro', erro.message);
      })
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
