(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coordenador-pacientes-paciente-edicao-paciente-edicao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/coordenador/pacientes\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Novo Paciente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"form\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label>Nome</ion-label>\r\n        <ion-input formControlName=\"nome\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"form.get('nome').invalid && form.get('nome').touched\" lines=\"none\">\r\n        <ion-text color=\"danger\" class=\"form-error\">\r\n          Obrigatório\r\n        </ion-text>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Senha</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"senha\" slot=\"end\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"form.get('senha').invalid && form.get('senha').touched\" lines=\"none\">\r\n        <ion-text color=\"danger\" class=\"form-error\">\r\n          Número obrigatorío de pelo menos 4 digitos\r\n        </ion-text>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Próximo questionário diário</ion-label>\r\n        <ion-datetime display-format=\"DD/MM/YYYY\"  formControlName=\"ultimoDiaRespondido\" max=\"2030-12-30\" doneText=\"Ok\" cancelText=\"Cancelar\"></ion-datetime>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item>\r\n        <ion-label>Cigarros por dia</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"mediaCigarros\" slot=\"end\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"form.get('mediaCigarros').invalid && form.get('mediaCigarros').touched\" lines=\"none\">\r\n        <ion-text color=\"danger\" class=\"form-error\">\r\n          Obrigatório\r\n        </ion-text>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Preço do cigarro (R$)</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"precoCigarro\" slot=\"end\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"form.get('precoCigarro').invalid && form.get('precoCigarro').touched\" lines=\"none\">\r\n        <ion-text color=\"danger\" class=\"form-error\">\r\n          Obrigatório, no formato do exemplo \"1,50\"\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-button (click)=\"salvar()\" expand=\"block\" color=\"success\" size=\"large\" [disabled]=\"!form.valid\">\r\n      Salvar\r\n    </ion-button>\r\n  </form>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PacienteEdicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteEdicaoPageModule", function() { return PacienteEdicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paciente_edicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paciente-edicao.page */ "./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.ts");
/* harmony import */ var src_app_services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/services.module */ "./src/app/services/services.module.ts");








var routes = [
    {
        path: '',
        component: _paciente_edicao_page__WEBPACK_IMPORTED_MODULE_6__["PacienteEdicaoPage"]
    }
];
var PacienteEdicaoPageModule = /** @class */ (function () {
    function PacienteEdicaoPageModule() {
    }
    PacienteEdicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_paciente_edicao_page__WEBPACK_IMPORTED_MODULE_6__["PacienteEdicaoPage"]]
        })
    ], PacienteEdicaoPageModule);
    return PacienteEdicaoPageModule;
}());



/***/ }),

/***/ "./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb3JkZW5hZG9yL3BhY2llbnRlcy9wYWNpZW50ZS1lZGljYW8vcGFjaWVudGUtZWRpY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PacienteEdicaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteEdicaoPage", function() { return PacienteEdicaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_enums_nivel_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/nivel.enum */ "./src/app/enums/nivel.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var src_app_models_paciente__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var PacienteEdicaoPage = /** @class */ (function () {
    function PacienteEdicaoPage(formBuilder, toastController, usuariosService, pacienteService, router, activatedRouter, navExtra, loadingCtrl, events) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.usuariosService = usuariosService;
        this.pacienteService = pacienteService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.navExtra = navExtra;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.paciente = new src_app_models_paciente__WEBPACK_IMPORTED_MODULE_8__["Paciente"]();
    }
    PacienteEdicaoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.paciente = this.navExtra.get('paciente', new src_app_models_paciente__WEBPACK_IMPORTED_MODULE_8__["Paciente"]());
                if (this.paciente.ultimoDiaRespondido == null)
                    this.paciente.ultimoDiaRespondido = moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD');
                this.form = this.formBuilder.group({
                    nome: [this.paciente.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    senha: [null, (!this.paciente.uid ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)] : [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
                    mediaCigarros: [this.paciente.mediaCigarros, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
                    precoCigarro: [this.paciente.precoCigarro, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.1)]],
                    ultimoDiaRespondido: [this.paciente.ultimoDiaRespondido, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Classe que salva (cadastra ou edita) paciente
     */
    PacienteEdicaoPage.prototype.salvar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dados, load, resposta, resposta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dados = this.form.value;
                        dados.ultimoDiaRespondido = moment__WEBPACK_IMPORTED_MODULE_10__(dados.ultimoDiaRespondido).format('YYYY-MM-DD');
                        return [4 /*yield*/, this.loadingCtrl.create({
                                spinner: 'circles',
                                message: 'Aguarde'
                            })];
                    case 1:
                        load = _a.sent();
                        load.present();
                        if (!!this.paciente.uid) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.usuariosService.cadastrar(dados, src_app_enums_nivel_enum__WEBPACK_IMPORTED_MODULE_5__["Nivel"].Paciente)];
                    case 2:
                        resposta = _a.sent();
                        if (resposta.success) {
                            this.msg("Cadastrado com sucesso. C\u00F3digo: " + resposta.codigo);
                            this.router.navigateByUrl('/coordenador/pacientes');
                            this.events.publish('pacientes:atualizar', true);
                        }
                        else
                            this.msg('Não foi possível salvar os dados do paciente, tente novamente mais tarde');
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.usuariosService.atualizar(this.paciente.uid, dados, src_app_enums_nivel_enum__WEBPACK_IMPORTED_MODULE_5__["Nivel"].Paciente)];
                    case 4:
                        resposta = _a.sent();
                        console.log(resposta);
                        if (resposta.success) {
                            this.msg("Atualizado com sucesso.");
                            this.events.publish('pacientes:atualizar', true);
                        }
                        else
                            this.msg('Não foi possível salvar os dados do paciente, tente novamente mais tarde');
                        _a.label = 5;
                    case 5:
                        load.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Envia uma mensagem
     * @param msg
     */
    PacienteEdicaoPage.prototype.msg = function (msg) {
        this.toastController.create({
            message: msg,
            duration: 5000
        }).then(function (t) { return t.present(); });
    };
    PacienteEdicaoPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] },
        { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__["PacienteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_9__["NavExtrasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
    ]; };
    PacienteEdicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paciente-edicao',
            template: __webpack_require__(/*! raw-loader!./paciente-edicao.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.html"),
            styles: [__webpack_require__(/*! ./paciente-edicao.page.scss */ "./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"], src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__["PacienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_9__["NavExtrasService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], PacienteEdicaoPage);
    return PacienteEdicaoPage;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=coordenador-pacientes-paciente-edicao-paciente-edicao-module-es5.js.map