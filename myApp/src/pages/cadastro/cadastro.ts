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

  public usuarioCadastro = {"nome": "", "email": "", "senha": ""};
  public mensagem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider, public alertCtrl: AlertController) {
     
    // this.usuarioCadastro = navParams.get('usuario');
    // console.log(this.usuarioCadastro.id);
  }  

  public cadastrarUsuario(){
    
    this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => console.log(response.status));
    //this.showAlert(this.mensagem);
    
  }

  public retornaPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }

  showAlert(mensagem) {
    const alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: mensagem.error,
      buttons: ['OK']
    });
    alert.present();
  }

}
