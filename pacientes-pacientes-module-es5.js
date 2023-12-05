(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pacientes-pacientes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/pacientes/pacientes.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/pacientes/pacientes.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <!-- REFRESH -->\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n      <ion-refresher-content\r\n        pullingIcon=\"arrow-dropdown\"\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\"\r\n        refreshingText=\"Atualizando...\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <!-- BOTÃO ADICIONAR PACIENTE -->\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/coordenador/pacientes/novo\">\r\n      <ion-fab-button color=\"danger\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- PACIENTE -->\r\n    <ion-card class=\"card card-{{i%5}}\"  *ngFor=\"let p of pacientes; let i = index\" (click)=\"visualizar(p)\" >\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"2\"  class=\"ion-align-self-center\">\r\n              <ion-avatar>\r\n                <img [src]=\"p.avatarURL\">\r\n              </ion-avatar>\r\n          </ion-col>\r\n          <ion-col size=\"10\">\r\n            <ion-card-content>\r\n              <h2>{{p.nome}}</h2>\r\n              <h3>Código: <b>{{p.codigo}}</b></h3>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col size=\"4\">Cigarros evitados</ion-col>\r\n                  <ion-col size=\"4\">Dias sem Fumar</ion-col>\r\n                  <ion-col size=\"4\">Max. dias sem fumar</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"4\"><b>{{p.cigarrosEvitados}}</b></ion-col>\r\n                  <ion-col size=\"4\"><b>{{p.diasSemFumar}}</b></ion-col>\r\n                  <ion-col size=\"4\"><b>{{p.maxDiasSemFumar}}</b></ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n\r\n            </ion-card-content>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/pacientes/pacientes.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/coordenador/pacientes/pacientes.module.ts ***!
  \***********************************************************/
/*! exports provided: PacientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesPageModule", function() { return PacientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pacientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pacientes.page */ "./src/app/coordenador/pacientes/pacientes.page.ts");







var routes = [
    {
        path: '',
        component: _pacientes_page__WEBPACK_IMPORTED_MODULE_6__["PacientesPage"]
    }
];
var PacientesPageModule = /** @class */ (function () {
    function PacientesPageModule() {
    }
    PacientesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pacientes_page__WEBPACK_IMPORTED_MODULE_6__["PacientesPage"]]
        })
    ], PacientesPageModule);
    return PacientesPageModule;
}());



/***/ }),

/***/ "./src/app/coordenador/pacientes/pacientes.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/coordenador/pacientes/pacientes.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-0 {\n  --background:linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);\n  --color: white;\n}\n\n.card-1 {\n  --background:linear-gradient(120deg, #f6d365 0%, #fda085 100%);\n  --color: white;\n}\n\n.card-2 {\n  --background:linear-gradient(to right, #4facfe 0%, #00f2fe 100%);\n  --color: white;\n}\n\n.card-3 {\n  --background: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);\n  --color: white;\n}\n\n.card-4 {\n  --background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vcmRlbmFkb3IvcGFjaWVudGVzL0M6XFx4YW1wcFxcaHRkb2NzXFxuYW8tZnVtZS0vc3JjXFxhcHBcXGNvb3JkZW5hZG9yXFxwYWNpZW50ZXNcXHBhY2llbnRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Nvb3JkZW5hZG9yL3BhY2llbnRlcy9wYWNpZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUhBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSw4REFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGdFQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksK0RBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxvTEFBQTtFQUNBLGNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2Nvb3JkZW5hZG9yL3BhY2llbnRlcy9wYWNpZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZC0wIHtcclxuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjgxNzcgMCUsICNmZjg2N2EgMCUsICNmZjhjN2YgMjElLCAjZjk5MTg1IDUyJSwgI2NmNTU2YyA3OCUsICNiMTJhNWIgMTAwJSk7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtMSB7XHJcbiAgICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2Y2ZDM2NSAwJSwgI2ZkYTA4NSAxMDAlKTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZC0yIHtcclxuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0ZmFjZmUgMCUsICMwMGYyZmUgMTAwJSk7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtMyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM1ZWU3ZGYgMCUsICNiNDkwY2EgMTAwJSk7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtNCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMCUsIHJnYmEoMCwwLDAsMC4xNSkgMTAwJSksIHJhZGlhbC1ncmFkaWVudChhdCB0b3AgY2VudGVyLCByZ2JhKDI1NSwyNTUsMjU1LDAuNDApIDAlLCByZ2JhKDAsMCwwLDAuNDApIDEyMCUpICM5ODk4OTg7IFxyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn0iLCIuY2FyZC0wIHtcbiAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmODE3NyAwJSwgI2ZmODY3YSAwJSwgI2ZmOGM3ZiAyMSUsICNmOTkxODUgNTIlLCAjY2Y1NTZjIDc4JSwgI2IxMmE1YiAxMDAlKTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLTEge1xuICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2Y2ZDM2NSAwJSwgI2ZkYTA4NSAxMDAlKTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLTIge1xuICAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGZhY2ZlIDAlLCAjMDBmMmZlIDEwMCUpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtMyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzVlZTdkZiAwJSwgI2I0OTBjYSAxMDAlKTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLTQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMCUsIHJnYmEoMCwwLDAsMC4xNSkgMTAwJSksIHJhZGlhbC1ncmFkaWVudChhdCB0b3AgY2VudGVyLCByZ2JhKDI1NSwyNTUsMjU1LDAuNDApIDAlLCByZ2JhKDAsMCwwLDAuNDApIDEyMCUpICM5ODk4OTg7XG4gIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coordenador/pacientes/pacientes.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/coordenador/pacientes/pacientes.page.ts ***!
  \*********************************************************/
/*! exports provided: PacientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesPage", function() { return PacientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var PacientesPage = /** @class */ (function () {
    function PacientesPage(pacientesService, navExtra, router, events) {
        this.pacientesService = pacientesService;
        this.navExtra = navExtra;
        this.router = router;
        this.events = events;
        this.pacientes = [];
    }
    PacientesPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.atualizarConteudos();
                this.events.subscribe('pacientes:atualizar', function (atualizar) {
                    if (atualizar)
                        _this.atualizarConteudos();
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Abre a visualização para um paciente
     */
    PacientesPage.prototype.visualizar = function (paciente) {
        this.navExtra.set('paciente', paciente);
        this.router.navigateByUrl('/coordenador/pacientes/visualizar');
    };
    /**
     * Atualiza a lista caso desejado
     * @param event
     */
    PacientesPage.prototype.refresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atualizarConteudos()];
                    case 1:
                        _a.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Atualiza a lista
     */
    PacientesPage.prototype.atualizarConteudos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.pacientesService.buscarTodos()];
                    case 1:
                        _a.pacientes = _b.sent();
                        console.log('a');
                        return [2 /*return*/];
                }
            });
        });
    };
    PacientesPage.ctorParameters = function () { return [
        { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"] },
        { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"] }
    ]; };
    PacientesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pacientes',
            template: __webpack_require__(/*! raw-loader!./pacientes.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/pacientes/pacientes.page.html"),
            styles: [__webpack_require__(/*! ./pacientes.page.scss */ "./src/app/coordenador/pacientes/pacientes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"], src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"]])
    ], PacientesPage);
    return PacientesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pacientes-pacientes-module-es5.js.map