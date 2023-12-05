(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coordenador-pacientes-visualizar-paciente-visualizar-paciente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-content>\r\n\r\n    <ion-toolbar color=\"primary\">\r\n\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/coordenador/pacientes\"></ion-back-button>\r\n        </ion-buttons>\r\n    \r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"editar()\">\r\n            Editar\r\n          </ion-button>\r\n          \r\n        </ion-buttons>\r\n    \r\n      </ion-toolbar>\r\n\r\n    <div id=\"header\">\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <!-- AVATAR -->\r\n          <ion-col size=\"4\">\r\n            \r\n            <ion-text color=\"light\" class=\"ion-text-center\">\r\n              <h3>Paciente</h3>\r\n            </ion-text>\r\n            \r\n            <ion-avatar id=\"avatar\" class=\"ion-align-items-center\">\r\n              <img [src]=\"paciente.avatarURL\" />\r\n            </ion-avatar>\r\n\r\n            <ion-text color=\"light\" class=\"ion-text-center\">\r\n              <p>Código: {{paciente.codigo}}</p>\r\n            </ion-text>\r\n              \r\n\r\n          </ion-col>\r\n          <!-- DADOS -->\r\n          <ion-col size=\"8\">\r\n            <ion-list id=\"perfil\">\r\n\r\n              <ion-item>\r\n                <ion-label>{{paciente.nome}}</ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-badge slot=\"start\">0</ion-badge>\r\n                <ion-label>Sessões idas</ion-label>\r\n              </ion-item>\r\n  \r\n\r\n              <ion-item>\r\n                <ion-badge slot=\"start\">{{paciente.diasSemFumar}}</ion-badge>\r\n                <ion-label>Dias sem fumar</ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                  <ion-badge slot=\"start\">{{paciente.mediaCigarros}}</ion-badge>\r\n                  <ion-label>Média cigarro ao dia</ion-label>\r\n                </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-badge slot=\"start\">{{paciente.cigarrosEvitados}}</ion-badge>\r\n                <ion-label>Cigarros evitados</ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-badge slot=\"start\" color=\"success\">R$ {{paciente.dinheiroAcumulado.toFixed(2)}}</ion-badge>\r\n                <ion-label>Economizado</ion-label>\r\n              </ion-item>\r\n\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <div id=\"top\">\r\n\r\n    </div>\r\n\r\n    <!-- HISTORICO -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n      <h1>Histórico</h1>\r\n    </ion-text>\r\n    <ion-list>\r\n\r\n      <ion-item>\r\n          <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"3\">\r\n                  <ion-label class=\"cabecalho\">Data</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ion-label  class=\"cabecalho ion-text-wrap\">Abstinente</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-label class=\"cabecalho ion-text-wrap\">Vontade</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-label class=\"cabecalho ion-text-wrap\">Praticou</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-label class=\"cabecalho ion-text-wrap\">Humor</ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item *ngFor=\"let dia of paciente.questionariosDiarios\">\r\n\r\n        <ion-grid fixed>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-label style=\"font-size:12px;\">{{dia.dia | dataBrasil}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-badge color=\"success\" *ngIf=\"!dia.fumou\">SIM</ion-badge>\r\n              <ion-badge color=\"danger\" *ngIf=\"dia.fumou\">NÃO</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n                <ion-badge color=\"success\" *ngIf=\"dia.vontadeFumar == 0\">BAIXA</ion-badge>\r\n                <ion-badge color=\"warning\" *ngIf=\"dia.vontadeFumar == 1\">MÉDIA</ion-badge>\r\n                <ion-badge color=\"danger\" *ngIf=\"dia.vontadeFumar == 2\">ALTA</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n                <ion-badge color=\"success\" *ngIf=\"dia.exercitou\">SIM</ion-badge>\r\n              <ion-badge color=\"danger\" *ngIf=\"!dia.exercitou\">NÃO</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n                <ion-badge color=\"danger\" *ngIf=\"dia.humor == 0\">BAIXO</ion-badge>\r\n                <ion-badge color=\"warning\" *ngIf=\"dia.humor == 1\">MÉDIO</ion-badge>\r\n                <ion-badge color=\"success\" *ngIf=\"dia.humor == 2\">ALTO</ion-badge>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: VisualizarPacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarPacientePageModule", function() { return VisualizarPacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visualizar_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visualizar-paciente.page */ "./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _visualizar_paciente_page__WEBPACK_IMPORTED_MODULE_6__["VisualizarPacientePage"]
    }
];
let VisualizarPacientePageModule = class VisualizarPacientePageModule {
};
VisualizarPacientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_visualizar_paciente_page__WEBPACK_IMPORTED_MODULE_6__["VisualizarPacientePage"]]
    })
], VisualizarPacientePageModule);



/***/ }),

/***/ "./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n  background: -webkit-gradient(linear, left top, left bottom, from(#009efd), to(#0c2dd4));\n  background: linear-gradient(#009efd, #0c2dd4);\n  height: 300px;\n}\n\n#avatar {\n  height: 100px;\n  width: 100px;\n}\n\n#top {\n  background: url('user-top.png');\n  background-size: 100% 70px;\n  height: 70px;\n  margin-bottom: -30px;\n}\n\n.cabecalho {\n  font-size: 12px;\n  font-weight: bolder;\n  text-align: center;\n}\n\n#perfil {\n  border-radius: 25px;\n  --background: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vcmRlbmFkb3IvcGFjaWVudGVzL3Zpc3VhbGl6YXItcGFjaWVudGUvQzpcXHhhbXBwXFxodGRvY3NcXG5hby1mdW1lLS9zcmNcXGFwcFxcY29vcmRlbmFkb3JcXHBhY2llbnRlc1xcdmlzdWFsaXphci1wYWNpZW50ZVxcdmlzdWFsaXphci1wYWNpZW50ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2Nvb3JkZW5hZG9yL3BhY2llbnRlcy92aXN1YWxpemFyLXBhY2llbnRlL3Zpc3VhbGl6YXItcGFjaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUZBQUE7RUFBQSw2Q0FBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxzQ0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29vcmRlbmFkb3IvcGFjaWVudGVzL3Zpc3VhbGl6YXItcGFjaWVudGUvdmlzdWFsaXphci1wYWNpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDllZmQgICwjMGMyZGQ0KTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbiNhdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuI3RvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvdXNlci10b3AucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG59XHJcblxyXG4uY2FiZWNhbGhvIHtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3BlcmZpbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn0iLCIjaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDllZmQsICMwYzJkZDQpO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4jYXZhdGFyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4jdG9wIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1ncy91c2VyLXRvcC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufVxuXG4uY2FiZWNhbGhvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwZXJmaWwge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.ts ***!
  \***************************************************************************************/
/*! exports provided: VisualizarPacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarPacientePage", function() { return VisualizarPacientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_paciente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");






let VisualizarPacientePage = class VisualizarPacientePage {
    constructor(pacienteService, activatedRouter, navExtra, router) {
        this.pacienteService = pacienteService;
        this.activatedRouter = activatedRouter;
        this.navExtra = navExtra;
        this.router = router;
        this.paciente = new src_app_models_paciente__WEBPACK_IMPORTED_MODULE_4__["Paciente"]();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.paciente = this.navExtra.get('paciente');
        });
    }
    editar() {
        this.navExtra.set('paciente', this.paciente);
        this.router.navigateByUrl('/coordenador/pacientes/editar');
    }
};
VisualizarPacientePage.ctorParameters = () => [
    { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_5__["NavExtrasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VisualizarPacientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visualizar-paciente',
        template: __webpack_require__(/*! raw-loader!./visualizar-paciente.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.html"),
        styles: [__webpack_require__(/*! ./visualizar-paciente.page.scss */ "./src/app/coordenador/pacientes/visualizar-paciente/visualizar-paciente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_5__["NavExtrasService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], VisualizarPacientePage);



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
        return `/nao-fume-site/assets/imgs/avatars/${this.avatar}.jpg`;
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

/***/ "./src/app/pipes/data-brasil.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/data-brasil.pipe.ts ***!
  \*******************************************/
/*! exports provided: DataBrasilPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBrasilPipe", function() { return DataBrasilPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataBrasilPipe = 
/**
 * Um Pipe que converte o formato de Y-m-d para d/m/Y
 * @author Carlos W. Gama
 */
class DataBrasilPipe {
    transform(value, ...args) {
        if (args[0] != true)
            return value.split('-').reverse().join('/');
        else {
            let dataHora = value.split(' ');
            return dataHora[0].split('-').reverse().join('/') + ' ' + dataHora[1];
        }
    }
};
DataBrasilPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dataBrasil'
    })
    /**
     * Um Pipe que converte o formato de Y-m-d para d/m/Y
     * @author Carlos W. Gama
     */
], DataBrasilPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _data_brasil_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-brasil.pipe */ "./src/app/pipes/data-brasil.pipe.ts");




let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_data_brasil_pipe__WEBPACK_IMPORTED_MODULE_3__["DataBrasilPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_data_brasil_pipe__WEBPACK_IMPORTED_MODULE_3__["DataBrasilPipe"]]
    })
], PipesModule);



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



/***/ })

}]);
//# sourceMappingURL=coordenador-pacientes-visualizar-paciente-visualizar-paciente-module-es2015.js.map