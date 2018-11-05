import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {CadastroPage} from '../cadastro/cadastro';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  public usuarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider) {

    this.getUsuarios();
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  cadastro() {
    this.navCtrl.push(CadastroPage);
  }

  public getUsuarios(){
    this.usuarioService.mostrar().subscribe(response => this.usuarios = response);
  }

  public deletar(id){
    this.usuarioService.deletar(id).subscribe(response => this.getUsuarios());    
  }

}
