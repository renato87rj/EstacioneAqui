import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { PrincipalPage } from '../principal/principal';


/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [UsuarioProvider],
})
export class CadastroPage {  

  public usuarioCadastro = {"name": "", "email": "", "password": "", "password_confirmation":""};
  public mensagem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider, public alertCtrl: AlertController) {
         
  }  

  public cadastrarUsuario(){
    
    this.usuarioService.salvar(this.usuarioCadastro)
    .subscribe(
      response => {
        this.showAlert('Sucesso!', 'Cadastro realizado com sucesso');
        this.navCtrl.setRoot(HomePage);
      },
      erro => {
        let erros = JSON.stringify(erro.error.errors);
        this.showAlert('Erro', erros);
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
