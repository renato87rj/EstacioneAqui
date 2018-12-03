webpackJsonp([3],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estacionamento_estacionamento__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, usuarioService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        // public usuarioCadastro = {"name": "", "email": "", "password": "", "password_confirmation":""};
        this.usuarioCadastro = { "nome": "", "email": "", "senha": "", "adm_estaciona": 0 };
    }
    CadastroPage.prototype.cadastrarUsuario = function () {
        var _this = this;
        console.log(this.usuarioCadastro);
        this.usuarioService.salvar(this.usuarioCadastro)
            .then(function () {
            _this.presentToast();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
        })
            .catch(function (erro) {
            _this.showAlert('Erro', erro);
        });
    };
    CadastroPage.prototype.showAlert = function (title, mensagem) {
        this.alertCtrl.create({
            title: title,
            subTitle: mensagem,
            buttons: ['OK']
        }).present();
    };
    CadastroPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Você administra um estacionamento?',
            message: 'Se você é um administrador de estacionamento o cadastre também, para que as pessoas possam ve-lo no mapa.',
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__estacionamento_estacionamento__["a" /* EstacionamentoPage */]);
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    CadastroPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Cadastro realizado. Faça seu Login.',
            duration: 3000
        });
        toast.present();
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/cadastro/cadastro.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="auth-page">\n\n    <form class="list-form" (ngSubmit)="cadastrarUsuario()">\n        <ion-item>     \n          <ion-label stacked>Nome</ion-label>     \n          <ion-input type="text" [(ngModel)]="usuarioCadastro.nome" name="name" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type="email" [(ngModel)]="usuarioCadastro.email" name="email" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Senha</ion-label>\n          <ion-input type="password" [(ngModel)]="usuarioCadastro.senha" name="password" ></ion-input>\n        </ion-item>                \n        <button ion-button type="submit" block>Cadastrar</button>\n      </form>      \n      \n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/cadastro/cadastro.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parking_parking__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EstacionamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstacionamentoPage = /** @class */ (function () {
    function EstacionamentoPage(navCtrl, navParams, estaciona) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estaciona = estaciona;
        this.parking = { "nome": "", "telefone": "", "endereco": "", "bairro": "", "cidade": "", "estado": "" };
    }
    EstacionamentoPage.prototype.cadastraEstacionamento = function () {
        this.estaciona.cadastrar(this.parking)
            .then(function () {
        })
            .catch(function (erro) {
        });
    };
    EstacionamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estacionamento',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/estacionamento/estacionamento.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="auth-page">\n\n    <form class="list-form" (ngSubmit)="cadastraEstacionamento()">\n        <ion-item>     \n          <ion-label stacked>Nome</ion-label>     \n          <ion-input type="text" [(ngModel)]="parking.nome" name="nome" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Telefone</ion-label>\n          <ion-input type="text" [(ngModel)]="parking.telefone" name="telefone" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Endereço</ion-label>\n          <ion-input type="text" [(ngModel)]="parking.endereco" name="endereco" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Bairro</ion-label>\n            <ion-input type="text" [(ngModel)]="parking.bairro" name="bairro" ></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Cidade</ion-label>\n              <ion-input type="text" [(ngModel)]="parking.cidade" name="cidade" ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Estado</ion-label>\n                <ion-input type="text" [(ngModel)]="parking.estado" name="estado" ></ion-input>\n              </ion-item>\n\n        <button ion-button type="submit" block>Cadastrar</button>\n      </form>      \n      \n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/estacionamento/estacionamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_parking_parking__["a" /* ParkingProvider */]])
    ], EstacionamentoPage);
    return EstacionamentoPage;
}());

//# sourceMappingURL=estacionamento.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		726,
		2
	],
	"../pages/estacionamento/estacionamento.module": [
		727,
		1
	],
	"../pages/login/login.module": [
		728,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ParkingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ParkingProvider = /** @class */ (function () {
    function ParkingProvider(http, firedb) {
        this.http = http;
        this.firedb = firedb;
        this.index = "Estacionamentos/";
        console.log('Hello ParkingProvider Provider');
    }
    ParkingProvider.prototype.cadastrar = function (estacionamento) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firedb.list(_this.index)
                .push(estacionamento)
                .then(function () { return resolve(); });
        });
    };
    ParkingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ParkingProvider);
    return ParkingProvider;
}());

//# sourceMappingURL=parking.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, usuarioService) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
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
    };
    HomePage.prototype.logout = function () {
        this.usuarioService.logout();
        // this.navCtrl.setRoot(LoginPage);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <google-map></google-map>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_google_map_google_map__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_firestore__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_usuario_usuario__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_estacionamento_estacionamento__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_parking_parking__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_0__components_google_map_google_map__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estacionamento_estacionamento__["a" /* EstacionamentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estacionamento/estacionamento.module#EstacionamentoPageModule', name: 'EstacionamentoPage', segment: 'estacionamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyBw0alG5zW96icysKz5Y6wZv_J_pm140So",
                    authDomain: "my-app-1541257531062.firebaseapp.com",
                    databaseURL: "https://my-app-1541257531062.firebaseio.com",
                    projectId: "my-app-1541257531062",
                    storageBucket: "my-app-1541257531062.appspot.com",
                    messagingSenderId: "400376007111"
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_firestore__["a" /* AngularFirestoreModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_0__components_google_map_google_map__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_estacionamento_estacionamento__["a" /* EstacionamentoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19__providers_parking_parking__["a" /* ParkingProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare var google;
/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent(geolocation) {
        this.geolocation = geolocation;
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMapComponent.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            var coords = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                zoom: 16,
                center: coords,
                disableDefaultUI: true,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            };
            _this.map = new google.maps.Map(_this.mapEelement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                position: coords,
                map: _this.map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                animation: google.maps.Animation.DROP
            });
        })
            .catch(function (error) {
            console.log('Não deu pra te achar.', error);
        });
        //  let watch = this.geolocation.watchPosition();
        //   watch.subscribe((data) => {
        //   data can be a set of coordinates, or an error (if an error occurred).
        //   data.coords.latitude
        //   data.coords.longitude
        //   });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "mapEelement", void 0);
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'google-map',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/components/google-map/google-map.html"*/'<div #map id="map"></div>'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/components/google-map/google-map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_estacionamento_estacionamento__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, usuarioservice) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.usuarioservice = usuarioservice;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.EstacionaPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_estacionamento_estacionamento__["a" /* EstacionamentoPage */]);
    };
    MyApp.prototype.HomePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.usuarioservice.logout()
            .then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item (click)="HomePage()">\n        Home\n      </button>  \n      <button menuClose ion-item (click)="EstacionaPage()">\n        Tenho Estacionamento\n      </button>       \n      <button menuClose ion-item (click)="logout()">\n        <ion-icon ios="ios-exit" md="md-exit"></ion-icon>\n        Sair\n      </button>         \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__["a" /* UsuarioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__["a" /* UsuarioProvider */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = /** @class */ (function () {
    // contentHeader = new HttpHeaders({"Content-Type": "application/json", "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQwYzFjNmIzN2FhZmFmMjE4YTdlOTQyODhlYWM5MDA1ZTkwYTdmMDYzN2UyZmJiYTU4MjI0Yjg0MzkwNzEwYmE1OThiZTg0OWRjNGZiZTg2In0.eyJhdWQiOiIxIiwianRpIjoiNDBjMWM2YjM3YWFmYWYyMThhN2U5NDI4OGVhYzkwMDVlOTBhN2YwNjM3ZTJmYmJhNTgyMjRiODQzOTA3MTBiYTU5OGJlODQ5ZGM0ZmJlODYiLCJpYXQiOjE1NDI3NDM0NjgsIm5iZiI6MTU0Mjc0MzQ2OCwiZXhwIjoxNTc0Mjc5NDY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.b1s39kvfaLXpApst4Lly8tunJ-vNT9EcgN-e3mN6v4KUBxCBdOuh4FMawRJWqJ7gfjugw-sKkWbEkeNNLcUqi263rtmByGowBAkZJ_WBPfZDhyam2jhCi5zl8xSK1CXtppBrB5OMaXZtF_fAlkuvfjFKM6TRfj1lsPUchSQan2WM3C0tFKViq_QuQZt8aJToDBl6BZHWbn2iI93-ycsX10vjoHU-tqNnnxVUSUcPD8KI-b86ObEBHky2KwNXAGZ7FhpEqWIirpNJ4zIzr34hY3shAiEsQpU98v8ituFmn3NR-d_jNc6V2GDTYheiXrDkYizBWrOfbkt14TLohLqH4bxI92WTQL2igDehcwYTyKWo_yHVrhiDgHWep900b-CEstlwDEMUIFuQIgT9mM0nXMxtnEbB7-Bzsy0nY35yoMgzNT4gaAWyVnbYrDB-lfkKpTR9cnYdlr5TfL0gFCg2dXS3vfLRluH01GJNYFPUGdKxQ4mQGeieKKOia3A5XqCFVZBzkapF-jI-myc1jxTkFFzxWDjcAjRKVniXQPjWl-7xYzplOC5jYIsWuLXe7_g1R38zrTbplIhGdoUd7RBONFP4h3K8cBCU4UgWBa-7_XZC1H4hVsyUqjV0tpbIweEKR8uwrciuNLJ3eHmR2eal4gIZoqpuLIFo8zEr95LBTXE"}); 
    function UsuarioProvider(db, fireauth) {
        this.db = db;
        this.fireauth = fireauth;
        this.indice = 'usuarios/';
    }
    UsuarioProvider.prototype.salvar = function (usuario) {
        var _this = this;
        // return this.http.post("http://localhost:8000/api/user",usuario, {headers:this.contentHeader});
        return new Promise(function (resolve, reject) {
            _this.fireauth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
                .then(function (user) {
                _this.fireauth.auth.currentUser.updateProfile({
                    displayName: usuario.nome,
                    photoURL: "",
                });
                // this.db.object(this.indice).set(usuario)        
                resolve();
            })
                .catch(function (e) { return reject(e); });
        });
    };
    UsuarioProvider.prototype.login = function (email, senha) {
        var _this = this;
        // return this.http.post("http://localhost:8000/api/login", usuario, {headers:this.contentHeader});
        return new Promise(function (resolve, reject) {
            _this.fireauth.auth.signInWithEmailAndPassword(email, senha)
                .then(function () {
                return resolve();
            })
                .catch(function (e) { return reject(e); });
        });
    };
    UsuarioProvider.prototype.logout = function () {
        this.fireauth.auth.signOut();
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, usuarioService, alertCtrl, menu, toastCtrl, fireauth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.fireauth = fireauth;
        this.menu.swipeEnable(false);
        this.fireauth.authState.subscribe(function (user) {
            if (!user) {
                _this.nome = null;
                return;
            }
            _this.nome = user.displayName;
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.usuarioService.login(this.email.value, this.senha.value)
            .then(function () {
            _this.presentToast("Seja bem vindo " + _this.nome + "!");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        })
            .catch(function (erro) {
            _this.showAlert('Erro', erro.message);
        });
    };
    LoginPage.prototype.showAlert = function (title, mensagem) {
        this.alertCtrl.create({
            title: title,
            subTitle: mensagem,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.cadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    LoginPage.prototype.presentToast = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "senha", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/login/login.html"*/'\n<ion-content padding class="auth-page">    \n\n        <!-- Logo -->\n        <div padding-horizontal text-center class="animated fadeInDown">            \n          <img class="logo" src="assets/imgs/carro5.png">            \n          <h2 ion-text class="text-primary">\n            <strong>Estacione</strong> Aqui\n          </h2>\n        </div>\n\n  <form class="list-form" (ngSubmit)="login()" id="formlogin">    \n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n        Email\n      </ion-label>\n      <ion-input type="email" name="email" #email></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n        Senha\n      </ion-label>\n      <ion-input type="password" name="senha" #senha></ion-input>\n    </ion-item>  \n  </form>\n\n  <!-- <p text-right ion-text style="color:#2a76cc" tappable (click)="forgotPass()"><strong>Esqueceu a Senha?</strong></p> -->\n\n  <button ion-button type="submit" block form="formlogin"><ion-icon name="log-in"></ion-icon> Entrar</button>  \n\n  <div text-center margin-top>\n    <span ion-text color="primary" tappable (click)="cadastro()">Ou <strong>Cadastre-se aqui</strong></span>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map