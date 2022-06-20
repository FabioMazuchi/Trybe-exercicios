"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
class Estudante {
    constructor(nome, matricula, notasProva, notasTrabalho) {
        this._notasProva = Array();
        this._notasTrabalho = Array();
        this._nome = nome;
        this._matricula = matricula;
        this.notasProva = notasProva;
        this.notasTrabalho = notasTrabalho;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        this._matricula = value;
    }
    get notasProva() {
        return this._notasProva;
    }
    set notasProva(value) {
        if (value.length !== 4)
            throw new Error('É preciso ter 4 notas de prova.');
        this._notasProva = value;
    }
    get notasTrabalho() {
        return this._notasTrabalho;
    }
    set notasTrabalho(value) {
        if (value.length !== 2)
            throw new Error('É preciso ter 2 notas de trabalho.');
        this._notasTrabalho = value;
    }
    soma(acc, nota) { return acc + nota; }
    somaNotas() {
        const arrayNotas = [...this.notasProva, ...this._notasTrabalho];
        return arrayNotas.reduce(this.soma);
    }
    mediaNotas() {
        const somaNotas = this.somaNotas();
        const divisor = this._notasProva.length + this._notasTrabalho.length;
        return somaNotas / divisor;
    }
}
exports.Estudante = Estudante;
