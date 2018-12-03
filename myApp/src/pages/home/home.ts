import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private usuarioService: UsuarioProvider) {

  }

  ionViewDidLoad(){
    // this.afAuth.authState.subscribe(data => {
    //   if (data && data.email && data.uid) {
    //     this.toast.create({
    //       message: `Boas vindas ${data.email}`,
    //       duration: 3000
    //     }).present();
    //   } else {
    //     this.toast.create({
    //       message: 'Não foi possível autenticar.',
    //       duration: 3000
    //     }).present();
    //   }
    // });
  }  

}
