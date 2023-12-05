(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~conquistas-conquistas-module~financeiro-financeiro-module~paciente-paciente-module~perfil-pe~50a4f5f4"],{

/***/ "./src/app/models/conquista.ts":
/*!*************************************!*\
  !*** ./src/app/models/conquista.ts ***!
  \*************************************/
/*! exports provided: Conquista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conquista", function() { return Conquista; });
/**
 * Estrutura das Conquistas dos usuários
 * @author Carlos W. Gama
 * @version 1.0.0
 */
var Conquista = /** @class */ (function () {
    function Conquista(codigo, titulo, descricao, imagem) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
    }
    Conquista.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Conquista;
}());



/***/ }),

/***/ "./src/app/services/conquista.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/conquista.service.ts ***!
  \***********************************************/
/*! exports provided: ConquistaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquistaService", function() { return ConquistaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_conquista__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/conquista */ "./src/app/models/conquista.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var ConquistaService = /** @class */ (function () {
    function ConquistaService() {
        /** Lista de consquitas alcançadas */
        this.CONQUISTAS = [
            //Total de Dias sem fumar
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('sf1', '1 dia sem fumar', 'Parabéns! Você conseguiu ficar seu primeiro dia sem fumar', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('sf2', '10 dia sem fumar', 'Você alcançou 10 dias sem fumar', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('sf3', '15 dia sem fumar', 'Você alcançou 15 dias sem fumar', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('sf4', '30 dia sem fumar', 'Você alcançou 30 dias sem fumar', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('sf5', '50 dia sem fumar', 'Você alcançou 50 dias sem fumar', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('sf6', '100 dia sem fumar', 'Você alcançou 100 dias sem fumar', 'no-smoking.png'),
            //Dias seguidos sem fumar   
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf1', '3 dias seguidos', 'Você conseguiu ficar 3 dias seguidos sem fumar!', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf2', '5 dias sem fumar', 'Uau! Você alcançou 5 dias seguidos sem fumar', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf3', 'uma semana sem fumar', 'Você conseguiu ficar uma semana sem fumar!', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf4', 'duas semanas sem fumar', 'Sua segunda semana sem fumar!', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf5', 'Completou um mês!', 'Você conseguiu ficar uma semana sem fumar!', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf6', '2 meses sem fumar!', 'Parabéns já são 2 meses sem fumar!', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf7', '3 meses sem fumar!!', 'Chegou a 3 meses sem fumar', 'no-smoking.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('ssf8', '6 meses sem fumar!!', 'Conseguiu completar 6 meses sem fumar!', 'no-smoking.png'),
            //Exercicio
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('exe1', 'Exercitou', 'Você realizou seu primeiro exercício!', 'exercise.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('exe2', '5 dias', 'Você completou 5 dias de exercício, continue assim', 'exercise.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('exe3', '15 dias de exercício', '15 dias práticando!!', 'exercise.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('exe4', '30 dias', 'Mantenha seu ritmo!', 'exercise.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('exe5', '60 dias', 'Você alcançou uma ótima marca', 'exercise.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('exe6', '90 dias', 'Parabéns! Mas não pare por aqui!', 'exercise.png'),
            //Financeiro
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('fin1', 'Economizando', 'Você começou a economizar seus primeiros reias', 'money.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('fin2', '50 reais!', 'Você já conseguiu juntar 50 reais!', 'money.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('fin3', '100 reais!', 'Seus primeiros 100 reais!', 'money.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('fin4', '250 reais!', 'Sabe aquele presente que você queria? Voce já pode se dar', 'money.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('fin5', '500 reais!', 'Já é possível realizar uma pequena viagem!', 'money.png'),
            new _models_conquista__WEBPACK_IMPORTED_MODULE_2__["Conquista"]('fin6', '1000 reais!', 'Nossa R$ 1000, você já pode fazer muita coisa', 'money.png'),
        ];
        this.pacienteDB = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('pacientes');
    }
    /**
     * Lista as conquistas ja alcançadas pelo usuário
     * @param paciente
     */
    ConquistaService.prototype.buscarConsquistasAlcancadas = function (paciente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var conquistasID, alcançadas;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConquistas(paciente.uid)];
                    case 1:
                        conquistasID = _a.sent();
                        alcançadas = [];
                        this.CONQUISTAS.forEach(function (c) { if (conquistasID.includes(c.codigo))
                            alcançadas.push(c); });
                        return [2 /*return*/, alcançadas];
                }
            });
        });
    };
    /**
     * Lista as conquistas ja alcançadas pelo usuário
     * @param paciente
     */
    ConquistaService.prototype.buscarConsquistasPendentes = function (paciente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var conquistasID, pendentes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConquistas(paciente.uid)];
                    case 1:
                        conquistasID = _a.sent();
                        pendentes = [];
                        this.CONQUISTAS.forEach(function (c) { if (!conquistasID.includes(c.codigo))
                            pendentes.push(c); });
                        return [2 /*return*/, pendentes];
                }
            });
        });
    };
    /**
     * Retorna o código das conquistas já alcançadas pelo usuário
     * @param pacienteID
     */
    ConquistaService.prototype.getConquistas = function (pacienteID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var snapConquistas, conquistasID;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pacienteDB.doc(pacienteID).collection('conquistas').get()];
                    case 1:
                        snapConquistas = _a.sent();
                        conquistasID = [];
                        snapConquistas.forEach(function (doc) { conquistasID.push(doc.id); });
                        return [2 /*return*/, conquistasID];
                }
            });
        });
    };
    /**
     * Recebe o paciente para liberar as conquistas
     * @param paciente
     */
    ConquistaService.prototype.liberarConquistas = function (paciente) {
        var _this = this;
        var salvar = [];
        salvar = salvar.concat(this.conquistaDiasSemFumar(paciente));
        salvar = salvar.concat(this.conquistaDiasSeguidosSemFumar(paciente));
        salvar = salvar.concat(this.conquistaExercicio(paciente));
        salvar = salvar.concat(this.conquistaFinanceira(paciente));
        salvar.forEach(function (conquistaID) {
            _this.pacienteDB.doc(paciente.uid).collection('conquistas').doc(conquistaID).set({ conquistado: true });
        });
    };
    /**
     * Libera as conquistas de sias sem fumar (mesmo não seguidos)
     * @param paciente
     */
    ConquistaService.prototype.conquistaDiasSemFumar = function (paciente) {
        var salvar = [];
        if (paciente.diasSemFumar >= 1)
            salvar.push('sf1');
        if (paciente.diasSemFumar >= 10)
            salvar.push('sf2');
        if (paciente.diasSemFumar >= 15)
            salvar.push('sf3');
        if (paciente.diasSemFumar >= 30)
            salvar.push('sf4');
        if (paciente.diasSemFumar >= 50)
            salvar.push('sf5');
        if (paciente.diasSemFumar >= 100)
            salvar.push('sf6');
        return salvar;
    };
    /**
     * Libera Conquistas de Dias Seguidos Sem Fumar
     * @param paciente
     */
    ConquistaService.prototype.conquistaDiasSeguidosSemFumar = function (paciente) {
        var salvar = [];
        if (paciente.diasSeguidosSemFumar >= 3)
            salvar.push('ssf1');
        if (paciente.diasSeguidosSemFumar >= 5)
            salvar.push('ssf2');
        if (paciente.diasSeguidosSemFumar >= 7)
            salvar.push('ssf3');
        if (paciente.diasSeguidosSemFumar >= 14)
            salvar.push('ssf4');
        if (paciente.diasSeguidosSemFumar >= 30)
            salvar.push('ssf5');
        if (paciente.diasSeguidosSemFumar >= 60)
            salvar.push('ssf6');
        if (paciente.diasSeguidosSemFumar >= 90)
            salvar.push('ssf7');
        if (paciente.diasSeguidosSemFumar >= 183)
            salvar.push('ssf8');
        return salvar;
    };
    /**
     * Libera Conquistas de Dias Seguidos Sem Fumar
     * @param paciente
     */
    ConquistaService.prototype.conquistaExercicio = function (paciente) {
        var salvar = [];
        if (paciente.diasPraticoExercicio >= 1)
            salvar.push('exe1');
        if (paciente.diasPraticoExercicio >= 5)
            salvar.push('exe2');
        if (paciente.diasPraticoExercicio >= 15)
            salvar.push('exe3');
        if (paciente.diasPraticoExercicio >= 30)
            salvar.push('exe4');
        if (paciente.diasPraticoExercicio >= 60)
            salvar.push('exe5');
        if (paciente.diasPraticoExercicio >= 90)
            salvar.push('exe6');
        return salvar;
    };
    /**
     * Libera Conquistas Financeiras
     * @param paciente
     */
    ConquistaService.prototype.conquistaFinanceira = function (paciente) {
        var salvar = [];
        if (paciente.dinheiroAcumulado >= 1)
            salvar.push('fin1');
        if (paciente.dinheiroAcumulado >= 50)
            salvar.push('fin2');
        if (paciente.dinheiroAcumulado >= 100)
            salvar.push('fin3');
        if (paciente.dinheiroAcumulado >= 250)
            salvar.push('fin4');
        if (paciente.dinheiroAcumulado >= 500)
            salvar.push('fin5');
        if (paciente.dinheiroAcumulado >= 1000)
            salvar.push('fin6');
        return salvar;
    };
    ConquistaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Controla o acesso a conquista dos pacientes
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConquistaService);
    return ConquistaService;
}());



/***/ })

}]);
//# sourceMappingURL=default~conquistas-conquistas-module~financeiro-financeiro-module~paciente-paciente-module~perfil-pe~50a4f5f4-es5.js.map