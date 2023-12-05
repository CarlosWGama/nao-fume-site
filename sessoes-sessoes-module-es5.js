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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sessoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessoes.page */ "./src/app/coordenador/sessoes/sessoes.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _sessoes_page__WEBPACK_IMPORTED_MODULE_6__["SessoesPage"]
    }
];
var SessoesPageModule = /** @class */ (function () {
    function SessoesPageModule() {
    }
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
    return SessoesPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sessao.service */ "./src/app/services/sessao.service.ts");
/* harmony import */ var src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/nav-extras.service */ "./src/app/services/nav-extras.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var SessoesPage = /** @class */ (function () {
    function SessoesPage(sessaoService, events, navExtra, router, alertController) {
        this.sessaoService = sessaoService;
        this.events = events;
        this.navExtra = navExtra;
        this.router = router;
        this.alertController = alertController;
        this.sessoes = [];
    }
    SessoesPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.atualizarConteudos();
                this.events.subscribe('sessoes:atualizar', function (atualizar) {
                    if (atualizar)
                        _this.atualizarConteudos();
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Atualiza a lista caso desejado
     * @param event
     */
    SessoesPage.prototype.refresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atualizarConteudos()];
                    case 1:
                        _a.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lista todas as sessões do Coordenador
     */
    SessoesPage.prototype.atualizarConteudos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 200); })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.sessaoService.buscarTodos()];
                    case 2:
                        _a.sessoes = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Abre a visualização de uma sessão
     * @param sessao
     */
    SessoesPage.prototype.visualizar = function (sessao) {
        console.log(sessao);
        this.navExtra.set('sessao', sessao);
        this.router.navigateByUrl('coordenador/sessao');
    };
    /**
     * Abre a visualização de uma sessão
     * @param sessao
     */
    SessoesPage.prototype.editar = function (sessao) {
        this.navExtra.set('sessao', sessao);
        this.router.navigateByUrl('coordenador/sessao-edicao');
    };
    /**
     * Exclui a sessão
     * @param sessao
     */
    SessoesPage.prototype.excluir = function (sessao) {
        var _this = this;
        this.alertController.create({
            header: 'Excluir sessão',
            message: 'Deseja realmente excluir essa sessão?',
            buttons: [
                'Cancelar',
                { text: 'Confirmar', handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.sessaoService.remover(sessao.id)];
                                case 1:
                                    _a.sent();
                                    this.atualizarConteudos();
                                    return [2 /*return*/];
                            }
                        });
                    }); } }
            ]
        }).then(function (a) { return a.present(); });
    };
    SessoesPage.ctorParameters = function () { return [
        { type: src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"] },
        { type: src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    SessoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sessoes',
            template: __webpack_require__(/*! raw-loader!./sessoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessoes/sessoes.page.html"),
            styles: [__webpack_require__(/*! ./sessoes.page.scss */ "./src/app/coordenador/sessoes/sessoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_2__["SessaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"], src_app_services_nav_extras_service__WEBPACK_IMPORTED_MODULE_3__["NavExtrasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], SessoesPage);
    return SessoesPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataBrasilPipe = /** @class */ (function () {
    /**
     * Um Pipe que converte o formato de Y-m-d para d/m/Y
     * @author Carlos W. Gama
     */
    function DataBrasilPipe() {
    }
    DataBrasilPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (args[0] != true)
            return value.split('-').reverse().join('/');
        else {
            var dataHora = value.split(' ');
            return dataHora[0].split('-').reverse().join('/') + ' ' + dataHora[1];
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
    return DataBrasilPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_brasil_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-brasil.pipe */ "./src/app/pipes/data-brasil.pipe.ts");




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_data_brasil_pipe__WEBPACK_IMPORTED_MODULE_3__["DataBrasilPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_data_brasil_pipe__WEBPACK_IMPORTED_MODULE_3__["DataBrasilPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ })

}]);
//# sourceMappingURL=sessoes-sessoes-module-es5.js.map