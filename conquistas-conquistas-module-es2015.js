(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conquistas-conquistas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/paciente/conquistas/conquistas.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/paciente/conquistas/conquistas.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title class=\"ion-text-center\">Estatística</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"info-conquista\">\r\n            <ion-img src=\"/assets/imgs/trofel-ouro.png\"></ion-img>\r\n            <ion-text color=\"dark\" class=\"ion-text-center\">\r\n                <h2>Até o momento você alcançou</h2>\r\n                <h1>{{conquistas.length}} conquistas</h1>\r\n            </ion-text>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div id=\"conquistas\">\r\n        \r\n        <ion-text color=\"dark\" class=\"ion-text-center\">\r\n            <h1>Conquistas Alcançadas</h1>\r\n            <p *ngIf=\"conquistas.length == 0\">Nenhuma conquista alcançada até o momento</p>\r\n        </ion-text>\r\n        \r\n        <ion-card *ngFor=\"let conquista of conquistas\">\r\n            <ion-card-header>\r\n                <ion-card-subtitle></ion-card-subtitle>\r\n                <ion-card-title class=\"ion-text-center\">{{conquista.titulo}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <ion-img src=\"/assets/imgs/conquistas/{{conquista.imagem}}\"></ion-img>\r\n                <p class=\"ion-text-center\">{{conquista.descricao}}</p>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n\r\n    <div id=\"conquistas-nao-alcancadas\" *ngIf=\"conquistasNaoAlcandas.length != 0\">\r\n\r\n        <ion-text color=\"dark\" class=\"ion-text-center\">\r\n            <h1>Próximas Conquistas</h1>\r\n        </ion-text>\r\n\r\n        <ion-card *ngFor=\"let conquista of conquistasNaoAlcandas\">\r\n            <ion-card-header>\r\n                <ion-card-subtitle></ion-card-subtitle>\r\n                <ion-card-title class=\"ion-text-center\">{{conquista.titulo}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <ion-img src=\"/assets/imgs/conquistas/{{conquista.imagem}}\"></ion-img>\r\n                <ion-text class=\"ion-text-center\" color=\"light\" >\r\n                    <p>{{conquista.descricao}}</p>\r\n                </ion-text>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paciente/conquistas/conquistas.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/paciente/conquistas/conquistas.module.ts ***!
  \**********************************************************/
/*! exports provided: ConquistasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquistasPageModule", function() { return ConquistasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conquistas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conquistas.page */ "./src/app/paciente/conquistas/conquistas.page.ts");







const routes = [
    {
        path: '',
        component: _conquistas_page__WEBPACK_IMPORTED_MODULE_6__["ConquistasPage"]
    }
];
let ConquistasPageModule = class ConquistasPageModule {
};
ConquistasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_conquistas_page__WEBPACK_IMPORTED_MODULE_6__["ConquistasPage"]]
    })
], ConquistasPageModule);



/***/ }),

/***/ "./src/app/paciente/conquistas/conquistas.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/paciente/conquistas/conquistas.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  --background:white;\n}\n\n.info-conquista {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.info-conquista ion-img {\n  width: 100px;\n}\n\n#conquistas {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n#conquistas ion-card {\n  --background: white;\n  max-width: 40%;\n}\n\n#conquistas ion-card ion-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#conquistas ion-card ion-card-content ion-img {\n  width: 80px;\n}\n\n#conquistas-nao-alcancadas {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n#conquistas-nao-alcancadas ion-card {\n  --background: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);\n  max-width: 40%;\n}\n\n#conquistas-nao-alcancadas ion-card ion-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#conquistas-nao-alcancadas ion-card ion-card-content ion-img {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFjaWVudGUvY29ucXVpc3Rhcy9DOlxceGFtcHBcXGh0ZG9jc1xcbmFvLWZ1bWUtL3NyY1xcYXBwXFxwYWNpZW50ZVxcY29ucXVpc3Rhc1xcY29ucXVpc3Rhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhY2llbnRlL2NvbnF1aXN0YXMvY29ucXVpc3Rhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7QUNDUjs7QURHQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURFSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FaOztBREVZO0VBQ0ksV0FBQTtBQ0FoQjs7QURRQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNMSjs7QURPSTtFQUNJLDhEQUFBO0VBQ0EsY0FBQTtBQ0xSOztBRE9RO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0xaOztBRE9ZO0VBQ0ksV0FBQTtBQ0xoQiIsImZpbGUiOiJzcmMvYXBwL3BhY2llbnRlL2NvbnF1aXN0YXMvY29ucXVpc3Rhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6d2hpdGU7XHJcbn1cclxuXHJcbi5pbmZvLWNvbnF1aXN0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjb25xdWlzdGFzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiNjb25xdWlzdGFzLW5hby1hbGNhbmNhZGFzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjOGJhYWFhIDAlLCAjYWU4YjljIDEwMCUpO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xyXG5cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbn1cblxuLmluZm8tY29ucXVpc3RhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5mby1jb25xdWlzdGEgaW9uLWltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuI2NvbnF1aXN0YXMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI2NvbnF1aXN0YXMgaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbiNjb25xdWlzdGFzIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NvbnF1aXN0YXMgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbiNjb25xdWlzdGFzLW5hby1hbGNhbmNhZGFzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiNjb25xdWlzdGFzLW5hby1hbGNhbmNhZGFzIGlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM4YmFhYWEgMCUsICNhZThiOWMgMTAwJSk7XG4gIG1heC13aWR0aDogNDAlO1xufVxuI2NvbnF1aXN0YXMtbmFvLWFsY2FuY2FkYXMgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY29ucXVpc3Rhcy1uYW8tYWxjYW5jYWRhcyBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pbWcge1xuICB3aWR0aDogODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paciente/conquistas/conquistas.page.ts":
/*!********************************************************!*\
  !*** ./src/app/paciente/conquistas/conquistas.page.ts ***!
  \********************************************************/
/*! exports provided: ConquistasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquistasPage", function() { return ConquistasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var src_app_services_conquista_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/conquista.service */ "./src/app/services/conquista.service.ts");




let ConquistasPage = 
/** Tela responsável para o paciente acompanhar as conquistas alcançadas */
class ConquistasPage {
    constructor(pacienteService, conquistaService) {
        this.pacienteService = pacienteService;
        this.conquistaService = conquistaService;
        /** Lista de consquitas alcançadas */
        this.conquistas = [];
        /** Lista de consquitas pendentes */
        this.conquistasNaoAlcandas = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let paciente = yield this.pacienteService.getPacienteLogado();
            this.conquistas = yield this.conquistaService.buscarConsquistasAlcancadas(paciente);
            this.conquistasNaoAlcandas = yield this.conquistaService.buscarConsquistasPendentes(paciente);
        });
    }
};
ConquistasPage.ctorParameters = () => [
    { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"] },
    { type: src_app_services_conquista_service__WEBPACK_IMPORTED_MODULE_3__["ConquistaService"] }
];
ConquistasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conquistas',
        template: __webpack_require__(/*! raw-loader!./conquistas.page.html */ "./node_modules/raw-loader/index.js!./src/app/paciente/conquistas/conquistas.page.html"),
        styles: [__webpack_require__(/*! ./conquistas.page.scss */ "./src/app/paciente/conquistas/conquistas.page.scss")]
    })
    /** Tela responsável para o paciente acompanhar as conquistas alcançadas */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"], src_app_services_conquista_service__WEBPACK_IMPORTED_MODULE_3__["ConquistaService"]])
], ConquistasPage);



/***/ })

}]);
//# sourceMappingURL=conquistas-conquistas-module-es2015.js.map