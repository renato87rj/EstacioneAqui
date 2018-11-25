webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estacionamento_estacionamento__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(81);
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
        this.usuarioCadastro = { "name": "", "email": "", "password": "", "password_confirmation": "" };
    }
    CadastroPage.prototype.cadastrarUsuario = function () {
        var _this = this;
        this.usuarioService.salvar(this.usuarioCadastro)
            .subscribe(function (response) {
            _this.showConfirm();
        }, function (erro) {
            var erros = JSON.stringify(erro.error.errors);
            _this.showAlert('Erro', erros);
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
                        _this.presentToast();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
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
            selector: 'page-cadastro',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/cadastro/cadastro.html"*/'<ion-header>\n\n  <ion-navbar>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="auth-page">\n\n    <form class="list-form" (ngSubmit)="cadastrarUsuario()">\n        <ion-item>     \n          <ion-label stacked>Nome</ion-label>     \n          <ion-input type="text" [(ngModel)]="usuarioCadastro.name" name="name" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type="email" [(ngModel)]="usuarioCadastro.email" name="email" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Senha</ion-label>\n          <ion-input type="password" [(ngModel)]="usuarioCadastro.password" name="password" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Confirme a Senha</ion-label>\n            <ion-input type="password" [(ngModel)]="usuarioCadastro.password_confirmation" name="password_confirmation" ></ion-input>\n          </ion-item>\n        <button ion-button type="submit" block>Cadastrar</button>\n      </form>      \n      \n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/cadastro/cadastro.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object])
    ], CadastroPage);
    return CadastroPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		283,
		2
	],
	"../pages/estacionamento/estacionamento.module": [
		284,
		1
	],
	"../pages/login/login.module": [
		285,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <google-map></google-map>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
    function EstacionamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.parking = { "name": "", "email": "", "password": "", "password_confirmation": "" };
    }
    EstacionamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstacionamentoPage');
    };
    EstacionamentoPage.prototype.cadastraEstacionamento = function () {
    };
    EstacionamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estacionamento',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/estacionamento/estacionamento.html"*/'\n<ion-header>\n\n  <ion-navbar>    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="auth-page">\n\n    <form class="list-form" (ngSubmit)="cadastraEstacionamento()">\n        <ion-item>     \n          <ion-label stacked>Nome</ion-label>     \n          <ion-input type="text" [(ngModel)]="parking.name" name="nome" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Telefone</ion-label>\n          <ion-input type="text" [(ngModel)]="parking.email" name="telefone" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Endereço</ion-label>\n          <ion-input type="text" [(ngModel)]="parking.password" name="endereco" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Bairro</ion-label>\n            <ion-input type="text" [(ngModel)]="parking.password_confirmation" name="bairro" ></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Cidade</ion-label>\n              <ion-input type="text" [(ngModel)]="parking.password_confirmation" name="bairro" ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Estado</ion-label>\n                <ion-input type="text" [(ngModel)]="parking.password_confirmation" name="bairro" ></ion-input>\n              </ion-item>\n\n        <button ion-button type="submit" block>Cadastrar</button>\n      </form>      \n      \n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/estacionamento/estacionamento.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], EstacionamentoPage);
    return EstacionamentoPage;
    var _a, _b;
}());

//# sourceMappingURL=estacionamento.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_google_map_google_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_estacionamento_estacionamento__ = __webpack_require__(202);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_0__components_google_map_google_map__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estacionamento_estacionamento__["a" /* EstacionamentoPage */],
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
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_0__components_google_map_google_map__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estacionamento_estacionamento__["a" /* EstacionamentoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(41);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            //{ title: 'List', component: ListPage },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] },
        ];
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
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon ios="ios-exit" md="md-exit"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__ = __webpack_require__(103);
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
    function LoginPage(navCtrl, navParams, usuarioService, alertCtrl, menu, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.dadosLogin = { "email": "", "password": "" };
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.usuarioService.login(this.dadosLogin)
            .subscribe(function (response) {
            var nome = JSON.stringify(response.usuario);
            _this.presentToast("Seja bem vindo" + nome + "!");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            _this.showAlert('Erro', JSON.stringify(error.message));
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/login/login.html"*/'\n<ion-content padding class="auth-page">    \n\n        <!-- Logo -->\n        <div padding-horizontal text-center class="animated fadeInDown">            \n          <img class="logo" src="assets/imgs/carro5.png">            \n          <h2 ion-text class="text-primary">\n            <strong>Estacione</strong> Aqui\n          </h2>\n        </div>\n\n  <form class="list-form" (ngSubmit)="login()" id="formlogin">    \n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n        Email\n      </ion-label>\n      <ion-input type="email" name="email" [(ngModel)]="dadosLogin.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n        Senha\n      </ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="dadosLogin.password"></ion-input>\n    </ion-item>  \n  </form>\n\n  <!-- <p text-right ion-text style="color:#2a76cc" tappable (click)="forgotPass()"><strong>Esqueceu a Senha?</strong></p> -->\n\n  <button ion-button type="submit" block form="formlogin"><ion-icon name="log-in"></ion-icon> Entrar</button>  \n\n  <div text-center margin-top>\n    <span ion-text color="primary" tappable (click)="cadastro()">Ou <strong>Cadastre-se aqui</strong></span>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
    function UsuarioProvider(http) {
        this.http = http;
        this.contentHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json", "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQwYzFjNmIzN2FhZmFmMjE4YTdlOTQyODhlYWM5MDA1ZTkwYTdmMDYzN2UyZmJiYTU4MjI0Yjg0MzkwNzEwYmE1OThiZTg0OWRjNGZiZTg2In0.eyJhdWQiOiIxIiwianRpIjoiNDBjMWM2YjM3YWFmYWYyMThhN2U5NDI4OGVhYzkwMDVlOTBhN2YwNjM3ZTJmYmJhNTgyMjRiODQzOTA3MTBiYTU5OGJlODQ5ZGM0ZmJlODYiLCJpYXQiOjE1NDI3NDM0NjgsIm5iZiI6MTU0Mjc0MzQ2OCwiZXhwIjoxNTc0Mjc5NDY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.b1s39kvfaLXpApst4Lly8tunJ-vNT9EcgN-e3mN6v4KUBxCBdOuh4FMawRJWqJ7gfjugw-sKkWbEkeNNLcUqi263rtmByGowBAkZJ_WBPfZDhyam2jhCi5zl8xSK1CXtppBrB5OMaXZtF_fAlkuvfjFKM6TRfj1lsPUchSQan2WM3C0tFKViq_QuQZt8aJToDBl6BZHWbn2iI93-ycsX10vjoHU-tqNnnxVUSUcPD8KI-b86ObEBHky2KwNXAGZ7FhpEqWIirpNJ4zIzr34hY3shAiEsQpU98v8ituFmn3NR-d_jNc6V2GDTYheiXrDkYizBWrOfbkt14TLohLqH4bxI92WTQL2igDehcwYTyKWo_yHVrhiDgHWep900b-CEstlwDEMUIFuQIgT9mM0nXMxtnEbB7-Bzsy0nY35yoMgzNT4gaAWyVnbYrDB-lfkKpTR9cnYdlr5TfL0gFCg2dXS3vfLRluH01GJNYFPUGdKxQ4mQGeieKKOia3A5XqCFVZBzkapF-jI-myc1jxTkFFzxWDjcAjRKVniXQPjWl-7xYzplOC5jYIsWuLXe7_g1R38zrTbplIhGdoUd7RBONFP4h3K8cBCU4UgWBa-7_XZC1H4hVsyUqjV0tpbIweEKR8uwrciuNLJ3eHmR2eal4gIZoqpuLIFo8zEr95LBTXE" });
    }
    UsuarioProvider.prototype.salvar = function (usuario) {
        return this.http.post("http://localhost:8000/api/user", usuario, { headers: this.contentHeader });
    };
    UsuarioProvider.prototype.login = function (usuario) {
        return this.http.post("http://localhost:8000/api/login", usuario, { headers: this.contentHeader });
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map