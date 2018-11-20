webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(80);
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
    function CadastroPage(navCtrl, navParams, usuarioService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.usuarioCadastro = { "name": "", "email": "", "password": "", "password_confirmation": "" };
    }
    CadastroPage.prototype.cadastrarUsuario = function () {
        var _this = this;
        this.usuarioService.salvar(this.usuarioCadastro)
            .subscribe(function (response) {
            _this.showAlert('Sucesso!', 'Cadastro realizado com sucesso');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
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
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastre-se</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="cadastrarUsuario()">\n        <ion-item>\n          <ion-label>Nome</ion-label>\n          <ion-input type="text" [(ngModel)]="usuarioCadastro.name" name="name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>E-mail</ion-label>\n          <ion-input [(ngModel)]="usuarioCadastro.email" name="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Senha</ion-label>\n          <ion-input type="password" [(ngModel)]="usuarioCadastro.password" name="password"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Confirme a Senha</ion-label>\n            <ion-input type="password" [(ngModel)]="usuarioCadastro.password_confirmation" name="password_confirmation"></ion-input>\n          </ion-item>\n        <button ion-button type="submit" block>Cadastrar</button>\n      </form>      \n      \n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/cadastro/cadastro.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], CadastroPage);
    return CadastroPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(79);
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
    function LoginPage(navCtrl, navParams, usuarioService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.dadosLogin = { "email": "", "password": "" };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.usuarioService.login(this.dadosLogin)
            .subscribe(function (response) {
            // this.showAlert('Cadastro realizado com sucesso');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            _this.showAlert('Erro', 'Dados inválidos');
        });
    };
    LoginPage.prototype.showAlert = function (title, mensagem) {
        this.alertCtrl.create({
            title: title,
            subTitle: mensagem,
            buttons: ['OK']
        }).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>    \n    <ion-title>Faça Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form class="list-form" (ngSubmit)="login()" >\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n        Email\n      </ion-label>\n      <ion-input type="email" name="email" [(ngModel)]="dadosLogin.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n        Senha\n      </ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="dadosLogin.password"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Entrar</button>\n  </form>\n\n  <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Esqueceu a Senha?</strong></p> -->\n\n  \n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		281,
		2
	],
	"../pages/login/login.module": [
		282,
		1
	],
	"../pages/principal/principal.module": [
		283,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__ = __webpack_require__(80);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__["a" /* CadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__["a" /* CadastroPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__["a" /* UsuarioProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__ = __webpack_require__(50);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__["a" /* PrincipalPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            //{ title: 'List', component: ListPage },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__["a" /* PrincipalPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(103);
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
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarios = [];
    }
    PrincipalPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    PrincipalPage.prototype.cadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/principal/principal.html"*/'<ion-header>\n\n  <ion-navbar>    \n    <ion-title>Estacione Aqui</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div>\n      <button ion-button icon-start block color="light" tappable (click)="cadastro()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n        Cadastre-se\n      </button>\n    </div>\n\n  <div>\n    <button ion-button icon-start block color="default" tappable (click)="login()">\n      <ion-icon name="log-in"></ion-icon>\n      Entre\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/principal/principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__principal_principal__ = __webpack_require__(50);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__principal_principal__["a" /* PrincipalPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Bem vindo!</h1>\n  <!-- <button ion-button color="primary" (click)="logout()">Sair</button> -->\n</ion-content>\n'/*ion-inline-end:"/var/www/html/aplicativo/EstacioneAqui/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(253);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], UsuarioProvider);
    return UsuarioProvider;
    var _a;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map