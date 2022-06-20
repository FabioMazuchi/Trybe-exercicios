"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dia, mes, ano) {
        if (this.validDate(dia, mes, ano)) {
            this._dia = 1;
            this._mes = 1;
            this._ano = 1900;
            console.log(`Data criada foi: ${this.dia}/${this.mes}/${this.ano}`);
        }
        else {
            this._dia = dia;
            this._mes = mes;
            this._ano = ano;
        }
    }
    get dia() {
        return this._dia;
    }
    set dia(value) {
        this._dia = value;
    }
    get mes() {
        return this._mes;
    }
    set mes(value) {
        this._mes = value;
    }
    get ano() {
        return this._ano;
    }
    set ano(value) {
        this._ano = value;
    }
    validDate(dia, mes, ano) {
        if (dia <= 0 || mes <= 0 || ano < 1900)
            return true;
        return false;
    }
    getMonthName() {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const data = `${this.mes}-${this.dia}-${this.ano}`;
        const myData = new Date(data);
        const index = myData.getMonth();
        return meses[index];
    }
    isLeapYear() {
        // https://pt.stackoverflow.com/questions/21739/como-validar-data-levando-em-conta-ano-bissexto
        return ((this._ano % 4 == 0) && (this._ano % 100 != 0)) || (this._ano % 400 == 0);
    }
}
exports.Data = Data;
