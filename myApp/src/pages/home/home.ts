import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.setRoot(PrincipalPage);
  }

}
