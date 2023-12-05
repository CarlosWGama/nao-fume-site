(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~coordenador-sessao-edicao-sessao-edicao-module~financeiro-financeiro-module~geral-sessao-ger~96d9306f"],{

/***/ "./src/app/models/sessao.ts":
/*!**********************************!*\
  !*** ./src/app/models/sessao.ts ***!
  \**********************************/
/*! exports provided: Sessao, DadosPacientesSessao, SituacaoSessao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sessao", function() { return Sessao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosPacientesSessao", function() { return DadosPacientesSessao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituacaoSessao", function() { return SituacaoSessao; });
/**
 * Armazena os dados da sessão
 */
var Sessao = /** @class */ (function () {
    /**
     *
     * @param id
     * @param data
     * @param disponivel | Se a sessão já está disponivel para o pessoal resposnder
     * @param dadosPacientes
     */
    function Sessao(id, data, coordenadorUID, disponivel, dadosPacientes, excluido) {
        if (disponivel === void 0) { disponivel = false; }
        if (dadosPacientes === void 0) { dadosPacientes = []; }
        if (excluido === void 0) { excluido = false; }
        this.id = id;
        this.data = data;
        this.coordenadorUID = coordenadorUID;
        this.disponivel = disponivel;
        this.dadosPacientes = dadosPacientes;
        this.excluido = excluido;
    }
    /**
     * Checa se o paciente esteve presente
     */
    Sessao.prototype.presente = function (pacienteID) {
        var presente = false;
        this.dadosPacientes.forEach(function (p) {
            if (p.pacienteUID = pacienteID) {
                presente = p.presente;
                return;
            }
        });
        return presente;
    };
    Object.defineProperty(Sessao.prototype, "totalPacientes", {
        get: function () {
            return this.dadosPacientes.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sessao.prototype, "totalPresentes", {
        get: function () {
            return this.dadosPacientes.reduce(function (acumulador, p) {
                if (p.presente)
                    acumulador++;
                return acumulador;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Sessao.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Array },
        { type: Boolean }
    ]; };
    return Sessao;
}());

/**
 *
 */
var DadosPacientesSessao = /** @class */ (function () {
    function DadosPacientesSessao(pacienteUID, presente, nome, situacao, opiniao) {
        if (presente === void 0) { presente = false; }
        if (nome === void 0) { nome = null; }
        if (situacao === void 0) { situacao = null; }
        if (opiniao === void 0) { opiniao = null; }
        this.pacienteUID = pacienteUID;
        this.presente = presente;
        this.nome = nome;
        this.situacao = situacao;
        this.opiniao = opiniao;
    }
    DadosPacientesSessao.ctorParameters = function () { return [
        { type: String },
        { type: Boolean },
        { type: String },
        { type: undefined },
        { type: String }
    ]; };
    return DadosPacientesSessao;
}());

/**
 * ENUM da Situação do Paciente
 */
var SituacaoSessao;
(function (SituacaoSessao) {
    SituacaoSessao[SituacaoSessao["ABSTINENTE"] = 1] = "ABSTINENTE";
    SituacaoSessao[SituacaoSessao["FUMANDO"] = 2] = "FUMANDO";
    SituacaoSessao[SituacaoSessao["MANUTENCAO"] = 3] = "MANUTENCAO";
})(SituacaoSessao || (SituacaoSessao = {}));


/***/ }),

/***/ "./src/app/services/sessao.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/sessao.service.ts ***!
  \********************************************/
/*! exports provided: SessaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessaoService", function() { return SessaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sessao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/sessao */ "./src/app/models/sessao.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SessaoService = /** @class */ (function () {
    function SessaoService(events) {
        var _this = this;
        this.events = events;
        this.sessaoDB = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('sessoes');
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
            _this.usuario = user;
            if (_this.usuario != null)
                _this.pacienteDB = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('pacientes').where('coordenadorUID', '==', _this.usuario.uid).where('excluido', '==', false);
        });
    }
    // ======================================== COORDENADOR =======================================/
    /**
     * Busca todas as sessões do coordenador
     * Checa se o usuário qeu está solicitando é coordenador
     */
    SessaoService.prototype.buscarTodos = function (coordenadorUID) {
        if (coordenadorUID === void 0) { coordenadorUID = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!coordenadorUID)
                    coordenadorUID = this.usuario.uid;
                return [2 /*return*/, this.sessaoDB
                        .where('excluido', '==', false)
                        .where('coordenadorUID', '==', coordenadorUID)
                        .orderBy('data', 'asc')
                        .get().then(function (sessoesSnapshot) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var sessoes, resultSessoes;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    sessoes = [];
                                    resultSessoes = sessoesSnapshot.docs.map(function (sessaoDOC) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var dadosSessao;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    dadosSessao = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["Sessao"], sessaoDOC.data());
                                                    //Busca Pacientes das sessões
                                                    return [4 /*yield*/, this.sessaoDB.doc(dadosSessao.id).collection('pacientes').get().then(function (pacientesSnapshot) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                            var _a;
                                                            var _this = this;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                                switch (_b.label) {
                                                                    case 0:
                                                                        _a = dadosSessao;
                                                                        return [4 /*yield*/, Promise.all(pacientesSnapshot.docs.map(function (pacienteDOC) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                var dadosPaciente, _a;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                                                    switch (_b.label) {
                                                                                        case 0:
                                                                                            dadosPaciente = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"], pacienteDOC.data());
                                                                                            _a = dadosPaciente;
                                                                                            return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('pacientes').doc(dadosPaciente.pacienteUID).get()];
                                                                                        case 1:
                                                                                            _a.nome = (_b.sent()).data()['nome'];
                                                                                            return [2 /*return*/, dadosPaciente];
                                                                                    }
                                                                                });
                                                                            }); }))];
                                                                    case 1:
                                                                        _a.dadosPacientes = _b.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); })];
                                                case 1:
                                                    //Busca Pacientes das sessões
                                                    _a.sent();
                                                    return [2 /*return*/, dadosSessao];
                                            }
                                        });
                                    }); });
                                    return [4 /*yield*/, Promise.all(resultSessoes)];
                                case 1:
                                    sessoes = _a.sent();
                                    return [2 /*return*/, sessoes];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Cadastra uma nova seção
     */
    SessaoService.prototype.cadastrar = function (sessao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var doc, snapshot;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        doc = this.sessaoDB.doc();
                        //Cadastra a Sessão
                        sessao.coordenadorUID = this.usuario.uid;
                        delete sessao.dadosPacientes;
                        sessao.id = doc.id;
                        return [4 /*yield*/, doc.set(Object.assign({}, sessao))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.pacienteDB.get()];
                    case 2:
                        snapshot = _a.sent();
                        snapshot.forEach(function (pacienteDOC) {
                            var dados = pacienteDOC.data();
                            var pacienteDados = new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"](pacienteDOC.id, false, dados.nome);
                            _this.sessaoDB.doc(sessao.id).collection('pacientes').doc(pacienteDOC.id).set(Object.assign({}, pacienteDados));
                        });
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Atualiza uma sessão existente
     */
    SessaoService.prototype.atualizar = function (sessao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //Atualiza a sessão
                    return [4 /*yield*/, this.sessaoDB.doc(sessao.id).update({
                            data: sessao.data,
                            disponivel: sessao.disponivel
                        })
                        //Atualiza os pacientes
                    ];
                    case 1:
                        //Atualiza a sessão
                        _a.sent();
                        //Atualiza os pacientes
                        sessao.dadosPacientes.forEach(function (dado) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(dado);
                                        return [4 /*yield*/, this.sessaoDB.doc(sessao.id).collection('pacientes').doc(dado.pacienteUID).update({
                                                presente: dado.presente,
                                                situacao: (dado.situacao != undefined ? dado.situacao : null),
                                                opiniao: dado.opiniao
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
    * Remove a sessão do sistema
    */
    SessaoService.prototype.remover = function (sessaoID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //Atualiza a sessão
                    return [4 /*yield*/, this.sessaoDB.doc(sessaoID).update({
                            excluido: true
                        })];
                    case 1:
                        //Atualiza a sessão
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    // =========================== PACIENTE ============================================//
    SessaoService.prototype.buscarSessoes = function (paciente) {
        var _this = this;
        return this.sessaoDB
            .where('excluido', '==', false)
            .where('coordenadorUID', '==', paciente.coordenadorUID)
            .orderBy('data', 'asc')
            .get().then(function (sessoesSnapshot) {
            var sessoes = [];
            sessoesSnapshot.forEach(function (doc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var dadosSessao;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dadosSessao = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["Sessao"], doc.data());
                            return [4 /*yield*/, this.sessaoDB.doc(dadosSessao.id).collection('pacientes').doc(paciente.uid).get().then(function (sessaodoc) {
                                    var dadosPaciente = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"], sessaodoc.data());
                                    dadosSessao.dadosPacientes.push(dadosPaciente);
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                        case 2:
                            _a.sent();
                            sessoes.push(dadosSessao);
                            return [2 /*return*/];
                    }
                });
            }); });
            return sessoes;
        });
    };
    /**
     * Paciente responde sobre a sessão
     * @param sessaoID
     * @param comentario
     */
    SessaoService.prototype.responder = function (sessaoID, comentario) {
        this.sessaoDB.doc(sessaoID).collection('pacientes').doc(this.usuario.uid).update({
            opiniao: comentario
        });
    };
    /**
     * Retorna as sessões que o paciente deve responder
     */
    SessaoService.prototype.buscarSessoesResponder = function (paciente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sessoes, snapshots, buscaSessoes, retorno;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sessoes = [];
                        return [4 /*yield*/, this.sessaoDB.where('coordenadorUID', '==', paciente.coordenadorUID)
                                .where('excluido', '==', false)
                                .where('disponivel', '==', true).get()];
                    case 1:
                        snapshots = _a.sent();
                        buscaSessoes = snapshots.docs.map(function (snapshot) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var sessao, doc, dados, pacienteDOC, dadosPaciente, _a;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        sessao = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["Sessao"](), snapshot.data());
                                        return [4 /*yield*/, this.sessaoDB.doc(sessao.id).collection('pacientes').doc(paciente.uid).get()];
                                    case 1:
                                        doc = _b.sent();
                                        dados = doc.data();
                                        if (dados == null)
                                            return [2 /*return*/, null];
                                        if (!(dados.opiniao == null)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.sessaoDB.doc(sessao.id).collection('pacientes').doc(paciente.uid).get()];
                                    case 2:
                                        pacienteDOC = _b.sent();
                                        dadosPaciente = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"], pacienteDOC.data());
                                        _a = dadosPaciente;
                                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('pacientes').doc(dadosPaciente.pacienteUID).get()];
                                    case 3:
                                        _a.nome = (_b.sent()).data()['nome'];
                                        sessao.dadosPacientes.push(dadosPaciente);
                                        _b.label = 4;
                                    case 4: return [2 /*return*/, (dados.opiniao == null ? sessao : null)];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(buscaSessoes)];
                    case 2:
                        retorno = _a.sent();
                        //Salva na constante apenas as sessões encontradas
                        retorno.forEach(function (s) { if (s != null)
                            sessoes.push(s); });
                        return [2 /*return*/, sessoes];
                }
            });
        });
    };
    SessaoService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
    ]; };
    SessaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], SessaoService);
    return SessaoService;
}());



/***/ })

}]);
//# sourceMappingURL=default~coordenador-sessao-edicao-sessao-edicao-module~financeiro-financeiro-module~geral-sessao-ger~96d9306f-es5.js.map