import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  public usuarios = [];

  public usuarioCadastro = {"nome": "", "email": "", "senha": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider) {
    
  }  

  public cadastrarUsuario(){
    this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => this.retornaPrincipal());    
  }

  public retornaPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }  

}
