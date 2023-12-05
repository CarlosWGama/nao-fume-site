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
class Sessao {
    /**
     *
     * @param id
     * @param data
     * @param disponivel | Se a sessão já está disponivel para o pessoal resposnder
     * @param dadosPacientes
     */
    constructor(id, data, coordenadorUID, disponivel = false, dadosPacientes = [], excluido = false) {
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
    presente(pacienteID) {
        let presente = false;
        this.dadosPacientes.forEach(p => {
            if (p.pacienteUID = pacienteID) {
                presente = p.presente;
                return;
            }
        });
        return presente;
    }
    get totalPacientes() {
        return this.dadosPacientes.length;
    }
    get totalPresentes() {
        return this.dadosPacientes.reduce((acumulador, p) => {
            if (p.presente)
                acumulador++;
            return acumulador;
        }, 0);
    }
}
Sessao.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Boolean },
    { type: Array },
    { type: Boolean }
];
/**
 *
 */
class DadosPacientesSessao {
    constructor(pacienteUID, presente = false, nome = null, situacao = null, opiniao = null) {
        this.pacienteUID = pacienteUID;
        this.presente = presente;
        this.nome = nome;
        this.situacao = situacao;
        this.opiniao = opiniao;
    }
}
DadosPacientesSessao.ctorParameters = () => [
    { type: String },
    { type: Boolean },
    { type: String },
    { type: undefined },
    { type: String }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_sessao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/sessao */ "./src/app/models/sessao.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let SessaoService = class SessaoService {
    constructor(events) {
        this.events = events;
        this.sessaoDB = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('sessoes');
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(user => {
            this.usuario = user;
            if (this.usuario != null)
                this.pacienteDB = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('pacientes').where('coordenadorUID', '==', this.usuario.uid).where('excluido', '==', false);
        });
    }
    // ======================================== COORDENADOR =======================================/
    /**
     * Busca todas as sessões do coordenador
     * Checa se o usuário qeu está solicitando é coordenador
     */
    buscarTodos(coordenadorUID = null) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!coordenadorUID)
                coordenadorUID = this.usuario.uid;
            return this.sessaoDB
                .where('excluido', '==', false)
                .where('coordenadorUID', '==', coordenadorUID)
                .orderBy('data', 'asc')
                .get().then((sessoesSnapshot) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let sessoes = [];
                //busca sessões  
                const resultSessoes = sessoesSnapshot.docs.map((sessaoDOC) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let dadosSessao = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["Sessao"], sessaoDOC.data());
                    //Busca Pacientes das sessões
                    yield this.sessaoDB.doc(dadosSessao.id).collection('pacientes').get().then((pacientesSnapshot) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        dadosSessao.dadosPacientes = yield Promise.all(pacientesSnapshot.docs.map((pacienteDOC) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            let dadosPaciente = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"], pacienteDOC.data());
                            dadosPaciente.nome = (yield firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('pacientes').doc(dadosPaciente.pacienteUID).get()).data()['nome'];
                            return dadosPaciente;
                        })));
                    }));
                    return dadosSessao;
                }));
                sessoes = yield Promise.all(resultSessoes);
                return sessoes;
            }));
        });
    }
    /**
     * Cadastra uma nova seção
     */
    cadastrar(sessao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let doc = this.sessaoDB.doc();
            //Cadastra a Sessão
            sessao.coordenadorUID = this.usuario.uid;
            delete sessao.dadosPacientes;
            sessao.id = doc.id;
            yield doc.set(Object.assign({}, sessao));
            //Cadastra os Pacientes na sessão
            let snapshot = yield this.pacienteDB.get();
            snapshot.forEach(pacienteDOC => {
                let dados = pacienteDOC.data();
                let pacienteDados = new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"](pacienteDOC.id, false, dados.nome);
                this.sessaoDB.doc(sessao.id).collection('pacientes').doc(pacienteDOC.id).set(Object.assign({}, pacienteDados));
            });
            return true;
        });
    }
    /**
     * Atualiza uma sessão existente
     */
    atualizar(sessao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //Atualiza a sessão
            yield this.sessaoDB.doc(sessao.id).update({
                data: sessao.data,
                disponivel: sessao.disponivel
            });
            //Atualiza os pacientes
            sessao.dadosPacientes.forEach((dado) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(dado);
                yield this.sessaoDB.doc(sessao.id).collection('pacientes').doc(dado.pacienteUID).update({
                    presente: dado.presente,
                    situacao: (dado.situacao != undefined ? dado.situacao : null),
                    opiniao: dado.opiniao
                });
            }));
            return true;
        });
    }
    /**
    * Remove a sessão do sistema
    */
    remover(sessaoID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //Atualiza a sessão
            yield this.sessaoDB.doc(sessaoID).update({
                excluido: true
            });
            return true;
        });
    }
    // =========================== PACIENTE ============================================//
    buscarSessoes(paciente) {
        return this.sessaoDB
            .where('excluido', '==', false)
            .where('coordenadorUID', '==', paciente.coordenadorUID)
            .orderBy('data', 'asc')
            .get().then(sessoesSnapshot => {
            let sessoes = [];
            sessoesSnapshot.forEach((doc) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let dadosSessao = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["Sessao"], doc.data());
                yield this.sessaoDB.doc(dadosSessao.id).collection('pacientes').doc(paciente.uid).get().then(sessaodoc => {
                    let dadosPaciente = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"], sessaodoc.data());
                    dadosSessao.dadosPacientes.push(dadosPaciente);
                });
                yield new Promise(resolve => setTimeout(resolve, 1000));
                sessoes.push(dadosSessao);
            }));
            return sessoes;
        });
    }
    /**
     * Paciente responde sobre a sessão
     * @param sessaoID
     * @param comentario
     */
    responder(sessaoID, comentario) {
        this.sessaoDB.doc(sessaoID).collection('pacientes').doc(this.usuario.uid).update({
            opiniao: comentario
        });
    }
    /**
     * Retorna as sessões que o paciente deve responder
     */
    buscarSessoesResponder(paciente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const sessoes = [];
            //Busca todas as sessões
            const snapshots = yield this.sessaoDB.where('coordenadorUID', '==', paciente.coordenadorUID)
                .where('excluido', '==', false)
                .where('disponivel', '==', true).get();
            //Busca as sessões 
            let buscaSessoes = snapshots.docs.map((snapshot) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let sessao = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["Sessao"](), snapshot.data());
                //Avalia se o usuário respondeu a sessão
                let doc = yield this.sessaoDB.doc(sessao.id).collection('pacientes').doc(paciente.uid).get();
                let dados = doc.data();
                if (dados == null)
                    return null;
                //Envia apenas as sessões que o usuário ainda não deu sua opinião
                if (dados.opiniao == null) {
                    //Recupera os  dados do paciente na lista da sessão
                    const pacienteDOC = yield this.sessaoDB.doc(sessao.id).collection('pacientes').doc(paciente.uid).get();
                    let dadosPaciente = Object.assign(new _models_sessao__WEBPACK_IMPORTED_MODULE_2__["DadosPacientesSessao"], pacienteDOC.data());
                    dadosPaciente.nome = (yield firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('pacientes').doc(dadosPaciente.pacienteUID).get()).data()['nome'];
                    sessao.dadosPacientes.push(dadosPaciente);
                }
                return (dados.opiniao == null ? sessao : null);
            }));
            const retorno = yield Promise.all(buscaSessoes);
            //Salva na constante apenas as sessões encontradas
            retorno.forEach(s => { if (s != null)
                sessoes.push(s); });
            return sessoes;
        });
    }
};
SessaoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
SessaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], SessaoService);



/***/ })

}]);
//# sourceMappingURL=default~coordenador-sessao-edicao-sessao-edicao-module~financeiro-financeiro-module~geral-sessao-ger~96d9306f-es2015.js.map