"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDate = void 0;
function validDate(dia, mes, ano) {
    if (dia <= 0 || mes <= 0 || ano < 1900)
        return true;
    return false;
}
exports.validDate = validDate;
