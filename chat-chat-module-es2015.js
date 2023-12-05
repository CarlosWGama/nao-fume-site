(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/paciente/chat/chat.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/paciente/chat/chat.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content #content>\r\n\r\n  <div id=\"mensagens\" *ngIf=\"mensagens.length != 00\">\r\n    <div [ngClass]=\"{\r\n        'msg-outro': m.pacienteUID != paciente.uid,\r\n        'msg-sua': m.pacienteUID == paciente.uid \r\n      }\" *ngFor=\"let m of mensagens\">\r\n    <ion-text>\r\n      <div class=\"header\">\r\n        <h1>Usuário {{m.pacienteCodigo}}</h1>  \r\n        <p class=\"data\">{{m.data|dataBrasil:true}}</p>\r\n      </div>\r\n      <p class=\"msg\">{{m.mensagem}}</p>\r\n    </ion-text>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n\r\n  <div id=\"enviar\">\r\n    <ion-textarea [autoGrow]=\"true\" rows=\"1\" [(ngModel)]=\"mensagem\" placeholder=\"Digite seu texto\"></ion-textarea>\r\n    <ion-button (click)=\"enviar()\" fill=\"clear\">\r\n      <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/models/mensagem.ts":
/*!************************************!*\
  !*** ./src/app/models/mensagem.ts ***!
  \************************************/
/*! exports provided: Mensagem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mensagem", function() { return Mensagem; });
/**
 * Armazena a mensagem enviada no chat
 * @author Carlos W. Gama
 * @version 1.0.0
 */
class Mensagem {
    constructor(pacienteCodigo, mensagem, data, uid, pacienteUID, coordenadorUID) {
        this.pacienteCodigo = pacienteCodigo;
        this.mensagem = mensagem;
        this.data = data;
        this.uid = uid;
        this.pacienteUID = pacienteUID;
        this.coordenadorUID = coordenadorUID;
    }
}
Mensagem.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


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

/***/ "./src/app/paciente/chat/chat.module.ts":
/*!**********************************************!*\
  !*** ./src/app/paciente/chat/chat.module.ts ***!
  \**********************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/paciente/chat/chat.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/paciente/chat/chat.page.scss":
/*!**********************************************!*\
  !*** ./src/app/paciente/chat/chat.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(-20deg, #04befe 0%, #4481eb 100%);\n  --padding-bottom: 50px;\n}\n\n#enviar {\n  position: fixed;\n  min-height: 50px;\n  max-height: 100px;\n  width: 100%;\n  bottom: 0px;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n}\n\n.msg-sua {\n  background: lightcyan;\n  padding: 5px;\n  max-width: 90%;\n  margin: 10px;\n  border-radius: 10px;\n  margin: 10px 10px 10px 10%;\n}\n\n.msg-sua h1 {\n  margin: 0px;\n  text-align: right;\n  color: #353333;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.msg-sua .msg {\n  margin: 3px;\n  text-align: right;\n}\n\n.msg-sua .data {\n  margin: 5px;\n  color: grey;\n}\n\n.msg-sua .header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.msg-outro {\n  background: white;\n  padding: 5px;\n  max-width: 90%;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n.msg-outro h1 {\n  margin: 0px;\n  color: #725757;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.msg-outro .msg {\n  margin: 3px;\n  text-align: left;\n}\n\n.msg-outro .data {\n  margin: 5px;\n  color: grey;\n}\n\n.msg-outro .header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFjaWVudGUvY2hhdC9DOlxceGFtcHBcXGh0ZG9jc1xcbmFvLWZ1bWUtL3NyY1xcYXBwXFxwYWNpZW50ZVxcY2hhdFxcY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhY2llbnRlL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrREFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRENJO0VBQUssV0FBQTtFQUFhLGlCQUFBO0VBQW1CLGNBQUE7RUFBdUIsZUFBQTtFQUFpQixtQkFBQTtBQ01qRjs7QURKSTtFQUFPLFdBQUE7RUFBYSxpQkFBQTtBQ1F4Qjs7QUROSTtFQUFRLFdBQUE7RUFBYSxXQUFBO0FDVXpCOztBRFBJO0VBQVUsb0JBQUE7RUFBQSxhQUFBO0VBQWUsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQTZCLHlCQUFBO1VBQUEsOEJBQUE7QUNZMUQ7O0FEVEE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWUo7O0FEVkk7RUFBSyxXQUFBO0VBQWEsY0FBQTtFQUF5QixlQUFBO0VBQWlCLG1CQUFBO0FDZ0JoRTs7QURkSTtFQUFPLFdBQUE7RUFBYSxnQkFBQTtBQ2tCeEI7O0FEaEJJO0VBQVEsV0FBQTtFQUFhLFdBQUE7QUNvQnpCOztBRGxCSTtFQUFVLG9CQUFBO0VBQUEsYUFBQTtFQUFjLHlCQUFBO1VBQUEsOEJBQUE7QUNzQjVCIiwiZmlsZSI6InNyYy9hcHAvcGFjaWVudGUvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yMGRlZywgIzA0YmVmZSAwJSwgIzQ0ODFlYiAxMDAlKTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbiNlbnZpYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuLm1zZy1zdWEge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRjeWFuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMCUgO1xyXG5cclxuICAgIGgxIHsgbWFyZ2luOiAwcHg7IHRleHQtYWxpZ246IHJpZ2h0OyBjb2xvcjpyZ2IoNTMsIDUxLCA1MSk7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxyXG5cclxuICAgIC5tc2cgeyBtYXJnaW46IDNweDsgdGV4dC1hbGlnbjogcmlnaHQ7fVxyXG5cclxuICAgIC5kYXRhIHsgbWFyZ2luOiA1cHg7IGNvbG9yOiBncmV5fVxyXG5cclxuXHJcbiAgICAuaGVhZGVyIHsgZGlzcGxheTpmbGV4OyAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH0gICAgXHJcbn1cclxuXHJcbi5tc2ctb3V0cm8ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBoMSB7IG1hcmdpbjogMHB4OyBjb2xvcjpyZ2IoMTE0LCA4NywgODcpOyAgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogYm9sZGVyO31cclxuXHJcbiAgICAubXNnIHsgbWFyZ2luOiAzcHg7IHRleHQtYWxpZ246IGxlZnQ7fVxyXG5cclxuICAgIC5kYXRhIHsgbWFyZ2luOiA1cHg7IGNvbG9yOiBncmV5fVxyXG5cclxuICAgIC5oZWFkZXIgeyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjt9XHJcblxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjBkZWcsICMwNGJlZmUgMCUsICM0NDgxZWIgMTAwJSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbiNlbnZpYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubXNnLXN1YSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Y3lhbjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwJTtcbn1cbi5tc2ctc3VhIGgxIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzM1MzMzMztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLm1zZy1zdWEgLm1zZyB7XG4gIG1hcmdpbjogM3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tc2ctc3VhIC5kYXRhIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuLm1zZy1zdWEgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubXNnLW91dHJvIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5tc2ctb3V0cm8gaDEge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICM3MjU3NTc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5tc2ctb3V0cm8gLm1zZyB7XG4gIG1hcmdpbjogM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1zZy1vdXRybyAuZGF0YSB7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogZ3JleTtcbn1cbi5tc2ctb3V0cm8gLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paciente/chat/chat.page.ts":
/*!********************************************!*\
  !*** ./src/app/paciente/chat/chat.page.ts ***!
  \********************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_mensagem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/mensagem */ "./src/app/models/mensagem.ts");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_models_paciente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let ChatPage = 
/**
 * Tela de Chat para os pacientes conversarem entre si
 * @author Carlos W. Gama
 */
class ChatPage {
    constructor(pacienteService, chatService) {
        this.pacienteService = pacienteService;
        this.chatService = chatService;
        this.paciente = new src_app_models_paciente__WEBPACK_IMPORTED_MODULE_5__["Paciente"];
        //Mensagem enviada 
        this.mensagem = '';
        //Mensagens do chat
        this.mensagens = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.paciente = yield this.pacienteService.getPacienteLogado();
            //Busca as mensagens como Observable
            this.chatService.buscarMensagens(this.paciente.coordenadorUID).onSnapshot((snapshot) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.mensagens = [];
                snapshot.forEach(doc => {
                    this.mensagens.unshift(Object.assign(new src_app_models_mensagem__WEBPACK_IMPORTED_MODULE_2__["Mensagem"], doc.data()));
                });
                yield new Promise(resolve => { setTimeout(resolve, 500); });
                this.content.scrollToBottom(300);
            }));
            //this.mensagem = await;
        });
    }
    /** Envia a mensagem para o Chat */
    enviar() {
        this.chatService.enviar(this.mensagem, this.paciente);
        this.mensagem = '';
    }
};
ChatPage.ctorParameters = () => [
    { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_3__["PacienteService"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], ChatPage.prototype, "content", void 0);
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/paciente/chat/chat.page.html"),
        styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/paciente/chat/chat.page.scss")]
    })
    /**
     * Tela de Chat para os pacientes conversarem entre si
     * @author Carlos W. Gama
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_3__["PacienteService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
], ChatPage);



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

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_mensagem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/mensagem */ "./src/app/models/mensagem.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





let ChatService = class ChatService {
    constructor() {
        this.chatDB = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('chat');
    }
    /**
     * Busca todas as mensagens que fazem parte do grupo de um coordenador
     * @param coordenadorUID
     */
    buscarMensagens(coordenadorUID) {
        return this.chatDB.where('coordenadorUID', '==', coordenadorUID).orderBy('data', 'desc').limit(50);
    }
    /**
     * Envia uma nova mensagem
     * @param mensagem
     * @param remetente
     */
    enviar(mensagem, remetente) {
        let doc = this.chatDB.doc();
        let data = moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD HH:mm:ss");
        console.log(remetente);
        let msg = new _models_mensagem__WEBPACK_IMPORTED_MODULE_3__["Mensagem"](remetente.codigo, mensagem, data, doc.id, remetente.uid, remetente.coordenadorUID);
        console.log(msg);
        doc.set(Object.assign({}, msg));
    }
};
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatService);



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
//# sourceMappingURL=chat-chat-module-es2015.js.map