"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dia, mes, ano) {
        if (!this.validDate(dia, mes, ano)) {
            this._dia = 1;
            this._mes = 1;
            this._ano = 1900;
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
        if (new Date(ano, mes, dia).getDate() !== dia)
            return false;
        return true;
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
    compare(date) {
        const dataAutalStr = `${this.ano}-${this.mes}-${this.dia}`;
        const dateStr = `${date.ano}-${date.mes}-${date.dia}`;
        if (new Date(dataAutalStr) > new Date(dateStr))
            return 1;
        if (new Date(dataAutalStr) < new Date(dateStr))
            return -1;
        return 0;
    }
    format(formato) {
        const consdicoes = [
            (!formato.match(/a{2,4}/g)),
            (!formato.match(/m{2}/g) && !formato.match(/M{1}/g)),
            (!formato.match(/d{2}/g))
        ];
        if (consdicoes.every(cond => cond))
            throw new Error(`O formato passado é inválido: ${formato}`);
        const day = this.dia > 9 ? this.dia.toString() : `0${this.dia.toString()}`;
        const mes = this.mes > 9 ? this.mes.toString() : `0${this.mes.toString()}`;
        const ano = this.ano.toString();
        const dataFomratada = formato
            .replace('dd', day)
            .replace('mm', mes)
            .replace('M', this.getMonthName())
            .replace('aaaa', ano)
            .replace('aa', ano.substring(-2));
        return dataFomratada;
    }
}
exports.Data = Data;
