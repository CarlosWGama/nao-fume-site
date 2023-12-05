(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geral-sessao-geral-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessao/geral/sessao-geral.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/sessao/geral/sessao-geral.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <ion-text color=\"medium\" class=\"ion-text-center\">\r\n    <h1>Pacientes presentes</h1>\r\n  </ion-text>\r\n\r\n  <ion-list *ngFor=\"let p of sessao.dadosPacientes; let i = index\">\r\n    <ion-item>\r\n      <ion-label>{{p.nome}}</ion-label>\r\n      <ion-toggle slot=\"end\" [(ngModel)]=\"sessao.dadosPacientes[i].presente\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-radio-group [(ngModel)]=\"sessao.dadosPacientes[i].situacao\" [hidden]=\"!sessao.dadosPacientes[i].presente\">\r\n      <ion-item  lines=\"none\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"ion-align-items-center status\">\r\n              Abstinente \r\n              <ion-radio name=\"situacao\" value=\"1\" [checked]=\"p.situacao == 1\"></ion-radio>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-align-items-center status\">\r\n              Fumando\r\n              <ion-radio name=\"situacao\" value=\"2\" [checked]=\"p.situacao == 2\"></ion-radio>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-align-items-center status\">\r\n              Manutenção\r\n              <ion-radio name=\"situacao\" value=\"3\" [checked]=\"p.situacao == 3\"></ion-radio>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n\r\n  <ion-button (click)=\"salvar()\" expand=\"full\">\r\n    Salvar\r\n  </ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/sessao/geral/sessao-geral.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/coordenador/sessao/geral/sessao-geral.module.ts ***!
  \*****************************************************************/
/*! exports provided: SessaoGeralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessaoGeralPageModule", function() { return SessaoGeralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sessao_geral_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessao-geral.page */ "./src/app/coordenador/sessao/geral/sessao-geral.page.ts");







var routes = [
    {
        path: '',
        component: _sessao_geral_page__WEBPACK_IMPORTED_MODULE_6__["SessaoGeralPage"]
    }
];
var SessaoGeralPageModule = /** @class */ (function () {
    function SessaoGeralPageModule() {
    }
    SessaoGeralPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sessao_geral_page__WEBPACK_IMPORTED_MODULE_6__["SessaoGeralPage"]]
        })
    ], SessaoGeralPageModule);
    return SessaoGeralPageModule;
}());



/***/ }),

/***/ "./src/app/coordenador/sessao/geral/sessao-geral.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/coordenador/sessao/geral/sessao-geral.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-radio {\n  float: left;\n  margin: -3px 3px 0px 0px;\n}\n\n.status {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vcmRlbmFkb3Ivc2Vzc2FvL2dlcmFsL0M6XFx4YW1wcFxcaHRkb2NzXFxuYW8tZnVtZS0vc3JjXFxhcHBcXGNvb3JkZW5hZG9yXFxzZXNzYW9cXGdlcmFsXFxzZXNzYW8tZ2VyYWwucGFnZS5zY3NzIiwic3JjL2FwcC9jb29yZGVuYWRvci9zZXNzYW8vZ2VyYWwvc2Vzc2FvLWdlcmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29vcmRlbmFkb3Ivc2Vzc2FvL2dlcmFsL3Nlc3Nhby1nZXJhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXJhZGlvIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW46LTNweCAzcHggMHB4IDBweDtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufSIsImlvbi1yYWRpbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IC0zcHggM3B4IDBweCAwcHg7XG59XG5cbi5zdGF0dXMge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coordenador/sessao/geral/sessao-geral.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/coordenador/sessao/geral/sessao-geral.page.ts ***!
  \***************************************************************/
/*! exports provided: SessaoGeralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessaoGeralPage", function() { return SessaoGeralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");
/* harmony import */ var src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sessao.service */ "./src/app/services/sessao.service.ts");





var SessaoGeralPage = /** @class */ (function () {
    function SessaoGeralPage(toastController, navExtra, sessaoService, alertController) {
        this.toastController = toastController;
        this.navExtra = navExtra;
        this.sessaoService = sessaoService;
        this.alertController = alertController;
    }
    SessaoGeralPage.prototype.ngOnInit = function () {
        this.sessao = this.navExtra.get('sessao', null, false);
        console.log(this.sessao);
    };
    SessaoGeralPage.prototype.salvar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Solicitar que pacientes respondam um questionário sobre a sessão?',
                            buttons: [
                                { text: 'Não solicitar', handler: function () { _this.sessao.disponivel = false; } },
                                { text: 'Solicitar', handler: function () { _this.sessao.disponivel = true; } },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        alert.onDidDismiss().then(function () {
                            console.log(_this.sessao);
                            _this.sessaoService.atualizar(_this.sessao);
                            _this.toastController.create({
                                message: 'Salvo com sucesso',
                                duration: 3000
                            }).then(function (t) { return t.present(); });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SessaoGeralPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"] },
        { type: src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_4__["SessaoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    SessaoGeralPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sessao-geral',
            template: __webpack_require__(/*! raw-loader!./sessao-geral.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessao/geral/sessao-geral.page.html"),
            styles: [__webpack_require__(/*! ./sessao-geral.page.scss */ "./src/app/coordenador/sessao/geral/sessao-geral.page.scss")]
        })
        /**
         * Lista quais Pacientes estiveram presentes na sessão e a situação deles.
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"], src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_4__["SessaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SessaoGeralPage);
    return SessaoGeralPage;
}());



/***/ })

}]);
//# sourceMappingURL=geral-sessao-geral-module-es5.js.map