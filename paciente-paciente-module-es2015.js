(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paciente-paciente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/paciente/paciente.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/paciente/paciente.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\r\n  <ion-toolbar [color]=\"page.color\">\r\n    <ion-buttons slot=\"start\" class=\"ion-padding\" (click)=\"sair()\">\r\n        <ion-icon slot=\"start\" name=\"exit\"></ion-icon>  Sair\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">{{page.titulo}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-text class=\"ion-text-center\" *ngIf=\"paciente == null\">\r\n    <h1>Buscando seus dados!</h1>\r\n  </ion-text>\r\n\r\n  <ion-tabs no-shadow no-border *ngIf=\"paciente != null\">\r\n    <ion-tab-bar [color]=\"page.color\" slot=\"bottom\" >\r\n      <!-- PERFIL -->\r\n      <ion-tab-button tab=\"perfil\" (click)=\"setTitulo('perfil')\">\r\n        <ion-icon name=\"person\"  ></ion-icon>\r\n        <ion-label>Perfil</ion-label>\r\n      </ion-tab-button>\r\n      <!-- FINANCEIRO -->\r\n      <ion-tab-button tab=\"financeiro\" (click)=\"setTitulo('financeiro')\">\r\n        <ion-icon name=\"cash\"></ion-icon>\r\n        <ion-label>Financeiro</ion-label>\r\n      </ion-tab-button>\r\n      <!-- CONQUISTAS -->\r\n      <ion-tab-button tab=\"conquistas\" (click)=\"setTitulo('conquistas')\">\r\n        <ion-icon name=\"trophy\" ></ion-icon>\r\n        <ion-label>Conquistas</ion-label>\r\n      </ion-tab-button>\r\n      <!-- CHAT -->\r\n      <ion-tab-button tab=\"chat\"  (click)=\"setTitulo('chat')\">\r\n        <ion-icon name=\"contacts\"></ion-icon>\r\n        <ion-label>chat</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n</ion-tabs>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paciente/paciente.module.ts":
/*!*********************************************!*\
  !*** ./src/app/paciente/paciente.module.ts ***!
  \*********************************************/
/*! exports provided: PacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientePageModule", function() { return PacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paciente.page */ "./src/app/paciente/paciente.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _paciente_page__WEBPACK_IMPORTED_MODULE_6__["PacientePage"],
        children: [
            { path: '', redirectTo: 'perfil' },
            { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
            { path: 'financeiro', loadChildren: './financeiro/financeiro.module#FinanceiroPageModule' },
            { path: 'conquistas', loadChildren: './conquistas/conquistas.module#ConquistasPageModule' },
            { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' }
        ]
    }
];
let PacientePageModule = class PacientePageModule {
};
PacientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_paciente_page__WEBPACK_IMPORTED_MODULE_6__["PacientePage"]]
    })
], PacientePageModule);



/***/ }),

/***/ "./src/app/paciente/paciente.page.scss":
/*!*********************************************!*\
  !*** ./src/app/paciente/paciente.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  font-size: 15px;\n  text-transform: uppercase;\n}\n\nion-tab-button {\n  --background-focused:red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFjaWVudGUvQzpcXHhhbXBwXFxodGRvY3NcXG5hby1mdW1lLS9zcmNcXGFwcFxccGFjaWVudGVcXHBhY2llbnRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFjaWVudGUvcGFjaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFjaWVudGUvcGFjaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOnJlZDtcclxufVxyXG4iLCJpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/paciente/paciente.page.ts":
/*!*******************************************!*\
  !*** ./src/app/paciente/paciente.page.ts ***!
  \*******************************************/
/*! exports provided: PacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientePage", function() { return PacientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _services_questionario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/questionario.service */ "./src/app/services/questionario.service.ts");
/* harmony import */ var _services_sessao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sessao.service */ "./src/app/services/sessao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_paciente_entendendo_fumo_paciente_entendendo_fumo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/paciente-entendendo-fumo/paciente-entendendo-fumo.component */ "./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.ts");
/* harmony import */ var _components_paciente_responder_dia_paciente_responder_dia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/paciente-responder-dia/paciente-responder-dia.component */ "./src/app/components/paciente-responder-dia/paciente-responder-dia.component.ts");
/* harmony import */ var _components_paciente_responder_sessao_paciente_responder_sessao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/paciente-responder-sessao/paciente-responder-sessao.component */ "./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.ts");
/* harmony import */ var _services_paciente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/paciente.service */ "./src/app/services/paciente.service.ts");











let PacientePage = 
/**
 * Tela principal do Paciente
 */
class PacientePage {
    constructor(router, usuariosService, questionarioService, sessaoService, modalController, pacienteService) {
        this.router = router;
        this.usuariosService = usuariosService;
        this.questionarioService = questionarioService;
        this.sessaoService = sessaoService;
        this.modalController = modalController;
        this.pacienteService = pacienteService;
        /** Exibe o titulo da página */
        this.page = { titulo: 'Perfil', color: 'warning2' };
        this.paciente = null;
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.paciente = null;
            // await new Promise(resolve => setTimeout(resolve, 2000));
            this.paciente = yield this.pacienteService.getPacienteLogado();
            //Questionários Diário
            let dias = yield this.questionarioService.buscarQuestionariosAbertos();
            if (dias.length > 0) {
                let modal = yield this.modalController.create({
                    component: _components_paciente_responder_dia_paciente_responder_dia_component__WEBPACK_IMPORTED_MODULE_8__["PacienteResponderDiaComponent"],
                    componentProps: { dias, sair: this.sair.bind(this) },
                    backdropDismiss: false
                });
                yield modal.present();
            }
            //Sessoes
            let sessoes = yield this.sessaoService.buscarSessoesResponder(this.paciente);
            sessoes.forEach((sessao) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let modal = yield this.modalController.create({
                    component: _components_paciente_responder_sessao_paciente_responder_sessao_component__WEBPACK_IMPORTED_MODULE_9__["PacienteResponderSessaoComponent"],
                    componentProps: { sessao },
                    backdropDismiss: false
                });
                yield modal.present();
            }));
            if (this.paciente.primeiroAcesso) {
                //Primeiro Acesso
                const modalCadastro = yield this.modalController.create({
                    component: _components_paciente_entendendo_fumo_paciente_entendendo_fumo_component__WEBPACK_IMPORTED_MODULE_7__["PacienteEntendendoFumoComponent"],
                    backdropDismiss: false,
                    componentProps: { paciente: this.paciente },
                });
                modalCadastro.present();
            }
        });
    }
    /**
     * Informa o nome do titulo a ser exibido na página
     * @param titulo Titulo a ser exibido na página
     */
    setTitulo(page) {
        if (page == 'perfil')
            this.page = { titulo: 'Perfil', color: 'warning2' };
        if (page == 'conquistas')
            this.page = { titulo: 'Conquistas', color: 'success' };
        if (page == 'financeiro')
            this.page = { titulo: 'Financeiro', color: 'danger' };
        if (page == 'chat')
            this.page = { titulo: 'Chat', color: 'primary' };
    }
    /**
     * Desloga o usuário do sitema
     */
    sair() {
        this.usuariosService.deslogar();
        //window.location.reload();
        this.router.navigateByUrl('/login');
    }
};
PacientePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] },
    { type: _services_questionario_service__WEBPACK_IMPORTED_MODULE_4__["QuestionarioService"] },
    { type: _services_sessao_service__WEBPACK_IMPORTED_MODULE_5__["SessaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_paciente_service__WEBPACK_IMPORTED_MODULE_10__["PacienteService"] }
];
PacientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paciente',
        template: __webpack_require__(/*! raw-loader!./paciente.page.html */ "./node_modules/raw-loader/index.js!./src/app/paciente/paciente.page.html"),
        styles: [__webpack_require__(/*! ./paciente.page.scss */ "./src/app/paciente/paciente.page.scss")]
    })
    /**
     * Tela principal do Paciente
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"], _services_questionario_service__WEBPACK_IMPORTED_MODULE_4__["QuestionarioService"], _services_sessao_service__WEBPACK_IMPORTED_MODULE_5__["SessaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_paciente_service__WEBPACK_IMPORTED_MODULE_10__["PacienteService"]])
], PacientePage);



/***/ })

}]);
//# sourceMappingURL=paciente-paciente-module-es2015.js.map