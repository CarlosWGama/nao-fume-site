(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat-chat-module~conquistas-conquistas-module~coordenador-coordenador-module~coordenador-pac~f5730fc0"],{

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
var Paciente = /** @class */ (function () {
    function Paciente(uid, nome, codigo, mediaCigarros, precoCigarro, coordenadorUID, ultimoDiaRespondido, avatar, cigarrosEvitados, diasSeguidosSemFumar, diasSemFumar, maxDiasSemFumar, dinheiroAcumulado, dinheiroDisponivel, primeiroAcesso, diasPraticoExercicio, excluido, questionariosDiarios) {
        if (mediaCigarros === void 0) { mediaCigarros = 0; }
        if (precoCigarro === void 0) { precoCigarro = 0.1; }
        if (avatar === void 0) { avatar = 1; }
        if (cigarrosEvitados === void 0) { cigarrosEvitados = 0; }
        if (diasSeguidosSemFumar === void 0) { diasSeguidosSemFumar = 0; }
        if (diasSemFumar === void 0) { diasSemFumar = 0; }
        if (maxDiasSemFumar === void 0) { maxDiasSemFumar = 0; }
        if (dinheiroAcumulado === void 0) { dinheiroAcumulado = 0; }
        if (dinheiroDisponivel === void 0) { dinheiroDisponivel = 0; }
        if (primeiroAcesso === void 0) { primeiroAcesso = true; }
        if (diasPraticoExercicio === void 0) { diasPraticoExercicio = 0; }
        if (excluido === void 0) { excluido = false; }
        if (questionariosDiarios === void 0) { questionariosDiarios = []; }
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
    Object.defineProperty(Paciente.prototype, "avatarURL", {
        get: function () {
            return "/assets/imgs/avatars/" + this.avatar + ".jpg";
        },
        enumerable: true,
        configurable: true
    });
    Paciente.ctorParameters = function () { return [
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
    ]; };
    return Paciente;
}());



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
var Questionario = /** @class */ (function () {
    /**
     * @param dia | Dia da consulta (YYYY-MM-DD)
     * @param humor | Como foi o humor do paciente 0 -> Baixo, 1 -> Médio, 2 -> Bom
     * @param fumou | Se fumou naquele dia,
     * @param cigarros | Quantidade de cigarros
     * @param exercitou  | Se praticou exercicio
     * @param vontadeFumar | Vontade de fumar 0 -> Baixa, 1 -> Normal, 2 -> Alta
     */
    function Questionario(dia, humor, fumou, cigarros, exercitou, vontadeFumar) {
        if (cigarros === void 0) { cigarros = 0; }
        this.dia = dia;
        this.humor = humor;
        this.fumou = fumou;
        this.cigarros = cigarros;
        this.exercitou = exercitou;
        this.vontadeFumar = vontadeFumar;
    }
    Questionario.ctorParameters = function () { return [
        { type: String },
        { type: undefined },
        { type: Boolean },
        { type: Number },
        { type: Boolean },
        { type: undefined }
    ]; };
    return Questionario;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var _models_questionario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/questionario */ "./src/app/models/questionario.ts");





var PacienteService = /** @class */ (function () {
    function PacienteService() {
        var _this = this;
        this.paciente = null;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user != null)
                _this.usuarioID = user.uid;
        });
        this.pacienteDB = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('pacientes');
    }
    //============================= BUSCAR COMO COORDENADOR =================================//
    /**
     * Busca todos os pacientes de um Coordenador
     */
    PacienteService.prototype.buscarTodos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.usuarioID);
                return [2 /*return*/, this.pacienteDB.where('coordenadorUID', '==', this.usuarioID).where('excluido', '==', false).orderBy('nome').get().then(function (snapshots) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var pacientes, retorno;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    pacientes = [];
                                    retorno = snapshots.docs.map(function (doc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var paciente;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    paciente = Object.assign(new _models_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"], doc.data());
                                                    return [4 /*yield*/, this.pacienteDB.doc(paciente.uid).collection('questionariosDiarios').get().then(function (snapshot) {
                                                            snapshot.forEach(function (doc) {
                                                                paciente.questionariosDiarios.push(Object.assign(new _models_questionario__WEBPACK_IMPORTED_MODULE_4__["Questionario"], doc.data()));
                                                            });
                                                        })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/, paciente];
                                            }
                                        });
                                    }); });
                                    return [4 /*yield*/, Promise.all(retorno).then(function (dados) { dados.forEach(function (p) { pacientes.push(Object.assign(new _models_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"], p)); }); })];
                                case 1:
                                    _a.sent();
                                    console.log(pacientes);
                                    return [2 /*return*/, pacientes];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Busca o Paciente pelo seu ID unico
     * @param uid
     */
    PacienteService.prototype.buscar = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.pacienteDB
                        .where('coordenadorUID', '==', this.usuarioID)
                        .where('excluido', '==', false)
                        .where('uid', '==', uid)
                        .get().then(function (snapshot) {
                        if (snapshot.empty)
                            return null;
                        return snapshot.docs[0].data();
                    })];
            });
        });
    };
    //============================= BUSCAR COMO PACIENTE =================================//
    /**
     * Recupera os dados do Paciente logado
     */
    PacienteService.prototype.getPacienteLogado = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var doc, dados;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.paciente != null && this.paciente.uid == this.usuarioID)
                            return [2 /*return*/, this.paciente];
                        return [4 /*yield*/, this.pacienteDB.doc(this.usuarioID).get()];
                    case 1:
                        doc = _a.sent();
                        dados = doc.data();
                        return [4 /*yield*/, this.pacienteDB.where('excluido', '==', false)
                                .where('coordenadorUID', '==', dados.coordenadorUID)
                                .orderBy('diasSeguidosSemFumar', 'desc')
                                .get().then(function (snapshat) {
                                var rank = 0;
                                snapshat.forEach(function (doc) {
                                    rank++;
                                    var p = doc.data();
                                    if (p.uid == _this.usuarioID)
                                        dados['rank'] = rank;
                                });
                            })];
                    case 2:
                        _a.sent();
                        this.paciente = Object.assign(new _models_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"], dados);
                        return [4 /*yield*/, this.pacienteDB.doc(this.paciente.uid).collection('questionariosDiarios').get().then(function (snapshot) {
                                snapshot.forEach(function (doc) {
                                    _this.paciente.questionariosDiarios.push(Object.assign(new _models_questionario__WEBPACK_IMPORTED_MODULE_4__["Questionario"], doc.data()));
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.paciente];
                }
            });
        });
    };
    /**
     * Atualiza os dados do paciente
     * @param paciente
     */
    PacienteService.prototype.atualizarPaciente = function (paciente) {
        var dados = Object.assign({}, paciente);
        delete dados.questionariosDiarios;
        this.pacienteDB.doc(paciente.uid).update(dados);
        if (this.paciente.uid == paciente.uid)
            this.paciente = paciente;
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
    return PacienteService;
}());



/***/ })

}]);
//# sourceMappingURL=default~chat-chat-module~conquistas-conquistas-module~coordenador-coordenador-module~coordenador-pac~f5730fc0-es5.js.map