"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDate = void 0;
function validDate(dia, mes, ano) {
    if (Number(dia) <= 0 || Number(mes) <= 0 || Number(ano) < 1900)
        return true;
    return false;
}
exports.validDate = validDate;
