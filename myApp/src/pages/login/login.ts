import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from "../principal/principal";
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

  public dadosLogin = {"email": "", "senha": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider) {
  }

  public login()
  {
    this.usuarioService.login(this.dadosLogin).subscribe(response => this.getHome());
    console.log(this.dadosLogin);
  }
  
  public getHome(){
    this.navCtrl.push(HomePage);
  }



}
