import { AdminVagaPage } from './../pages/admin-vaga/admin-vaga';
import { AdminEstacPage } from './../pages/admin-estac/admin-estac';
import { GoogleMapComponent } from '../components/google-map/google-map';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {CadastroPage} from "../pages/cadastro/cadastro";

import {AngularFireModule} from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { Geolocation } from '@ionic-native/geolocation';
import { EstacionamentoPage } from '../pages/estacionamento/estacionamento';
import { ParkingProvider } from '../providers/parking/parking';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    LoginPage,    
    CadastroPage,
    GoogleMapComponent,
    EstacionamentoPage,
    AdminEstacPage,
    AdminVagaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBw0alG5zW96icysKz5Y6wZv_J_pm140So",
      authDomain: "my-app-1541257531062.firebaseapp.com",
      databaseURL: "https://my-app-1541257531062.firebaseio.com",
      projectId: "my-app-1541257531062",
      storageBucket: "my-app-1541257531062.appspot.com",
      messagingSenderId: "400376007111"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,    
    CadastroPage,
    GoogleMapComponent,
    EstacionamentoPage,
    AdminEstacPage,
    AdminVagaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    Geolocation,
    ParkingProvider,
  ]
})
export class AppModule {}
