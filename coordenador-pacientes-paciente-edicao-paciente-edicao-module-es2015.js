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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paciente_edicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paciente-edicao.page */ "./src/app/coordenador/pacientes/paciente-edicao/paciente-edicao.page.ts");
/* harmony import */ var src_app_services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/services.module */ "./src/app/services/services.module.ts");








const routes = [
    {
        path: '',
        component: _paciente_edicao_page__WEBPACK_IMPORTED_MODULE_6__["PacienteEdicaoPage"]
    }
];
let PacienteEdicaoPageModule = class PacienteEdicaoPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_enums_nivel_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/nivel.enum */ "./src/app/enums/nivel.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var src_app_models_paciente__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let PacienteEdicaoPage = class PacienteEdicaoPage {
    constructor(formBuilder, toastController, usuariosService, pacienteService, router, activatedRouter, navExtra, loadingCtrl, events) {
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        });
    }
    /**
     * Classe que salva (cadastra ou edita) paciente
     */
    salvar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dados = this.form.value;
            dados.ultimoDiaRespondido = moment__WEBPACK_IMPORTED_MODULE_10__(dados.ultimoDiaRespondido).format('YYYY-MM-DD');
            let load = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Aguarde'
            });
            load.present();
            if (!this.paciente.uid) { //Cadastra
                let resposta = yield this.usuariosService.cadastrar(dados, src_app_enums_nivel_enum__WEBPACK_IMPORTED_MODULE_5__["Nivel"].Paciente);
                if (resposta.success) {
                    this.msg(`Cadastrado com sucesso. Código: ${resposta.codigo}`);
                    this.router.navigateByUrl('/coordenador/pacientes');
                    this.events.publish('pacientes:atualizar', true);
                }
                else
                    this.msg('Não foi possível salvar os dados do paciente, tente novamente mais tarde');
            }
            else { //Atualiza
                let resposta = yield this.usuariosService.atualizar(this.paciente.uid, dados, src_app_enums_nivel_enum__WEBPACK_IMPORTED_MODULE_5__["Nivel"].Paciente);
                console.log(resposta);
                if (resposta.success) {
                    this.msg(`Atualizado com sucesso.`);
                    this.events.publish('pacientes:atualizar', true);
                }
                else
                    this.msg('Não foi possível salvar os dados do paciente, tente novamente mais tarde');
            }
            load.dismiss();
        });
    }
    /**
     * Envia uma mensagem
     * @param msg
     */
    msg(msg) {
        this.toastController.create({
            message: msg,
            duration: 5000
        }).then(t => t.present());
    }
};
PacienteEdicaoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] },
    { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_7__["PacienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_9__["NavExtrasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
];
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



/***/ }),

/***/ "./src/app/models/paciente.ts":
/*!************************************!*\
  !*** ./src/app/models/paciente.ts ***!
  \************************************/
/*! exports provided: Paciente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function() { return Paciente; });
/**
 * Classe com acesso ao dados do paciente
 */
class Paciente {
    constructor(uid, nome, codigo, mediaCigarros = 0, precoCigarro = 0.1, coordenadorUID, ultimoDiaRespondido, avatar = 1, cigarrosEvitados = 0, diasSeguidosSemFumar = 0, diasSemFumar = 0, maxDiasSemFumar = 0, dinheiroAcumulado = 0, dinheiroDisponivel = 0, primeiroAcesso = true, diasPraticoExercicio = 0, excluido = false, questionariosDiarios = []) {
        this.uid = uid;
        this.nome = nome;
        this.codigo = codigo;
        this.mediaCigarros = mediaCigarros;
        this.precoCigarro = precoCigarro;
        this.coordenadorUID = coordenadorUID;
        this.ultimoDiaRespondido = ultimoDiaRespondido;
        this.avatar = avatar;
        this.cigarrosEvitados = cigarrosEvitados;
        this.diasSeguidosSemFumar = diasSeguidosSemFumar;
        this.diasSemFumar = diasSemFumar;
        this.maxDiasSemFumar = maxDiasSemFumar;
        this.dinheiroAcumulado = dinheiroAcumulado;
        this.dinheiroDisponivel = dinheiroDisponivel;
        this.primeiroAcesso = primeiroAcesso;
        this.diasPraticoExercicio = diasPraticoExercicio;
        this.excluido = excluido;
        this.questionariosDiarios = questionariosDiarios;
        // Lista a posição do paciente em relação aos demais
        this.rank = 0;
    }
    get avatarURL() {
        return `/assets/imgs/avatars/${this.avatar}.jpg`;
    }
}
Paciente.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: String },
    { type: String },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Boolean },
    { type: Number },
    { type: Boolean },
    { type: Array }
];


/***/ }),

/***/ "./src/app/models/questionario.ts":
/*!****************************************!*\
  !*** ./src/app/models/questionario.ts ***!
  \****************************************/
/*! exports provided: Questionario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questionario", function() { return Questionario; });
/**
 * Questionário com os atributos das perguntas diarias
 */
class Questionario {
    /**
     * @param dia | Dia da consulta (YYYY-MM-DD)
     * @param humor | Como foi o humor do paciente 0 -> Baixo, 1 -> Médio, 2 -> Bom
     * @param fumou | Se fumou naquele dia,
     * @param cigarros | Quantidade de cigarros
     * @param exercitou  | Se praticou exercicio
     * @param vontadeFumar | Vontade de fumar 0 -> Baixa, 1 -> Normal, 2 -> Alta
     */
    constructor(dia, humor, fumou, cigarros = 0, exercitou, vontadeFumar) {
        this.dia = dia;
        this.humor = humor;
        this.fumou = fumou;
        this.cigarros = cigarros;
        this.exercitou = exercitou;
        this.vontadeFumar = vontadeFumar;
    }
}
Questionario.ctorParameters = () => [
    { type: String },
    { type: undefined },
    { type: Boolean },
    { type: Number },
    { type: Boolean },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/services/paciente.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/paciente.service.ts ***!
  \**********************************************/
/*! exports provided: PacienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteService", function() { return PacienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var _models_questionario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/questionario */ "./src/app/models/questionario.ts");





let PacienteService = 
/**
 * Controla os dados dos questionários do paciente
 */
class PacienteService {
    constructor() {
        this.paciente = null;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(user => {
            if (user != null)
                this.usuarioID = user.uid;
        });
        this.pacienteDB = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('pacientes');
    }
    //============================= BUSCAR COMO COORDENADOR =================================//
    /**
     * Busca todos os pacientes de um Coordenador
     */
    buscarTodos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.usuarioID);
            return this.pacienteDB.where('coordenadorUID', '==', this.usuarioID).where('excluido', '==', false).orderBy('nome').get().then((snapshots) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let pacientes = [];
                const retorno = snapshots.docs.map((doc) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let paciente = Object.assign(new _models_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"], doc.data());
                    yield this.pacienteDB.doc(paciente.uid).collection('questionariosDiarios').get().then(snapshot => {
                        snapshot.forEach(doc => {
                            paciente.questionariosDiarios.push(Object.assign(new _models_questionario__WEBPACK_IMPORTED_MODULE_4__["Questionario"], doc.data()));
                        });
                    });
                    return paciente;
                }));
                yield Promise.all(retorno).then(dados => { dados.forEach(p => { pacientes.push(Object.assign(new _models_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"], p)); }); });
                console.log(pacientes);
                return pacientes;
            }));
        });
    }
    /**
     * Busca o Paciente pelo seu ID unico
     * @param uid
     */
    buscar(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.pacienteDB
                .where('coordenadorUID', '==', this.usuarioID)
                .where('excluido', '==', false)
                .where('uid', '==', uid)
                .get().then(snapshot => {
                if (snapshot.empty)
                    return null;
                return snapshot.docs[0].data();
            });
        });
    }
    //============================= BUSCAR COMO PACIENTE =================================//
    /**
     * Recupera os dados do Paciente logado
     */
    getPacienteLogado() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.paciente != null && this.paciente.uid == this.usuarioID)
                return this.paciente;
            let doc = yield this.pacienteDB.doc(this.usuarioID).get();
            let dados = doc.data();
            yield this.pacienteDB.where('excluido', '==', false)
                .where('coordenadorUID', '==', dados.coordenadorUID)
                .orderBy('diasSeguidosSemFumar', 'desc')
                .get().then(snapshat => {
                let rank = 0;
                snapshat.forEach(doc => {
                    rank++;
                    let p = doc.data();
                    if (p.uid == this.usuarioID)
                        dados['rank'] = rank;
                });
            });
            this.paciente = Object.assign(new _models_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"], dados);
            yield this.pacienteDB.doc(this.paciente.uid).collection('questionariosDiarios').get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.paciente.questionariosDiarios.push(Object.assign(new _models_questionario__WEBPACK_IMPORTED_MODULE_4__["Questionario"], doc.data()));
                });
            });
            return this.paciente;
        });
    }
    /**
     * Atualiza os dados do paciente
     * @param paciente
     */
    atualizarPaciente(paciente) {
        let dados = Object.assign({}, paciente);
        delete dados.questionariosDiarios;
        this.pacienteDB.doc(paciente.uid).update(dados);
        if (this.paciente.uid == paciente.uid)
            this.paciente = paciente;
    }
};
PacienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Controla os dados dos questionários do paciente
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PacienteService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ServicesModule = class ServicesModule {
};
ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ServicesModule);



/***/ })

}]);
//# sourceMappingURL=coordenador-pacientes-paciente-edicao-paciente-edicao-module-es2015.js.map