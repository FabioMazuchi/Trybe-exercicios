"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cliente, itens, metodoPagamento, desconto) {
        this._itens = [];
        this._desconto = 0;
        this._cliente = cliente;
        this.itens = itens;
        this._metodoPagamento = metodoPagamento;
        this.desconto = desconto;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get itens() {
        return this._itens;
    }
    set itens(value) {
        if (value.length === 0)
            throw new Error('O pedido deve ter pelo meno um item.');
        this._itens = value;
    }
    get metodoPagamento() {
        return this._metodoPagamento;
    }
    set metodoPagamento(value) {
        this._metodoPagamento = value;
    }
    get desconto() {
        return this._desconto;
    }
    set desconto(value) {
        if (value < 0)
            throw new Error('O desconto não pode ser um valor negatívo.');
        this._desconto = value;
    }
    soma(acc, preco) { return acc + preco; }
    total() {
        const arrayPreco = this.itens.map(item => item.preco);
        const soma = arrayPreco.reduce(this.soma);
        return soma;
    }
    totalDesconto() {
        const total = this.total();
        const totalDesconto = total - (total * this.desconto);
        return totalDesconto;
    }
}
exports.Pedido = Pedido;
