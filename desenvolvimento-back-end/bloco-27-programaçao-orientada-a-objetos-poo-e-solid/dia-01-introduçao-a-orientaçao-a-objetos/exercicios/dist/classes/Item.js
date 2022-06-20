"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(nome, preco) {
        this._nome = String();
        this._preco = Number();
        this.nome = nome;
        this.preco = preco;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.length < 3)
            throw new Error('O nome do item deve conter no mínimo 3 caracteres.');
        this._nome = value;
    }
    get preco() {
        return this._preco;
    }
    set preco(value) {
        if (value < 0)
            throw new Error('O preço deve ser positivo.');
        this._preco = value;
    }
}
exports.Item = Item;
