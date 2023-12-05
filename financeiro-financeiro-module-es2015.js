(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["financeiro-financeiro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/paciente/financeiro/financeiro.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/paciente/financeiro/financeiro.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n    <div id=\"relatorio\" class=\"ion-padding\">\r\n        <ion-text color=\"light\" class=\"ion-text-center\">\r\n            <h1 style=\"margin-top:-5px\">Total economizado R$ {{paciente.dinheiroAcumulado.toFixed(2)}}</h1>\r\n            <h4 style=\"margin-top:-5px\">Disponível R$ {{paciente.dinheiroDisponivel.toFixed(2)}}</h4>\r\n        </ion-text>\r\n    </div>\r\n\r\n    <!-- METAS -->\r\n    <div id=\"metas\">\r\n\r\n        <ion-text color=\"medium\" class=\"ion-text-center\">\r\n            <h1>Metas </h1>\r\n        </ion-text>\r\n\r\n        <!-- NENHUMA META CADASTRADA -->\r\n        <ion-text color=\"dark\" class=\"ion-text-center\" *ngIf=\"metas.length == 0\">\r\n            <p>Nenhuma meta cadastrada ainda</p>\r\n            <p>Clique no + para cadastrar uma nova meta</p>\r\n        </ion-text>\r\n\r\n        <!-- METAS CADASTRADAS -->\r\n        <ion-card *ngFor=\"let meta of metas\">\r\n            <ion-card-header>\r\n                <ion-card-title>{{meta.titulo}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <ion-grid fixed>\r\n                    <ion-row>\r\n                        <ion-col size=\"6\"><ion-text>Objetivo: R$ {{meta.objetivo.toFixed(2)}}</ion-text></ion-col>\r\n                        <ion-col size=\"6\">\r\n                            <ion-badge *ngIf=\"!meta.usado && meta.objetivo <= paciente.dinheiroDisponivel\" color=\"tertiary\" mode=\"ios\">Pode usar!</ion-badge>\r\n                            <ion-badge *ngIf=\"meta.usado\" color=\"success\" mode=\"ios\">REALIZADO!</ion-badge>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n               \r\n                <app-progress-bar [atual]=\"paciente.dinheiroDisponivel\" [max]=\"meta.objetivo\"></app-progress-bar>\r\n                \r\n                <div class=\"card-buttons\">\r\n                    <ion-button (click)=\"remover(meta)\" color=\"danger\" fill=\"outline\">\r\n                        <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\r\n                        Remover\r\n                    </ion-button>\r\n\r\n                    <ion-button *ngIf=\"!meta.usado && meta.objetivo <= paciente.dinheiroDisponivel\" (click)=\"usar(meta)\" color=\"success\" fill=\"outline\">\r\n                        <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\r\n                        Usar\r\n                    </ion-button>\r\n                </div>\r\n\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n\r\n    <ion-fab vertical=\"top\" horizontal=\"end\">\r\n        <ion-fab-button color=\"danger\" (click)=\"adicionar()\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/models/meta.ts":
/*!********************************!*\
  !*** ./src/app/models/meta.ts ***!
  \********************************/
/*! exports provided: Meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/**
 * Define a meta financeira de um paciente
 */
class Meta {
    constructor(titulo, objetivo, usado = false, pacienteUID, uid) {
        this.titulo = titulo;
        this.objetivo = objetivo;
        this.usado = usado;
        this.pacienteUID = pacienteUID;
        this.uid = uid;
    }
}
Meta.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: Boolean },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/paciente/financeiro/financeiro.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/paciente/financeiro/financeiro.module.ts ***!
  \**********************************************************/
/*! exports provided: FinanceiroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroPageModule", function() { return FinanceiroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _financeiro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./financeiro.page */ "./src/app/paciente/financeiro/financeiro.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _financeiro_page__WEBPACK_IMPORTED_MODULE_6__["FinanceiroPage"]
    }
];
let FinanceiroPageModule = class FinanceiroPageModule {
};
FinanceiroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_financeiro_page__WEBPACK_IMPORTED_MODULE_6__["FinanceiroPage"]]
    })
], FinanceiroPageModule);



/***/ }),

/***/ "./src/app/paciente/financeiro/financeiro.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/paciente/financeiro/financeiro.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#relatorio {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #f04141), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(#f04141 50%, rgba(255, 255, 255, 0));\n  width: 100%;\n  height: 30%;\n}\n\n#metas {\n  width: 100%;\n  height: 70%;\n  overflow-y: scroll;\n}\n\n.card-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nion-fab {\n  margin-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFjaWVudGUvZmluYW5jZWlyby9DOlxceGFtcHBcXGh0ZG9jc1xcbmFvLWZ1bWUtL3NyY1xcYXBwXFxwYWNpZW50ZVxcZmluYW5jZWlyb1xcZmluYW5jZWlyby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhY2llbnRlL2ZpbmFuY2Vpcm8vZmluYW5jZWlyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpSEFBQTtFQUFBLGdFQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWNpZW50ZS9maW5hbmNlaXJvL2ZpbmFuY2Vpcm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlbGF0b3JpbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2YwNDE0MSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuI21ldGFzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jYXJkLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaW9uLWZhYiB7XHJcbiAgICBtYXJnaW4tdG9wOjE1MHB4XHJcbn0iLCIjcmVsYXRvcmlvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMDQxNDEgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4jbWV0YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNhcmQtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/paciente/financeiro/financeiro.page.ts":
/*!********************************************************!*\
  !*** ./src/app/paciente/financeiro/financeiro.page.ts ***!
  \********************************************************/
/*! exports provided: FinanceiroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroPage", function() { return FinanceiroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_financeiro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/financeiro.service */ "./src/app/services/financeiro.service.ts");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var src_app_models_paciente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var src_app_models_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/meta */ "./src/app/models/meta.ts");







let FinanceiroPage = 
/**
 * Pagina do Paciente que exibe suas conquistas financeiras
 */
class FinanceiroPage {
    constructor(toastController, alertController, pacienteService, financeiroService) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.pacienteService = pacienteService;
        this.financeiroService = financeiroService;
        this.paciente = new src_app_models_paciente__WEBPACK_IMPORTED_MODULE_5__["Paciente"];
        this.metas = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.paciente = yield this.pacienteService.getPacienteLogado();
            this.atualizar();
        });
    }
    /** Usa uma meta
     * O dinheiro da meta será discontato
    */
    usar(meta) {
        //Lembrar de salvar quantas metas já foram concluidas para conquista
        this.alertController.create({
            header: 'Usar meta',
            message: 'Dejesa realmente usar essa meta?',
            buttons: [
                'Cancelar',
                { text: 'Usar', handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        meta.usado = true;
                        yield this.financeiroService.atualizar(meta);
                        this.atualizar();
                        //Baixa o valor disponivel 
                        this.paciente.dinheiroDisponivel -= meta.objetivo;
                        this.pacienteService.atualizarPaciente(this.paciente);
                        this.toastController.create({
                            message: 'Meta usada!',
                            duration: 3000,
                            position: 'bottom'
                        }).then(t => t.present());
                    })
                }
            ]
        }).then(alert => alert.present());
    }
    /** Remover uma meta */
    remover(meta) {
        this.alertController.create({
            header: 'Remover meta',
            message: 'Dejesa realmente remover essa meta?',
            buttons: [
                'Cancelar',
                { text: 'Remover', handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.financeiroService.excluir(meta);
                        this.atualizar();
                        this.toastController.create({
                            message: 'Removida com sucesso',
                            duration: 3000,
                            position: 'bottom'
                        }).then(t => t.present());
                    })
                }
            ]
        }).then(alert => alert.present());
    }
    /**
     * Adiciona uma nova meta
     */
    adicionar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertController.create({
                header: 'Adicionar nova meta',
                inputs: [
                    { name: 'titulo', placeholder: 'Digite um nome para a meta', type: 'text' },
                    { name: 'objetivo', placeholder: 'Digite o valor a juntar', type: 'number' },
                ],
                buttons: [
                    { text: 'Cancelar', cssClass: 'btn-cancelar' },
                    { text: 'Adicionar', cssClass: 'btn-ok', handler: (dados) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const meta = new src_app_models_meta__WEBPACK_IMPORTED_MODULE_6__["Meta"](dados.titulo, Number(dados.objetivo));
                            console.log(meta);
                            yield this.financeiroService.cadastrar(meta);
                            this.atualizar();
                            this.toastController.create({
                                message: 'Meta adicionada',
                                duration: 3000,
                                position: 'bottom'
                            }).then(t => t.present());
                        })
                    }
                ]
            }).then(alert => alert.present());
        });
    }
    /** Busca as metas do paciente */
    atualizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.metas = yield this.financeiroService.buscarTodos();
        });
    }
};
FinanceiroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__["PacienteService"] },
    { type: src_app_services_financeiro_service__WEBPACK_IMPORTED_MODULE_3__["FinanceiroService"] }
];
FinanceiroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-financeiro',
        template: __webpack_require__(/*! raw-loader!./financeiro.page.html */ "./node_modules/raw-loader/index.js!./src/app/paciente/financeiro/financeiro.page.html"),
        styles: [__webpack_require__(/*! ./financeiro.page.scss */ "./src/app/paciente/financeiro/financeiro.page.scss")]
    })
    /**
     * Pagina do Paciente que exibe suas conquistas financeiras
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__["PacienteService"], src_app_services_financeiro_service__WEBPACK_IMPORTED_MODULE_3__["FinanceiroService"]])
], FinanceiroPage);



/***/ }),

/***/ "./src/app/services/financeiro.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/financeiro.service.ts ***!
  \************************************************/
/*! exports provided: FinanceiroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroService", function() { return FinanceiroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/meta */ "./src/app/models/meta.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let FinanceiroService = 
/**
 * Service para controlar a questão financeira do paciente
 */
class FinanceiroService {
    constructor(events) {
        this.events = events;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(user => this.usuario = user);
        this.financeiroDB = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('metas-financeiras');
    }
    /**
     * Busca todas as metas de um paciente
     */
    buscarTodos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let snapshots = yield this.financeiroDB.where('pacienteUID', '==', this.usuario.uid).get();
            const metas = [];
            snapshots.forEach(doc => {
                metas.push(Object.assign(new _models_meta__WEBPACK_IMPORTED_MODULE_3__["Meta"], doc.data()));
            });
            return metas;
        });
    }
    /**
     * Cadastra uma nova meta
     * @param meta
     */
    cadastrar(meta) {
        const doc = this.financeiroDB.doc();
        meta.pacienteUID = this.usuario.uid;
        meta.uid = doc.id;
        return doc.set(Object.assign({}, meta));
    }
    /**
     * Atualiza uma meta
     * @param meta
     */
    atualizar(meta) {
        return this.financeiroDB.doc(meta.uid).set(Object.assign({}, meta));
    }
    /**
     * Remove uma meta
     * @param meta
     */
    excluir(meta) {
        return this.financeiroDB.doc(meta.uid).delete();
    }
};
FinanceiroService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
FinanceiroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Service para controlar a questão financeira do paciente
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], FinanceiroService);



/***/ })

}]);
//# sourceMappingURL=financeiro-financeiro-module-es2015.js.map