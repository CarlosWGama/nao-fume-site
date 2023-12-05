(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sessoes-sessoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessoes/sessoes.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/sessoes/sessoes.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <!-- BOTÃO ADICIONAR PACIENTE -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/coordenador/sessao-edicao\">\r\n    <ion-fab-button color=\"danger\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n      <ion-refresher-content\r\n        pullingIcon=\"arrow-dropdown\"\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\"\r\n        refreshingText=\"Atualizando...\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n    <!-- LISTA SESSÕES -->\r\n    <ion-card class=\"card\"  *ngFor=\"let s of sessoes; let i = index\" >\r\n\r\n      <ion-grid (click)=\"visualizar(s)\">\r\n        <ion-row>\r\n\r\n          <ion-col size=\"2\"  class=\"ion-align-self-center\">\r\n            <ion-text class=\"ion-text-center\" color=\"light\">\r\n              <p>Sessão</p>\r\n              <h1>{{i+1}}</h1>\r\n            </ion-text>\r\n          </ion-col>\r\n          \r\n          <ion-col size=\"10\">\r\n            <ion-card-content>\r\n              \r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col size=\"6\" class=\"ion-align-self-center\">\r\n                    <p class=\"pacientes\">Pacientes</p>\r\n                    <p class=\"pacientes-qt\">{{s.totalPresentes}}/{{s.totalPacientes}}</p>\r\n                  </ion-col>\r\n                  \r\n                  <ion-col size=\"6\" class=\"ion-align-self-center\">\r\n                    <h2 class=\"sessao-data\">{{s.data|dataBrasil}}</h2>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n\r\n\r\n            </ion-card-content>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n      <div class=\"btn-cards\">\r\n          <ion-button (click)=\"editar(s)\" fill=\"outline\" expand=\"full\" color=\"light\">\r\n            <ion-icon slot=\"start\" name=\"paper\"></ion-icon>\r\n            Editar\r\n          </ion-button>\r\n        \r\n        <ion-button (click)=\"excluir(s)\" fill=\"outline\" expand=\"full\" color=\"light\">\r\n            <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\r\n\r\n            Excluir\r\n        </ion-button>\r\n      </div>\r\n      \r\n      </ion-card>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/sessoes/sessoes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/coordenador/sessoes/sessoes.module.ts ***!
  \*******************************************************/
/*! exports provided: SessoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessoesPageModule", function() { return SessoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sessoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessoes.page */ "./src/app/coordenador/sessoes/sessoes.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _sessoes_page__WEBPACK_IMPORTED_MODULE_6__["SessoesPage"]
    }
];
let SessoesPageModule = class SessoesPageModule {
};
SessoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sessoes_page__WEBPACK_IMPORTED_MODULE_6__["SessoesPage"]]
    })
], SessoesPageModule);



/***/ }),

/***/ "./src/app/coordenador/sessoes/sessoes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/coordenador/sessoes/sessoes.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  --background: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);\n  --color: white;\n}\n\n.sessao-data {\n  font-size: 20px;\n  text-align: right;\n}\n\n.pacientes {\n  font-size: 18px;\n  text-align: center;\n}\n\n.pacientes-qt {\n  font-size: 25px;\n  text-align: center;\n  font-weight: bolder;\n}\n\n.btn-cards {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  margin-top: -25px;\n}\n\n.btn-cards ion-button {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vcmRlbmFkb3Ivc2Vzc29lcy9DOlxceGFtcHBcXGh0ZG9jc1xcbmFvLWZ1bWUtL3NyY1xcYXBwXFxjb29yZGVuYWRvclxcc2Vzc29lc1xcc2Vzc29lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Nvb3JkZW5hZG9yL3Nlc3NvZXMvc2Vzc29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2RUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb29yZGVuYWRvci9zZXNzb2VzL3Nlc3NvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yMjVkZWcsICMzRDRFODEgMCUsICM1NzUzQzkgNDglLCAjNkU3RkYzIDEwMCUpO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZXNzYW8tZGF0YSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnBhY2llbnRlcyB7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhY2llbnRlcy1xdCB7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5idG4tY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6MVxyXG4gICAgfVxyXG59IiwiLmNhcmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjM0Q0RTgxIDAlLCAjNTc1M0M5IDQ4JSwgIzZFN0ZGMyAxMDAlKTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5zZXNzYW8tZGF0YSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wYWNpZW50ZXMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhY2llbnRlcy1xdCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYnRuLWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuLmJ0bi1jYXJkcyBpb24tYnV0dG9uIHtcbiAgZmxleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coordenador/sessoes/sessoes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/coordenador/sessoes/sessoes.page.ts ***!
  \*****************************************************/
/*! exports provided: SessoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessoesPage", function() { return SessoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sessao.service */ "./src/app/services/sessao.service.ts");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let SessoesPage = class SessoesPage {
    constructor(sessaoService, events, navExtra, router, alertController) {
        this.sessaoService = sessaoService;
        this.events = events;
        this.navExtra = navExtra;
        this.router = router;
        this.alertController = alertController;
        this.sessoes = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.atualizarConteudos();
            this.events.subscribe('sessoes:atualizar', (atualizar) => {
                if (atualizar)
                    this.atualizarConteudos();
            });
        });
    }
    /**
     * Atualiza a lista caso desejado
     * @param event
     */
    refresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.atualizarConteudos();
            event.target.complete();
        });
    }
    /**
     * Lista todas as sessões do Coordenador
     */
    atualizarConteudos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield new Promise((resolve) => setTimeout(() => resolve(), 200));
            this.sessoes = yield this.sessaoService.buscarTodos();
        });
    }
    /**
     * Abre a visualização de uma sessão
     * @param sessao
     */
    visualizar(sessao) {
        console.log(sessao);
        this.navExtra.set('sessao', sessao);
        this.router.navigateByUrl('coordenador/sessao');
    }
    /**
     * Abre a visualização de uma sessão
     * @param sessao
     */
    editar(sessao) {
        this.navExtra.set('sessao', sessao);
        this.router.navigateByUrl('coordenador/sessao-edicao');
    }
    /**
     * Exclui a sessão
     * @param sessao
     */
    excluir(sessao) {
        this.alertController.create({
            header: 'Excluir sessão',
            message: 'Deseja realmente excluir essa sessão?',
            buttons: [
                'Cancelar',
                { text: 'Confirmar', handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.sessaoService.remover(sessao.id);
                        this.atualizarConteudos();
                    }) }
            ]
        }).then(a => a.present());
    }
};
SessoesPage.ctorParameters = () => [
    { type: src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"] },
    { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
SessoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sessoes',
        template: __webpack_require__(/*! raw-loader!./sessoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessoes/sessoes.page.html"),
        styles: [__webpack_require__(/*! ./sessoes.page.scss */ "./src/app/coordenador/sessoes/sessoes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"], src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], SessoesPage);



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



/***/ })

}]);
//# sourceMappingURL=sessoes-sessoes-module-es2015.js.map