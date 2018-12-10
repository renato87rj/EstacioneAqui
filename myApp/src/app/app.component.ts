import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from './../pages/home/home';
import { EstacionamentoPage } from './../pages/estacionamento/estacionamento';
import { AdminEstacPage } from './../pages/admin-estac/admin-estac';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
 
  rootPage: any = LoginPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public usuarioservice: UsuarioProvider, public fireauth: AngularFireAuth, public firedb: AngularFireDatabase) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  EstacionaPage() {
    var nav = this.nav;
    var user = this.fireauth.auth.currentUser;

    var ref = this.firedb.database.ref('estacionamentos/');
    ref.orderByChild('usuario').equalTo(user.uid).on('value', function(snapshot){    
      
      if(snapshot.val() != null){
        nav.setRoot(AdminEstacPage);        
      }
      else{
        nav.setRoot(EstacionamentoPage);  
      }
      
    })        
    
  }
  AdminPage() {
    this.nav.setRoot(AdminEstacPage);
  }
  HomePage() {
    this.nav.setRoot(HomePage);
  }

  logout(){
    this.usuarioservice.logout()
    .then(() => {
      this.nav.setRoot(LoginPage);
    })   
    .catch((error) => {
      console.log(error);
    })
  }
}
