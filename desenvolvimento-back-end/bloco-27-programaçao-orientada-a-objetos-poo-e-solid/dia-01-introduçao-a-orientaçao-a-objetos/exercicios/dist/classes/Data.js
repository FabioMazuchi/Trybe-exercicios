"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const validDate_1 = require("../utils/validDate");
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
class Data {
    constructor(dia, mes, ano) {
        if ((0, validDate_1.validDate)(dia, mes, ano)) {
            this.dia = '01';
            this.mes = '01';
            this.ano = '1900';
            console.log(`Data criada foi: ${this.dia}/${this.mes}/${this.ano}`);
        }
        else {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    }
    getMonthName() {
        const data = `${this.mes}-${this.dia}-${this.ano}`;
        const myData = new Date(data);
        const index = myData.getMonth();
        console.log(meses[index]);
    }
}
exports.Data = Data;
