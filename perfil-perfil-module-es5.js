(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/paciente/perfil/perfil.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/paciente/perfil/perfil.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <ion-grid fixed>\r\n        <ion-row  class=\"ion-align-items-start\">\r\n\r\n            <!-- EDITAR -->\r\n            <ion-col offset=\"3\" size=\"6\" style=\"margin-bottom:-20px;\">\r\n                <ion-button (click)=\"editar()\" color=\"light\" expand=\"block\" fill=\"outline\">\r\n                    Editar conta\r\n                </ion-button>\r\n            </ion-col>\r\n\r\n            <!-- CARD PRINCIPAL -->\r\n            <ion-col offset=\"1\" size=\"10\">\r\n                <ion-card class=\"card-info\">\r\n                    <ion-card-header style=\"--background:rgba(0,0,0,0)\">\r\n                        <ion-card-title >\r\n                            <ion-text class=\"ion-text-center\">\r\n                                <h3>{{paciente.nome}}</h3>\r\n                            </ion-text>\r\n                        </ion-card-title>\r\n                    </ion-card-header>\r\n                    <ion-card-content class=\"center\">\r\n                        <ion-avatar>\r\n                            <img [src]=\"paciente.avatarURL\" />\r\n                        </ion-avatar>\r\n                        \r\n                        <div id=\"card-info-rank\">\r\n                            <ion-text color=\"dark\" class=\"ion-text-center ion-margin\">\r\n                                <h1>{{paciente.diasSeguidosSemFumar }}</h1>\r\n                                <h2>Dias sem fumar seguidos</h2>\r\n                            </ion-text>\r\n\r\n                            <ion-text color=\"dark\"  class=\"ion-text-center ion-margin\">\r\n                                <h1>{{paciente.rank}}#</h1>\r\n                                <h2>Rank dos mais tempo sem fumar</h2>\r\n                            </ion-text>\r\n                        </div>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n            \r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- SESSÕES -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n        <h1>Sessões</h1>\r\n    </ion-text>\r\n\r\n    <ion-list style=\"--ion-background-color: rgba(255, 255, 255, 0.0)\">\r\n        <ion-item *ngFor=\"let s of sessoes; let i=index\" style=\"--ion-background-color: rgba(255, 255, 255, 0.7)\">\r\n            <ion-label>\r\n                <ion-grid fixed>\r\n                    <ion-row>\r\n                        <ion-col size=\"4\">Sessão {{i+1}}</ion-col>\r\n                        <ion-col size=\"4\" class=\"center\">\r\n                            <ion-badge *ngIf=\"s.disponivel && !s.dadosPacientes[0].presente\" color=\"danger\" mode=\"ios\">Faltou</ion-badge>\r\n                            <ion-badge *ngIf=\"s.disponivel && s.dadosPacientes[0].presente\" color=\"success\" mode=\"ios\">Compareceu</ion-badge>\r\n                            <ion-badge *ngIf=\"!s.disponivel\" color=\"medium\" mode=\"ios\">Comparecer</ion-badge>\r\n                        </ion-col>\r\n                        <ion-col size=\"4\">{{s.data | dataBrasil}}</ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n                \r\n                \r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n    \r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n        <h1>Informações</h1>\r\n    </ion-text>\r\n\r\n            <ion-card  class=\"card-info\">\r\n                <ion-card-content style=\"margin:-15px;\">\r\n\r\n                    <ion-grid fixed>\r\n                        <!-- TEXTO -->\r\n                        <ion-row>\r\n                            <ion-col size=\"4\" class=\"center ion-text-center\"> <h3>Total dias sem fumar</h3></ion-col>\r\n                            <ion-col size=\"4\" class=\"center ion-text-center\"><h3>Dinheiro Economizado</h3></ion-col>\r\n                            <ion-col size=\"4\" class=\"center ion-text-center\"><h3>Cigarros evitados</h3></ion-col>\r\n                        </ion-row>\r\n                        <!-- ICONES -->\r\n                        <ion-row>\r\n                            <ion-col size=\"4\" class=\"center\"><ion-icon size=\"large\" name=\"stopwatch\"></ion-icon></ion-col>\r\n                            <ion-col size=\"4\" class=\"center\"><ion-icon size=\"large\" color=\"success\" name=\"cash\"></ion-icon></ion-col>\r\n                            <ion-col size=\"4\" class=\"center\"><ion-icon size=\"large\" color=\"danger\" name=\"logo-no-smoking\"></ion-icon></ion-col>\r\n                        </ion-row>\r\n                        <!-- VALORES -->\r\n                        <ion-row>\r\n                            <ion-col size=\"4\" class=\"center ion-text-center\"><h1>{{paciente.diasSemFumar}}</h1></ion-col>\r\n                            <ion-col size=\"4\" class=\"center ion-text-center\"><h1>R$ {{paciente.dinheiroAcumulado.toFixed(2)}}</h1></ion-col>\r\n                            <ion-col size=\"4\" class=\"center ion-text-center\"><h1>{{paciente.cigarrosEvitados}}</h1></ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n            \r\n                </ion-card-content>\r\n            </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paciente/perfil/perfil.module.ts":
/*!**************************************************!*\
  !*** ./src/app/paciente/perfil/perfil.module.ts ***!
  \**************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/paciente/perfil/perfil.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/paciente/perfil/perfil.page.scss":
/*!**************************************************!*\
  !*** ./src/app/paciente/perfil/perfil.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('bg-paciente-perfil.jpg') no-repeat center center / cover;\n}\n\n.card-info {\n  --color: black;\n  --background: rgba(255, 255, 255, 0.7);\n}\n\n#card-info-rank {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFjaWVudGUvcGVyZmlsL0M6XFx4YW1wcFxcaHRkb2NzXFxuYW8tZnVtZS0vc3JjXFxhcHBcXHBhY2llbnRlXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhY2llbnRlL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0NKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhY2llbnRlL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmctcGFjaWVudGUtcGVyZmlsLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWluZm8ge1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxufVxyXG5cclxuI2NhcmQtaW5mby1yYW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxyXG59XHJcblxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JnLXBhY2llbnRlLXBlcmZpbC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuLmNhcmQtaW5mbyB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuI2NhcmQtaW5mby1yYW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paciente/perfil/perfil.page.ts":
/*!************************************************!*\
  !*** ./src/app/paciente/perfil/perfil.page.ts ***!
  \************************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sessao.service */ "./src/app/services/sessao.service.ts");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var src_app_models_paciente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var PerfilPage = /** @class */ (function () {
    function PerfilPage(pacienteService, sessaoService, navExtra, router) {
        this.pacienteService = pacienteService;
        this.sessaoService = sessaoService;
        this.navExtra = navExtra;
        this.router = router;
        this.paciente = new src_app_models_paciente__WEBPACK_IMPORTED_MODULE_4__["Paciente"];
        this.sessoes = [];
    }
    PerfilPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.pacienteService.getPacienteLogado()];
                    case 1:
                        _a.paciente = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.sessaoService.buscarSessoes(this.paciente)];
                    case 2:
                        _b.sessoes = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.editar = function () {
        this.navExtra.set('paciente', this.paciente);
        this.router.navigateByUrl('/paciente/perfil/edicao');
    };
    PerfilPage.ctorParameters = function () { return [
        { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_3__["PacienteService"] },
        { type: src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"] },
        { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_5__["NavExtrasService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/paciente/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/paciente/perfil/perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_3__["PacienteService"], src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"], src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_5__["NavExtrasService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es5.js.map