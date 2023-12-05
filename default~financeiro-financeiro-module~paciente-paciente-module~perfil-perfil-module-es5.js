(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~financeiro-financeiro-module~paciente-paciente-module~perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content #pageTop id=\"main\">\r\n  \r\n    <div id=\"aba1\" [hidden]=\"aba != 1\">\r\n      <h2 class=\"fala\">Bem vindo!</h2>\r\n      <ion-img class=\"avatar\" src=\"/assets/imgs/ajudante.png\" height=\"100\"></ion-img>\r\n      <p>Esse é seu primeiro acesso. Responda algumas perguntas para que eu possa ajudá-lo a entender o seu grau de dependência</p>\r\n\r\n      <p>Para iniciar, clique no botão abaixo</p>\r\n\r\n      <ion-button (click)=\"aba = 2\">\r\n        <ion-icon name=\"arrow-round-forward\" slot=\"end\"></ion-icon>\r\n        Iniciar\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div id=\"aba2\" [hidden]=\"aba != 2\">\r\n      \r\n        <h2 class=\"fala ion-text-center\">questionário</h2>\r\n\r\n        <div class=\"pergunta\" *ngFor=\"let pergunta of perguntas; let i = index\">\r\n          <p><b>{{i+1}}.</b> {{ pergunta.pergunta }}</p>\r\n\r\n          <div [ngClass]=\"{\r\n            'opcao': true,\r\n            'opcao-selecionada': pergunta.selecionado == true\r\n          }\" (click)=\"perguntas[i].selecionado = true\">\r\n            <ion-img src=\"/assets/imgs/icons/like.png\"></ion-img>\r\n            SIM\r\n          </div>\r\n\r\n          <div [ngClass]=\"{\r\n            'opcao': true,\r\n            'opcao-selecionada': pergunta.selecionado == false\r\n            }\" (click)=\"perguntas[i].selecionado = false\">\r\n            <ion-img src=\"/assets/imgs/icons/like.png\" class=\"negativo\"></ion-img>\r\n            NÃO\r\n          </div>\r\n\r\n        </div>\r\n        <ion-button (click)=\"analisar()\" [disabled]=\"bloqueado()\">\r\n          ANALISAR\r\n        </ion-button>\r\n    </div>\r\n\r\n    <div id=\"aba3\" [hidden]=\"aba != 3\">\r\n        <h2 class=\"fala\">Resultado!</h2>\r\n        <ion-img class=\"avatar\" src=\"/assets/imgs/ajudante.png\" height=\"100\"></ion-img>\r\n        <p>Bom, vamos aos seus resultados</p>\r\n  \r\n        <p *ngIf=\"resultado.length == 0\">Vejo que o cigarro para você não é uma dependência muito forte. Mas ainda sim, devemos parar para cuidar da sua saúde</p>\r\n        <p *ngFor=\"let fala of resultado\">{{fala}}</p>\r\n\r\n        <br/>\r\n        <p>Caso você não consiga realizar uma parada abrupta, pode optar uma parada gradual.</p>\r\n        <p>A parada gradual consistema em ir diminuindo os cigarros consumidos no dia aos poucos:</p>\r\n        <ul>\r\n          <li>30 no primeiro dia</li>\r\n          <li>25 no segundo dia</li>\r\n          <li>20 no terceiro dia</li>\r\n          <li>15 no quarto dia</li>\r\n          <li>até encerrar...</li>\r\n        </ul>\r\n\r\n        <p>A parada gradual também pode ser baseada no adiamento, demorando mais tempo entre um cigarro e outro, ou a hora em que começa a fumar:</p>\r\n        <ul>\r\n          <li>Começa as 9h no primeiro dia</li>\r\n          <li>Começa as 11h no segundo dia</li>\r\n          <li>Começa as 13h no terceiro dia</li>\r\n          <li>Começa as 15h no quarto dia</li>\r\n          <li>até encerrar...</li>\r\n        </ul>\r\n\r\n        <p>Espero ter ajudado com essas informações!</p>\r\n        <ion-button (click)=\"fechar()\" expand=\"full\">\r\n          <ion-icon name=\"arrow-round-forward\" slot=\"end\"></ion-icon>\r\n          INICIAR APLICATIVO\r\n        </ion-button>\r\n\r\n\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/paciente-responder-dia/paciente-responder-dia.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/paciente-responder-dia/paciente-responder-dia.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  \r\n  <div id=\"header\">\r\n    <h1>Questionário {{questionario.dia|dataBrasil}}</h1>\r\n  </div>\r\n  \r\n  <!-- PERGUNTAS -->\r\n  <div id=\"perguntas\" *ngIf=\"abaSelecionada == 1\">\r\n    <!-- FUMOU -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n      <h1>Fumou nesse dia?</h1>\r\n    </ion-text>\r\n    \r\n    <div class=\"opcoes\">\r\n      <!-- FUMOU -->\r\n      <div [ngClass]=\"{\r\n          'opcao': true,\r\n          'opcao-selecionada': questionario.fumou == true\r\n        }\" (click)=\"questionario.fumou = true\">\r\n        <p>Sim</p>\r\n        <ion-img src=\"/assets/imgs/icons/smoking.png\"></ion-img>\r\n      </div>\r\n    \r\n      <!-- Não -->\r\n      <div [ngClass]=\"{\r\n          'opcao': true,\r\n          'opcao-selecionada': questionario.fumou == false\r\n        }\" (click)=\"questionario.fumou = false\">\r\n        <p>Não</p>\r\n        <ion-img src=\"/assets/imgs/icons/not-smoking.png\"></ion-img>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ion-list *ngIf=\"questionario.fumou\">\r\n      <ion-item>\r\n        <ion-label>Quantos cigarros?</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"questionario.cigarros\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n\r\n    <!-- EXERCITOU-SE -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n      <h1>Realizou algum exercício físico?</h1>\r\n    </ion-text>\r\n\r\n    <div class=\"opcoes\">\r\n      <!-- SIM -->\r\n      <div [ngClass]=\"{\r\n          'opcao': true,\r\n          'opcao-selecionada': questionario.exercitou == true\r\n        }\" (click)=\"questionario.exercitou = true\">\r\n        <p>Sim</p>\r\n        <ion-img src=\"/assets/imgs/icons/exercise.png\"></ion-img>\r\n      </div>\r\n\r\n      <!-- Não -->\r\n      <div [ngClass]=\"{\r\n          'opcao': true,\r\n          'opcao-selecionada': questionario.exercitou == false\r\n        }\" (click)=\"questionario.exercitou = false\">\r\n        <p>Não</p>\r\n        <ion-img src=\"/assets/imgs/icons/tired.png\"></ion-img>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- HUMOR -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n      <h1>Como foi seu humor?</h1>\r\n    </ion-text>\r\n  \r\n    <div class=\"opcoes\">\r\n      <!-- BAIXO -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada': questionario.humor == 0\r\n      }\" (click)=\"questionario.humor = 0\">\r\n        <p>Baixo</p>\r\n        <ion-img src=\"/assets/imgs/icons/triste.png\"></ion-img>\r\n      </div>\r\n      <!-- NORMAL -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada': questionario.humor == 1\r\n      }\" (click)=\"questionario.humor = 1\">\r\n        <p>Normal</p>\r\n        <ion-img src=\"/assets/imgs/icons/normal.png\"></ion-img>\r\n      </div>\r\n      <!-- ALTO -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada': questionario.humor == 2\r\n      }\" (click)=\"questionario.humor = 2\">\r\n        <p>Alto</p>\r\n        <ion-img src=\"/assets/imgs/icons/feliz.png\"></ion-img>\r\n      </div>\r\n  \r\n    </div>\r\n\r\n    <!-- VONTADE -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n      <h1>Vontade de fumar</h1>\r\n    </ion-text>\r\n\r\n    <div class=\"opcoes\">\r\n      <!-- ALTA -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada': questionario.vontadeFumar == 2\r\n      }\" (click)=\"questionario.vontadeFumar = 2\">\r\n      <p>Alta</p>\r\n      <ion-img src=\"/assets/imgs/icons/triste.png\"></ion-img>\r\n    </div>\r\n    <!-- NORMAL -->\r\n    <div [ngClass]=\"{\r\n      'opcao': true,\r\n      'opcao-selecionada': questionario.vontadeFumar == 1\r\n    }\" (click)=\"questionario.vontadeFumar = 1\">\r\n    <p>Normal</p>\r\n    <ion-img src=\"/assets/imgs/icons/normal.png\"></ion-img>\r\n    </div>\r\n    <!-- BAIXA -->\r\n    <div [ngClass]=\"{\r\n      'opcao': true,\r\n        'opcao-selecionada': questionario.vontadeFumar == 0\r\n      }\" (click)=\"questionario.vontadeFumar = 0\">\r\n      <p>Baixa</p>\r\n      <ion-img src=\"/assets/imgs/icons/feliz.png\"></ion-img>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <ion-button (click)=\"salvar()\" expand=\"full\" size=\"large\">\r\n      SALVAR\r\n    </ion-button>\r\n    <p class=\"ion-text-center\">OU</p>\r\n    <ion-button (click)=\"fechar()\" expand=\"full\" size=\"large\" fill=\"outline\">\r\n      RESPONDER DEPOIS\r\n    </ion-button>\r\n  </div>\r\n\r\n  <!-- DICAS -->\r\n  <div id=\"dica-dia\" *ngIf=\"abaSelecionada == 2\">\r\n    <h1>Dica do dia!</h1>\r\n    \r\n    <ion-img [src]=\"dicas[aleatorio].img\"></ion-img>\r\n    <p>{{dicas[aleatorio].dica}}</p>\r\n\r\n    <ion-button (click)=\"proximo()\">\r\n      Encerrar\r\n    </ion-button>\r\n  </div>\r\n\r\n  <!-- EVITE O MEDICAMENTO -->\r\n  <div id=\"dica-dia\" *ngIf=\"abaSelecionada == 3\">\r\n    <h1>Lembre-se!</h1>\r\n    \r\n    <!-- <ion-img [src]=\"\"></ion-img> -->\r\n    <p>{{frasesMedicamento[aleatorio]}}</p>\r\n\r\n    <ion-button (click)=\"fechar()\">\r\n      Encerrar\r\n    </ion-button>\r\n  </div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div id=\"header\">\r\n    <h1>Sessão {{sessao.data |dataBrasil}}</h1>\r\n  </div>\r\n\r\n  <div id=\"status\">\r\n    <ion-badge color=\"success\" mode=\"ios\" *ngIf=\"sessao.presente(paciente.uid)\">Participou</ion-badge>\r\n    <ion-badge color=\"danger\" mode=\"ios\" *ngIf=\"!sessao.presente(paciente.uid)\">Faltou</ion-badge>\r\n  </div>\r\n\r\n  <!-- PRESENTE -->\r\n  <div id=\"perguntas\" *ngIf=\"sessao.presente(paciente.uid)\">\r\n    <!-- HUMOR -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n        <h1>O que achou da sessão?</h1>\r\n      </ion-text>\r\n    \r\n      <div class=\"opcoes\">\r\n        <!-- CHATO -->\r\n        <div [ngClass]=\"{\r\n          'opcao': true,\r\n          'opcao-selecionada': comentario == 'chato'\r\n        }\" (click)=\"comentario = 'chato'\">\r\n        <p>Chata</p>\r\n        <ion-img src=\"/assets/imgs/icons/chato.png\"></ion-img>\r\n      </div>\r\n      <!-- DESMOTIVANTE -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada': comentario == 'desmotivante'\r\n      }\" (click)=\" comentario = 'desmotivante'\">\r\n      <p>Desmotivante</p>\r\n      <ion-img src=\"/assets/imgs/icons/desmotivante.png\"></ion-img>\r\n      </div>\r\n      <!-- INTERESANTE -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada':  comentario == 'interessante'\r\n      }\" (click)=\"comentario = 'interessante'\">\r\n      <p>Interessante</p>\r\n      <ion-img src=\"/assets/imgs/icons/interessante.png\"></ion-img>\r\n      </div>\r\n    \r\n      <!-- EMPOLGANTE -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada':  comentario == 'empolgante'\r\n      }\" (click)=\"comentario = 'empolgante'\">\r\n      <p>Empolgante</p>\r\n      <ion-img src=\"/assets/imgs/icons/empolgante.png\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- FALTOU -->\r\n  <div id=\"perguntas\" *ngIf=\"!sessao.presente(paciente.uid)\">\r\n    <!-- HUMOR -->\r\n    <ion-text color=\"medium\" class=\"ion-text-center\">\r\n        <h1>Por que faltou a sessão?</h1>\r\n      </ion-text>\r\n    \r\n      <div class=\"opcoes\">\r\n        <!-- DOENTE -->\r\n        <div [ngClass]=\"{\r\n          'opcao': true,\r\n          'opcao-selecionada': comentario == 'doença'\r\n        }\" (click)=\"comentario = 'doença'\">\r\n        <p>Doente</p>\r\n        <ion-img src=\"/assets/imgs/icons/sick.png\"></ion-img>\r\n      </div>\r\n      <!-- DESMOTIVANTE -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada': comentario == 'desmotivante'\r\n      }\" (click)=\" comentario = 'desmotivante'\">\r\n      <p>Desmotivante</p>\r\n      <ion-img src=\"/assets/imgs/icons/desmotivante.png\"></ion-img>\r\n      </div>\r\n      <!-- OUTROS -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada':  comentario == 'outros motivos'\r\n      }\" (click)=\"comentario = 'outros motivos'\">\r\n      <p>Outros motivos</p>\r\n      <ion-img src=\"/assets/imgs/icons/shrug.png\"></ion-img>\r\n      </div>\r\n    \r\n      <!-- NÃO INFORMAR -->\r\n      <div [ngClass]=\"{\r\n        'opcao': true,\r\n        'opcao-selecionada':  comentario == 'não informar'\r\n      }\" (click)=\"comentario = 'não informar'\">\r\n      <p>Não desejo informar</p>\r\n      <ion-img src=\"/assets/imgs/icons/nao-informar.png\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-button (click)=\"salvar()\" expand=\"full\" size=\"large\" [disabled]=\"comentario == null\">\r\n    Salvar\r\n  </ion-button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/progress-bar/progress-bar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/progress-bar/progress-bar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"progress-bar\">\r\n    <div id=\"progress\" [style.width]=\"porcentagem+'%'\" >{{porcentagem}}%</div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./src/app/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _paciente_responder_dia_paciente_responder_dia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paciente-responder-dia/paciente-responder-dia.component */ "./src/app/components/paciente-responder-dia/paciente-responder-dia.component.ts");
/* harmony import */ var _paciente_responder_sessao_paciente_responder_sessao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paciente-responder-sessao/paciente-responder-sessao.component */ "./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _paciente_entendendo_fumo_paciente_entendendo_fumo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paciente-entendendo-fumo/paciente-entendendo-fumo.component */ "./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.ts");










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"], _paciente_responder_dia_paciente_responder_dia_component__WEBPACK_IMPORTED_MODULE_4__["PacienteResponderDiaComponent"], _paciente_responder_sessao_paciente_responder_sessao_component__WEBPACK_IMPORTED_MODULE_5__["PacienteResponderSessaoComponent"], _paciente_entendendo_fumo_paciente_entendendo_fumo_component__WEBPACK_IMPORTED_MODULE_9__["PacienteEntendendoFumoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            entryComponents: [_paciente_responder_sessao_paciente_responder_sessao_component__WEBPACK_IMPORTED_MODULE_5__["PacienteResponderSessaoComponent"], _paciente_responder_dia_paciente_responder_dia_component__WEBPACK_IMPORTED_MODULE_4__["PacienteResponderDiaComponent"], _paciente_entendendo_fumo_paciente_entendendo_fumo_component__WEBPACK_IMPORTED_MODULE_9__["PacienteEntendendoFumoComponent"]],
            exports: [_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 20px;\n  --background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  height: 100%;\n  overflow: auto;\n  scroll-behavior: smooth;\n}\n\n.avatar {\n  height: 200px;\n}\n\n#aba1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: \"center\";\n          justify-content: \"center\";\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#aba1 p {\n  text-align: justify;\n}\n\n#aba2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n#aba2 .pergunta {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n#aba2 .pergunta p {\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n\n#aba2 .pergunta .opcao {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 75px;\n  width: 75px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 5px;\n  background: white;\n}\n\n#aba2 .pergunta .opcao ion-img {\n  width: 30px;\n}\n\n#aba2 .pergunta .opcao .negativo {\n  -webkit-transform: scaleY(-1) scaleX(-1);\n  transform: scaleY(-1) scaleX(-1);\n}\n\n#aba2 .pergunta .opcao p {\n  margin: 0px;\n  text-align: center;\n}\n\n#aba2 .pergunta .opcao-selecionada {\n  background-color: lightsalmon;\n}\n\n#aba3 h1 {\n  text-align: center;\n}\n\n#aba3 p {\n  text-align: justify;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpZW50ZS1lbnRlbmRlbmRvLWZ1bW8vQzpcXHhhbXBwXFxodGRvY3NcXG5hby1mdW1lLS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFjaWVudGUtZW50ZW5kZW5kby1mdW1vXFxwYWNpZW50ZS1lbnRlbmRlbmRvLWZ1bW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFjaWVudGUtZW50ZW5kZW5kby1mdW1vL3BhY2llbnRlLWVudGVuZGVuZG8tZnVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLCtEQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBRE1BO0VBQ0ksYUFBQTtBQ0hKOztBRE1BO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKSjs7QURNSTtFQUNJLG1CQUFBO0FDSlI7O0FEUUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNMSjs7QURNSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0pSOztBRE1RO0VBQUksbUJBQUE7VUFBQSxPQUFBO0FDSFo7O0FES1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNIWjs7QURLWTtFQUNJLFdBQUE7QUNIaEI7O0FETVk7RUFDSSx3Q0FBQTtFQUNBLGdDQUFBO0FDSmhCOztBRE9ZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDTGhCOztBRFNRO0VBQ0ksNkJBQUE7QUNQWjs7QURhSTtFQUFLLGtCQUFBO0FDVFQ7O0FEVUk7RUFBSSxtQkFBQTtFQUFxQixXQUFBO0FDTjdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWNpZW50ZS1lbnRlbmRlbmRvLWZ1bW8vcGFjaWVudGUtZW50ZW5kZW5kby1mdW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNtYWluIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZiYzJlYiAwJSwgI2E2YzFlZSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ExYzRmZCAwJSwgI2MyZTlmYiAxMDAlKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgICAgIFxyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiNhYmExIHtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICdjZW50ZXInO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG59XHJcblxyXG4jYWJhMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5wZXJndW50YSB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHAgeyBmbGV4OjIgfVxyXG5cclxuICAgICAgICAub3BjYW8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5lZ2F0aXZvIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpIHNjYWxlWCgtMSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSkgIHNjYWxlWCgtMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcGNhby1zZWxlY2lvbmFkYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2FiYTMge1xyXG4gICAgaDEgeyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgcCB7IHRleHQtYWxpZ246IGp1c3RpZnk7IG1hcmdpbjozcHggfVxyXG4gIH1cclxuICAiLCIjbWFpbiB7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLmF2YXRhciB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbiNhYmExIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBcImNlbnRlclwiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2FiYTEgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNhYmEyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNhYmEyIC5wZXJndW50YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4jYWJhMiAucGVyZ3VudGEgcCB7XG4gIGZsZXg6IDI7XG59XG4jYWJhMiAucGVyZ3VudGEgLm9wY2FvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuI2FiYTIgLnBlcmd1bnRhIC5vcGNhbyBpb24taW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG4jYWJhMiAucGVyZ3VudGEgLm9wY2FvIC5uZWdhdGl2byB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpIHNjYWxlWCgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKSBzY2FsZVgoLTEpO1xufVxuI2FiYTIgLnBlcmd1bnRhIC5vcGNhbyBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNhYmEyIC5wZXJndW50YSAub3BjYW8tc2VsZWNpb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcbn1cblxuI2FiYTMgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYWJhMyBwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PacienteEntendendoFumoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteEntendendoFumoComponent", function() { return PacienteEntendendoFumoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_models_paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");





var PacienteEntendendoFumoComponent = /** @class */ (function () {
    function PacienteEntendendoFumoComponent(modalController, pacienteService) {
        this.modalController = modalController;
        this.pacienteService = pacienteService;
        this.aba = 1;
        this.perguntas = [
            { pergunta: 'É muito difícil para você ficar 12 horas sem fumar?', selecionado: null },
            { pergunta: 'Você tem um desejo intensivo e compulsivo ("fissura") por cigarro?', selecionado: null },
            { pergunta: 'Você sente necessidade de fumar pelo menos um certo número de cigarros por dia?', selecionado: null },
            { pergunta: 'Você frequentemente se encontra fumando sem ter percebido que havia acendido um cigarro?', selecionado: null },
            { pergunta: 'Você associa o ato de fumar com outros comportamentos tais como tomar café ou falar ao telefone?', selecionado: null },
            { pergunta: 'Você já passou, por acaso, um dia inteiro sem fumar?', selecionado: null },
            { pergunta: 'Você fuma mais depois de ter uma discussão com alguém?', selecionado: null },
            { pergunta: 'Fumar é um dos prazeres mais importantes da sua vida?', selecionado: null },
            { pergunta: 'O pensamento de nunca mais fumar o torna infeliz?', selecionado: null }
        ];
        this.resultado = [];
    }
    PacienteEntendendoFumoComponent.prototype.ngOnInit = function () {
    };
    /** Analisa se o botão da Aba 2 está bloqueado */
    PacienteEntendendoFumoComponent.prototype.bloqueado = function () {
        var bloqueado = false;
        this.perguntas.forEach(function (p) {
            if (p.selecionado == null)
                bloqueado = true;
        });
        return bloqueado;
    };
    /** Analisa as respostas */
    PacienteEntendendoFumoComponent.prototype.analisar = function () {
        if (this.perguntas[0].selecionado || this.perguntas[1].selecionado || this.perguntas[2].selecionado)
            this.resultado.push('Percebo que você está fisicamente dependente do cigarro');
        if (this.perguntas[3].selecionado || this.perguntas[4].selecionado || this.perguntas[5].selecionado)
            this.resultado.push('Vejo que está fazendo associações de comportamento envolvendo o ato de fumar');
        if (this.perguntas[6].selecionado || this.perguntas[7].selecionado || this.perguntas[8].selecionado)
            this.resultado.push('Você está psicologicamente dependente do cigarro');
        this.aba = 3;
        this.pageTop.scrollToTop();
    };
    /** Encerra o questionário */
    PacienteEntendendoFumoComponent.prototype.fechar = function () {
        //Ja não será mais o primeiro acesso
        this.paciente.primeiroAcesso = false;
        this.pacienteService.atualizarPaciente(this.paciente);
        //Fecha o Modal  
        this.modalController.dismiss();
    };
    PacienteEntendendoFumoComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__["PacienteService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageTop', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], PacienteEntendendoFumoComponent.prototype, "pageTop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"])
    ], PacienteEntendendoFumoComponent.prototype, "paciente", void 0);
    PacienteEntendendoFumoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paciente-entendendo-fumo',
            template: __webpack_require__(/*! raw-loader!./paciente-entendendo-fumo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.html"),
            styles: [__webpack_require__(/*! ./paciente-entendendo-fumo.component.scss */ "./src/app/components/paciente-entendendo-fumo/paciente-entendendo-fumo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_4__["PacienteService"]])
    ], PacienteEntendendoFumoComponent);
    return PacienteEntendendoFumoComponent;
}());



/***/ }),

/***/ "./src/app/components/paciente-responder-dia/paciente-responder-dia.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/paciente-responder-dia/paciente-responder-dia.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  padding: 20px;\n  height: 100%;\n  overflow: auto;\n  scroll-behavior: smooth;\n}\n\n#header {\n  text-align: center;\n}\n\n#header h1 {\n  margin: 3px;\n}\n\n#perguntas h1 {\n  margin: 0px !important;\n  font-size: 20px;\n}\n\n#perguntas ion-list {\n  padding: 0px !important;\n}\n\n#perguntas ion-item {\n  margin: 0px !important;\n}\n\n#perguntas .opcoes {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n#perguntas .opcoes .opcao {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 80px;\n  width: 80px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 5px;\n}\n\n#perguntas .opcoes .opcao ion-img {\n  width: 40px;\n}\n\n#perguntas .opcoes .opcao p {\n  margin: 0px;\n  text-align: center;\n}\n\n#perguntas .opcoes .opcao-selecionada {\n  background-color: lightsalmon;\n}\n\n#dica-dia {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#dica-dia ion-img {\n  width: 200px;\n}\n\n#dica-dia p {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpZW50ZS1yZXNwb25kZXItZGlhL0M6XFx4YW1wcFxcaHRkb2NzXFxuYW8tZnVtZS0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhY2llbnRlLXJlc3BvbmRlci1kaWFcXHBhY2llbnRlLXJlc3BvbmRlci1kaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFjaWVudGUtcmVzcG9uZGVyLWRpYS9wYWNpZW50ZS1yZXNwb25kZXItZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FERUk7RUFDSSxXQUFBO0FDQVI7O0FETUk7RUFBSyxzQkFBQTtFQUF3QixlQUFBO0FDRGpDOztBREVJO0VBQVcsdUJBQUE7QUNDZjs7QURBSTtFQUFXLHNCQUFBO0FDR2Y7O0FEREk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ0dSOztBRERRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0daOztBRERZO0VBQ0ksV0FBQTtBQ0doQjs7QURBWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VoQjs7QURFUTtFQUNJLDZCQUFBO0FDQVo7O0FES0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRko7O0FER0k7RUFDSSxZQUFBO0FDRFI7O0FESUk7RUFDSSxtQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWNpZW50ZS1yZXNwb25kZXItZGlhL3BhY2llbnRlLXJlc3BvbmRlci1kaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuICAgIH1cclxufVxyXG5cclxuI3Blcmd1bnRhcyB7XHJcblxyXG4gICAgaDEgeyBtYXJnaW46IDBweCAhaW1wb3J0YW50OyBmb250LXNpemU6MjBweH1cclxuICAgIGlvbi1saXN0IHsgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7fVxyXG4gICAgaW9uLWl0ZW0geyBtYXJnaW46IDBweCAhaW1wb3J0YW50O31cclxuXHJcbiAgICAub3Bjb2VzIHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgIC5vcGNhbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHg7XHJcblxyXG4gICAgICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3BjYW8tc2VsZWNpb25hZGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNkaWNhLWRpYSB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxufSIsIiNjb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiNoZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbiNwZXJndW50YXMgaDEge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jcGVyZ3VudGFzIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4jcGVyZ3VudGFzIGlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbiNwZXJndW50YXMgLm9wY29lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI3Blcmd1bnRhcyAub3Bjb2VzIC5vcGNhbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuI3Blcmd1bnRhcyAub3Bjb2VzIC5vcGNhbyBpb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG59XG4jcGVyZ3VudGFzIC5vcGNvZXMgLm9wY2FvIHAge1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3Blcmd1bnRhcyAub3Bjb2VzIC5vcGNhby1zZWxlY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xufVxuXG4jZGljYS1kaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2RpY2EtZGlhIGlvbi1pbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG4jZGljYS1kaWEgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/paciente-responder-dia/paciente-responder-dia.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/paciente-responder-dia/paciente-responder-dia.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PacienteResponderDiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteResponderDiaComponent", function() { return PacienteResponderDiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_questionario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/questionario.service */ "./src/app/services/questionario.service.ts");
/* harmony import */ var src_app_models_questionario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/questionario */ "./src/app/models/questionario.ts");





var PacienteResponderDiaComponent = /** @class */ (function () {
    function PacienteResponderDiaComponent(modalController, toastController, questionarioService) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.questionarioService = questionarioService;
        //Dia atual da lista  
        this.indiceDias = 0;
        this.abaSelecionada = 1;
        //Dicas
        this.dicas = [
            { dica: 'Formigamento ou dormencia nos braços e pernas pode ser comum durante a abstinencia, isso ocorre por melhoramento na sua circulação sanguínea.', img: '/assets/imgs/dicas/dormente.png' },
            { dica: 'Poderá ser comum sentir-se tonto nos primeiros dias. Isso ocorre porque seu cerebro está recebendo mais oxigêncio. Esses sintomas devem desaprecer com o tempo.', img: '/assets/imgs/dicas/tonto.jpg' },
            { dica: 'Será comum nos primeiros dias tossir mais do que quando fumava. Isso ocorre devido ao fato dos cílios estarem limpado os brônquios durante o dia.', img: '/assets/imgs/dicas/tosse.jpg' },
            { dica: 'Beba muitos copos de água durante o dia. Isso irá ajudar a diminuir o desejo pelo cigarro.', img: '/assets/imgs/dicas/agua.jpg' },
            { dica: 'Sempre carregue um lanche. Ter algo para mastigar, alivia a vontade de fumar.', img: '/assets/imgs/dicas/mastigar.jpg' },
            { dica: 'Fantasie: Para relaxar, sente-se em um local calmo com pernas cruzadas, conte até 10, esqueça o ambiente e pense em apenas deixar seu corpo relaxado.', img: '/assets/imgs/dicas/fantasie.jpg' },
            { dica: 'Realize exercícios de respiração profunda. Em pé, com os pés afastados e ligeiramente dobrados, puxe o ar lentamente pelo nariz. Prenda um pouco a respiração e o libere. Repita o processo 4 vezes', img: '/assets/imgs/dicas/respire.jpg' },
            { dica: 'Pratique atividades físicas com aumento gradual. Isso ajudará a diminuir o estress, mas lembre-se de procurar um médico antes.', img: '/assets/imgs/dicas/exercicio.jpg' },
            { dica: 'Relaxe o corpo e a mente, praticando atividades tranquilas', img: '/assets/imgs/dicas/relaxamento.jpg' },
            { dica: 'Seja positivo, use frases como "eu penso...", "eu acredito...", fale com as pessoas olhando nos olhos e com vontade e disposição', img: '/assets/imgs/dicas/positivo.jpg' },
        ];
        this.frasesMedicamento = [
            'Lembre-se, você não precisa do medicamento para superar o vício. Você é capaz!'
        ];
        this.aleatorio = null;
    }
    PacienteResponderDiaComponent.prototype.ngOnInit = function () {
        this.questionario = new src_app_models_questionario__WEBPACK_IMPORTED_MODULE_4__["Questionario"](this.dias[this.indiceDias]);
    };
    /**
    * Salva o questionário
    */
    PacienteResponderDiaComponent.prototype.salvar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.questionario.fumou == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({ message: 'Informe se fumou', duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 2:
                        if (!(this.questionario.fumou && this.questionario.cigarros == null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({ message: 'Preencha quantia de cigarros', duration: 2000 })];
                    case 3:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(this.questionario.humor == null)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({ message: 'Selecione o humor', duration: 2000 })];
                    case 5:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 6:
                        if (!(this.questionario.exercitou == null)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({ message: 'Selecione se tem se exercitado', duration: 2000 })];
                    case 7:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 8:
                        if (!(this.questionario.vontadeFumar == null)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastController.create({ message: 'Selecione a vontade de fumar', duration: 2000 })];
                    case 9:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 10:
                        this.questionarioService.responder(this.questionario);
                        return [4 /*yield*/, this.toastController.create({ message: 'Questionário salvo', duration: 2000 })];
                    case 11:
                        toast = _a.sent();
                        this.aleatorio = Math.floor(Math.random() * this.dicas.length); //Seleciona uma dica aleatória para o paciente
                        this.abaSelecionada = 2;
                        _a.label = 12;
                    case 12:
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Passa para o próximo dia */
    PacienteResponderDiaComponent.prototype.proximo = function () {
        this.indiceDias++; //Responde um dia
        if (this.indiceDias < this.dias.length) { //Checa se ainda há dias
            this.abaSelecionada = 1; //Aba de perguntas    
            this.questionario = new src_app_models_questionario__WEBPACK_IMPORTED_MODULE_4__["Questionario"](this.dias[this.indiceDias]);
        }
        else {
            this.aleatorio = Math.floor(Math.random() * this.frasesMedicamento.length);
            this.abaSelecionada = 3; //Aba final
        }
    };
    /** Fecha o Modal */
    PacienteResponderDiaComponent.prototype.fechar = function () {
        //Fecha o próprio modal
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    PacienteResponderDiaComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_questionario_service__WEBPACK_IMPORTED_MODULE_3__["QuestionarioService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PacienteResponderDiaComponent.prototype, "dias", void 0);
    PacienteResponderDiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paciente-responder-dia',
            template: __webpack_require__(/*! raw-loader!./paciente-responder-dia.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/paciente-responder-dia/paciente-responder-dia.component.html"),
            styles: [__webpack_require__(/*! ./paciente-responder-dia.component.scss */ "./src/app/components/paciente-responder-dia/paciente-responder-dia.component.scss")]
        })
        /**
         * Modal para o Usuário responder o questionário diario
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_questionario_service__WEBPACK_IMPORTED_MODULE_3__["QuestionarioService"]])
    ], PacienteResponderDiaComponent);
    return PacienteResponderDiaComponent;
}());



/***/ }),

/***/ "./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  padding: 10px;\n  overflow: auto;\n  scroll-behavior: smooth;\n}\n\n#header h1 {\n  text-align: center;\n}\n\n#status {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#status ion-badge {\n  font-size: 30px !important;\n}\n\n#perguntas ion-list {\n  padding: 0px !important;\n}\n\n#perguntas ion-item {\n  margin: 0px !important;\n}\n\n#perguntas .opcoes {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n#perguntas .opcoes .opcao {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 120px;\n  width: 120px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 5px 20px;\n}\n\n#perguntas .opcoes .opcao ion-img {\n  width: 80px;\n}\n\n#perguntas .opcoes .opcao p {\n  margin: 0px;\n  text-align: center;\n  font-size: 14px;\n}\n\n#perguntas .opcoes .opcao-selecionada {\n  background-color: lightsalmon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpZW50ZS1yZXNwb25kZXItc2Vzc2FvL0M6XFx4YW1wcFxcaHRkb2NzXFxuYW8tZnVtZS0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhY2llbnRlLXJlc3BvbmRlci1zZXNzYW9cXHBhY2llbnRlLXJlc3BvbmRlci1zZXNzYW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFjaWVudGUtcmVzcG9uZGVyLXNlc3Nhby9wYWNpZW50ZS1yZXNwb25kZXItc2Vzc2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREtJO0VBQUssa0JBQUE7QUNEVDs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNESjs7QURFSTtFQUNJLDBCQUFBO0FDQVI7O0FETUk7RUFBVyx1QkFBQTtBQ0ZmOztBREdJO0VBQVcsc0JBQUE7QUNBZjs7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0FSOztBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBWjs7QURFWTtFQUNJLFdBQUE7QUNBaEI7O0FER1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRGhCOztBREtRO0VBQ0ksNkJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFjaWVudGUtcmVzcG9uZGVyLXNlc3Nhby9wYWNpZW50ZS1yZXNwb25kZXItc2Vzc2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNjb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBoMSB7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbn1cclxuXHJcbiNzdGF0dXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW9uLWJhZGdlICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNwZXJndW50YXMge1xyXG5cclxuICAgIGlvbi1saXN0IHsgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7fVxyXG4gICAgaW9uLWl0ZW0geyBtYXJnaW46IDBweCAhaW1wb3J0YW50O31cclxuXHJcbiAgICAub3Bjb2VzIHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAub3BjYW8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMjBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wY2FvLXNlbGVjaW9uYWRhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIiNjb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4jaGVhZGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jc3RhdHVzIGlvbi1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufVxuXG4jcGVyZ3VudGFzIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4jcGVyZ3VudGFzIGlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbiNwZXJndW50YXMgLm9wY29lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4jcGVyZ3VudGFzIC5vcGNvZXMgLm9wY2FvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweCAyMHB4O1xufVxuI3Blcmd1bnRhcyAub3Bjb2VzIC5vcGNhbyBpb24taW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4jcGVyZ3VudGFzIC5vcGNvZXMgLm9wY2FvIHAge1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4jcGVyZ3VudGFzIC5vcGNvZXMgLm9wY2FvLXNlbGVjaW9uYWRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XG59Il19 */"

/***/ }),

/***/ "./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PacienteResponderSessaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteResponderSessaoComponent", function() { return PacienteResponderSessaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_sessao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/sessao */ "./src/app/models/sessao.ts");
/* harmony import */ var src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sessao.service */ "./src/app/services/sessao.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/paciente.service */ "./src/app/services/paciente.service.ts");






var PacienteResponderSessaoComponent = /** @class */ (function () {
    function PacienteResponderSessaoComponent(sessaoService, modalController, pacienteService, toastController) {
        this.sessaoService = sessaoService;
        this.modalController = modalController;
        this.pacienteService = pacienteService;
        this.toastController = toastController;
        //Paciente logado
        this.paciente = null;
    }
    PacienteResponderSessaoComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.pacienteService.getPacienteLogado()];
                    case 1:
                        _a.paciente = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Salva os dados do paciente em relação a sessão
     */
    PacienteResponderSessaoComponent.prototype.salvar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.comentario == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({ message: 'Informe o que achou da sessão', duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.sessaoService.responder(this.sessao.id, this.comentario);
                        return [4 /*yield*/, this.toastController.create({ message: 'Opinião salva', duration: 2000 })];
                    case 3:
                        toast = _a.sent();
                        this.modalController.dismiss({
                            'dismissed': true
                        });
                        _a.label = 4;
                    case 4:
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PacienteResponderSessaoComponent.ctorParameters = function () { return [
        { type: src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_3__["SessaoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_sessao__WEBPACK_IMPORTED_MODULE_2__["Sessao"])
    ], PacienteResponderSessaoComponent.prototype, "sessao", void 0);
    PacienteResponderSessaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paciente-responder-sessao',
            template: __webpack_require__(/*! raw-loader!./paciente-responder-sessao.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.html"),
            styles: [__webpack_require__(/*! ./paciente-responder-sessao.component.scss */ "./src/app/components/paciente-responder-sessao/paciente-responder-sessao.component.scss")]
        })
        /**
         * Modal do paciente para responder sobre a sessão ocorrida
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_sessao_service__WEBPACK_IMPORTED_MODULE_3__["SessaoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], PacienteResponderSessaoComponent);
    return PacienteResponderSessaoComponent;
}());



/***/ }),

/***/ "./src/app/components/progress-bar/progress-bar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/progress-bar/progress-bar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#progress-bar {\n  border: 1px solid grey;\n  border-radius: 10px;\n  width: 100%;\n  height: 20px;\n  content: \"\";\n}\n#progress-bar #progress {\n  margin: -1px 0px 0px -1px;\n  text-align: center;\n  border-radius: 10px;\n  color: white;\n  overflow: hidden;\n  height: 20px;\n  max-width: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb2a2a), to(#fa709a));\n  background-image: linear-gradient(to right, #eb2a2a 0%, #fa709a 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvQzpcXHhhbXBwXFxodGRvY3NcXG5hby1mdW1lLS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZ3Jlc3MtYmFyXFxwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyRkFBQTtFQUFBLHFFQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3Byb2dyZXNzLWJhciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29udGVudDogJyc7XHJcblxyXG4gICAgI3Byb2dyZXNzIHtcclxuICAgICAgICBtYXJnaW46IC0xcHggMHB4IDBweCAtMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ViMmEyYSAwJSwgI2ZhNzA5YSAxMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiI3Byb2dyZXNzLWJhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4jcHJvZ3Jlc3MtYmFyICNwcm9ncmVzcyB7XG4gIG1hcmdpbjogLTFweCAwcHggMHB4IC0xcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWIyYTJhIDAlLCAjZmE3MDlhIDEwMCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/progress-bar/progress-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/progress-bar/progress-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @author Carlos W. Gama
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.porcentagem = parseFloat(((this.atual * 100) / this.max).toFixed(2));
        this.porcentagem = Math.min(this.porcentagem, 100);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressBarComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressBarComponent.prototype, "atual", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/components/progress-bar/progress-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
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



/***/ }),

/***/ "./src/app/services/questionario.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/questionario.service.ts ***!
  \**************************************************/
/*! exports provided: QuestionarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionarioService", function() { return QuestionarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_questionario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/questionario */ "./src/app/models/questionario.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _paciente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var _conquista_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conquista.service */ "./src/app/services/conquista.service.ts");







var QuestionarioService = /** @class */ (function () {
    function QuestionarioService(pacienteService, conquistaService) {
        var _this = this;
        this.pacienteService = pacienteService;
        this.conquistaService = conquistaService;
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
            if (user != null) {
                _this.pacienteService.getPacienteLogado().then(function (p) {
                    _this.paciente = p;
                    _this.pacienteDB = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('pacientes');
                    _this.questionarioDB = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('pacientes').doc(p.uid).collection('questionariosDiarios');
                });
            }
        });
    }
    /**
     * Coleta os dados das respostas do paciente
     * @param questionario Questionario
     */
    QuestionarioService.prototype.responder = function (questionario) {
        //Adiciona o questionário
        console.log(questionario);
        this.questionarioDB.doc(questionario.dia).set(Object.assign({}, questionario));
        //Atualiza os dados do paciente
        var cigarrosEvitados = Math.max(0, this.paciente.mediaCigarros - questionario.cigarros);
        var economizado = cigarrosEvitados * this.paciente.precoCigarro;
        if (questionario.exercitou)
            this.paciente.diasPraticoExercicio++;
        if (!questionario.fumou) {
            this.paciente.diasSeguidosSemFumar++;
            this.paciente.diasSemFumar++;
            this.paciente.maxDiasSemFumar = Math.max(this.paciente.diasSeguidosSemFumar, this.paciente.maxDiasSemFumar);
        }
        else {
            this.paciente.diasSeguidosSemFumar = 0;
        }
        this.paciente.questionariosDiarios.push(questionario);
        this.paciente.cigarrosEvitados += cigarrosEvitados; //Atualiza totoal de cigarros
        this.paciente.dinheiroAcumulado += economizado; //Atualiza dinheiro acumlado e disponivel
        this.paciente.dinheiroDisponivel += economizado;
        this.paciente.ultimoDiaRespondido = moment__WEBPACK_IMPORTED_MODULE_2__(questionario.dia).add(1, 'days').format('YYYY-MM-DD'); //Atualiza a data do ultimo questionário respondido
        var paciente = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.paciente);
        console.log(paciente);
        delete paciente.questionariosDiarios;
        this.pacienteDB.doc(this.paciente.uid).set(paciente);
        this.conquistaService.liberarConquistas(this.paciente);
    };
    /**
     * Checa se tem questionário para responder
     */
    QuestionarioService.prototype.buscarQuestionariosAbertos = function () {
        var ultimoDiaRespondido = this.paciente.ultimoDiaRespondido;
        var diasResponder = [];
        var diaAtual = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
        //Recupera os dias não respondidos
        while (ultimoDiaRespondido < diaAtual) {
            diasResponder.push(ultimoDiaRespondido); //Adiciona no inicio do vetor
            ultimoDiaRespondido = moment__WEBPACK_IMPORTED_MODULE_2__(ultimoDiaRespondido).add(1, 'days').format('YYYY-MM-DD');
        }
        return diasResponder;
    };
    /**
     * Retorna o histórico dos dias que o paciente fumou ou não
    */
    QuestionarioService.prototype.buscarQuestionariosRespondidos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.questionarioDB.get().then(function (snapshot) {
                            var questionarios = [];
                            snapshot.forEach(function (doc) {
                                questionarios.push(Object.assign(new _models_questionario__WEBPACK_IMPORTED_MODULE_3__["Questionario"], doc.data()));
                            });
                            return questionarios;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestionarioService.ctorParameters = function () { return [
        { type: _paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"] },
        { type: _conquista_service__WEBPACK_IMPORTED_MODULE_6__["ConquistaService"] }
    ]; };
    QuestionarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Controla os dados dos questionários do paciente
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_paciente_service__WEBPACK_IMPORTED_MODULE_5__["PacienteService"], _conquista_service__WEBPACK_IMPORTED_MODULE_6__["ConquistaService"]])
    ], QuestionarioService);
    return QuestionarioService;
}());



/***/ })

}]);
//# sourceMappingURL=default~financeiro-financeiro-module~paciente-paciente-module~perfil-perfil-module-es5.js.map