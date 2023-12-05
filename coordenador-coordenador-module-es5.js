(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coordenador-coordenador-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/coordenador.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/coordenador.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\" class=\"ion-padding\" (click)=\"sair()\">\r\n          <ion-icon slot=\"start\" name=\"exit\"></ion-icon>  Sair\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-center\">{{titulo}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-text class=\"ion-text-center\" *ngIf=\"buscando\">\r\n      <h1>Buscando seus dados!</h1>\r\n    </ion-text>\r\n\r\n    <ion-tabs no-shadow no-border *ngIf=\"!buscando\">\r\n      <ion-tab-bar color=\"primary\" slot=\"top\" style=\"--border: 0px\" >\r\n        <!-- Pacientes -->\r\n        <ion-tab-button tab=\"pacientes\" (click)=\"setTitulo('Pacientes')\">\r\n          <ion-icon name=\"person\"  size=\"large\"></ion-icon>\r\n          <ion-label>Pacientes</ion-label>\r\n        </ion-tab-button>\r\n        <!-- Sessões -->\r\n        <ion-tab-button tab=\"sessoes\" (click)=\"setTitulo('Sessões')\">\r\n          <ion-icon name=\"paper\" size=\"large\"></ion-icon>\r\n          <ion-label>Sessões</ion-label>\r\n        </ion-tab-button>\r\n        <!-- Relatórios -->\r\n        <ion-tab-button tab=\"relatorios\"  (click)=\"setTitulo('Relatórios')\">\r\n            <ion-icon name=\"ribbon\"  size=\"large\"></ion-icon>\r\n            <ion-label>Relatórios</ion-label>\r\n          </ion-tab-button>\r\n      </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/coordenador.module.ts":
/*!***************************************************!*\
  !*** ./src/app/coordenador/coordenador.module.ts ***!
  \***************************************************/
/*! exports provided: CoordenadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordenadorPageModule", function() { return CoordenadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coordenador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coordenador.page */ "./src/app/coordenador/coordenador.page.ts");







var routes = [
    {
        path: '',
        component: _coordenador_page__WEBPACK_IMPORTED_MODULE_6__["CoordenadorPage"],
        children: [
            { path: '', redirectTo: 'pacientes' },
            { path: 'pacientes', loadChildren: './pacientes/pacientes.module#PacientesPageModule' },
            { path: 'sessoes', loadChildren: './sessoes/sessoes.module#SessoesPageModule' },
            { path: 'relatorios', loadChildren: './relatorios/relatorios.module#RelatoriosPageModule' },
        ]
    }
];
var CoordenadorPageModule = /** @class */ (function () {
    function CoordenadorPageModule() {
    }
    CoordenadorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_coordenador_page__WEBPACK_IMPORTED_MODULE_6__["CoordenadorPage"]]
        })
    ], CoordenadorPageModule);
    return CoordenadorPageModule;
}());



/***/ }),

/***/ "./src/app/coordenador/coordenador.page.scss":
/*!***************************************************!*\
  !*** ./src/app/coordenador/coordenador.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb3JkZW5hZG9yL2Nvb3JkZW5hZG9yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/coordenador/coordenador.page.ts":
/*!*************************************************!*\
  !*** ./src/app/coordenador/coordenador.page.ts ***!
  \*************************************************/
/*! exports provided: CoordenadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordenadorPage", function() { return CoordenadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_paciente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/paciente.service */ "./src/app/services/paciente.service.ts");






var CoordenadorPage = /** @class */ (function () {
    function CoordenadorPage(router, usuariosService, pacienteService) {
        this.router = router;
        this.usuariosService = usuariosService;
        this.pacienteService = pacienteService;
        this.titulo = 'Pacientes';
        this.buscando = true;
    }
    CoordenadorPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
                    _this.buscando = user == null;
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Informa o nome do titulo a ser exibido na página
     * @param titulo Titulo a ser exibido na página
     */
    CoordenadorPage.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    /**
     * Desloga o usuário do sitema
     */
    CoordenadorPage.prototype.sair = function () {
        this.usuariosService.deslogar();
        //window.location.reload();
        this.router.navigateByUrl('/login');
    };
    CoordenadorPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] },
        { type: _services_paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"] }
    ]; };
    CoordenadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coordenador',
            template: __webpack_require__(/*! raw-loader!./coordenador.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/coordenador.page.html"),
            styles: [__webpack_require__(/*! ./coordenador.page.scss */ "./src/app/coordenador/coordenador.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"], _services_paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"]])
    ], CoordenadorPage);
    return CoordenadorPage;
}());



/***/ })

}]);
//# sourceMappingURL=coordenador-coordenador-module-es5.js.map