"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome) {
        this._nome = String();
        this.nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.length < 3)
            throw new Error('O nome do cliente deve conter no mínimo 3 caracteres.');
        this._nome = value;
    }
}
exports.Cliente = Cliente;
