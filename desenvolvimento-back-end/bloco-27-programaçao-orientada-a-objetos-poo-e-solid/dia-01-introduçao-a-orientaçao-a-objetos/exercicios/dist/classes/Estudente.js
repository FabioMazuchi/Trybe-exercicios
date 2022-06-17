"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
class Estudante {
    constructor(nome, matricula, notasProva, notasTrabalho) {
        this.nome = nome;
        this.matricula = matricula;
        this.notasProva = notasProva;
        this.notasTrabalho = notasTrabalho;
    }
    soma(acc, nota) { return acc + nota; }
    somaNotas() {
        const arrayNotasProva = Object.values(this.notasProva);
        const somaNotasProva = arrayNotasProva.reduce(this.soma);
        const arrayNotasTrabalho = Object.values(this.notasTrabalho);
        const somaNotasTrabalho = arrayNotasTrabalho.reduce(this.soma);
        const result = { somaNotasProva, somaNotasTrabalho };
        return result;
    }
    mediaNotas() {
        const { somaNotasProva, somaNotasTrabalho } = this.somaNotas();
        const lenghtProva = Object.values(this.notasProva).length;
        const lenghtTrabalho = Object.values(this.notasTrabalho).length;
        const result = (somaNotasProva / lenghtProva) + (somaNotasTrabalho / lenghtTrabalho);
        return result;
    }
}
exports.Estudante = Estudante;
