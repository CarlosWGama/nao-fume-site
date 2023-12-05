(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coordenador-sessao-edicao-sessao-edicao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessao-edicao/sessao-edicao.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/sessao-edicao/sessao-edicao.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/coordenador/sessoes\"></ion-back-button>\r\n    </ion-buttons>\r\n      \r\n    <ion-title>Nova Sessão</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label>Data da sessão</ion-label>\r\n        <ion-datetime display-format=\"DD/MM/YYYY\" [(ngModel)]=\"sessao.data\" max=\"2030-12-30\" doneText=\"Ok\" cancelText=\"Cancelar\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button (click)=\"salvar()\" expand=\"full\" size=\"large\" [disabled]=\"!sessao.data\">\r\n      Salvar\r\n    </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/sessao-edicao/sessao-edicao.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/coordenador/sessao-edicao/sessao-edicao.module.ts ***!
  \*******************************************************************/
/*! exports provided: SessaoEdicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessaoEdicaoPageModule", function() { return SessaoEdicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sessao_edicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessao-edicao.page */ "./src/app/coordenador/sessao-edicao/sessao-edicao.page.ts");







const routes = [
    {
        path: '',
        component: _sessao_edicao_page__WEBPACK_IMPORTED_MODULE_6__["SessaoEdicaoPage"]
    }
];
let SessaoEdicaoPageModule = class SessaoEdicaoPageModule {
};
SessaoEdicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sessao_edicao_page__WEBPACK_IMPORTED_MODULE_6__["SessaoEdicaoPage"]]
    })
], SessaoEdicaoPageModule);



/***/ }),

/***/ "./src/app/coordenador/sessao-edicao/sessao-edicao.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/coordenador/sessao-edicao/sessao-edicao.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb3JkZW5hZG9yL3Nlc3Nhby1lZGljYW8vc2Vzc2FvLWVkaWNhby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/coordenador/sessao-edicao/sessao-edicao.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/coordenador/sessao-edicao/sessao-edicao.page.ts ***!
  \*****************************************************************/
/*! exports provided: SessaoEdicaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessaoEdicaoPage", function() { return SessaoEdicaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sessao.service */ "./src/app/services/sessao.service.ts");
/* harmony import */ var src_app_models_sessao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/sessao */ "./src/app/models/sessao.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");








let SessaoEdicaoPage = class SessaoEdicaoPage {
    constructor(sessaoService, events, navExtra, toastController, router, loadingController) {
        this.sessaoService = sessaoService;
        this.events = events;
        this.navExtra = navExtra;
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        this.sessao = new src_app_models_sessao__WEBPACK_IMPORTED_MODULE_3__["Sessao"]();
    }
    ngOnInit() {
        this.sessao = this.navExtra.get('sessao', new src_app_models_sessao__WEBPACK_IMPORTED_MODULE_3__["Sessao"]());
    }
    /**
     * Função responsável por cadastrar ou editar a data da sessão
     */
    salvar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Aguarde',
                animated: true,
                backdropDismiss: false,
                spinner: 'circles'
            });
            loading.present();
            this.sessao.data = moment__WEBPACK_IMPORTED_MODULE_6__(this.sessao.data).format('YYYY-MM-DD');
            console.log(this.sessao);
            if (!this.sessao.id) { //Cadastro
                let sucesso = yield this.sessaoService.cadastrar(this.sessao);
                if (sucesso === true) {
                    loading.dismiss();
                    this.toastController.create({ message: 'Cadastrado com sucesso', duration: 3000 }).then(t => t.present());
                    this.events.publish('sessoes:atualizar', true);
                    this.router.navigateByUrl('/coordenador/sessoes');
                }
                else {
                    this.toastController.create({ message: 'Houve uma falha ao cadastrar a tarefa', duration: 3000 }).then(t => t.present());
                }
            }
            else { //Edição
                let sucesso = yield this.sessaoService.atualizar(this.sessao);
                if (sucesso === true) {
                    this.toastController.create({ message: 'Atualizado com sucesso', duration: 3000 }).then(t => t.present());
                    this.events.publish('sessoes:atualizar', true);
                }
                else
                    this.toastController.create({ message: 'Houve uma falha ao cadastrar a tarefa', duration: 3000 }).then(t => t.present());
            }
            loading.dismiss();
        });
    }
};
SessaoEdicaoPage.ctorParameters = () => [
    { type: src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_7__["NavExtrasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
SessaoEdicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sessao-edicao',
        template: __webpack_require__(/*! raw-loader!./sessao-edicao.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessao-edicao/sessao-edicao.page.html"),
        styles: [__webpack_require__(/*! ./sessao-edicao.page.scss */ "./src/app/coordenador/sessao-edicao/sessao-edicao.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_7__["NavExtrasService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], SessaoEdicaoPage);



/***/ })

}]);
//# sourceMappingURL=coordenador-sessao-edicao-sessao-edicao-module-es2015.js.map