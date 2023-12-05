(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coordenador-sessao-sessao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessao/sessao.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coordenador/sessao/sessao.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/coordenador/sessoes\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{titulo}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\" color=\"primary\">\r\n      <ion-tab-button tab=\"geral\" (click)=\"alterarTitulo('Geral')\">\r\n        <ion-icon name=\"paper\" size=\"large\"></ion-icon>\r\n        <ion-label>Geral</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"resposta\" (click)=\"alterarTitulo('Resposta')\">\r\n        <ion-icon name=\"thumbs-up\" size=\"large\"></ion-icon>\r\n        <ion-label>Resposta</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/coordenador/sessao/sessao.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/coordenador/sessao/sessao.module.ts ***!
  \*****************************************************/
/*! exports provided: SessaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessaoPageModule", function() { return SessaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sessao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessao.page */ "./src/app/coordenador/sessao/sessao.page.ts");







var routes = [
    {
        path: '',
        component: _sessao_page__WEBPACK_IMPORTED_MODULE_6__["SessaoPage"],
        children: [
            { path: '', redirectTo: 'geral' },
            { path: 'geral', loadChildren: './geral/sessao-geral.module#SessaoGeralPageModule' },
            { path: 'resposta', loadChildren: './respostas/sessao-resposta.module#SessaoRespostaPageModule' },
        ]
    }
];
var SessaoPageModule = /** @class */ (function () {
    function SessaoPageModule() {
    }
    SessaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sessao_page__WEBPACK_IMPORTED_MODULE_6__["SessaoPage"]]
        })
    ], SessaoPageModule);
    return SessaoPageModule;
}());



/***/ }),

/***/ "./src/app/coordenador/sessao/sessao.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/coordenador/sessao/sessao.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb3JkZW5hZG9yL3Nlc3Nhby9zZXNzYW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/coordenador/sessao/sessao.page.ts":
/*!***************************************************!*\
  !*** ./src/app/coordenador/sessao/sessao.page.ts ***!
  \***************************************************/
/*! exports provided: SessaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessaoPage", function() { return SessaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessaoPage = /** @class */ (function () {
    function SessaoPage() {
        this.titulo = 'Geral';
    }
    SessaoPage.prototype.ngOnInit = function () {
    };
    /***
     * Altera o titulo da página principal;
     */
    SessaoPage.prototype.alterarTitulo = function (titulo) {
        this.titulo = titulo;
    };
    SessaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sessao',
            template: __webpack_require__(/*! raw-loader!./sessao.page.html */ "./node_modules/raw-loader/index.js!./src/app/coordenador/sessao/sessao.page.html"),
            styles: [__webpack_require__(/*! ./sessao.page.scss */ "./src/app/coordenador/sessao/sessao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessaoPage);
    return SessaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=coordenador-sessao-sessao-module-es5.js.map