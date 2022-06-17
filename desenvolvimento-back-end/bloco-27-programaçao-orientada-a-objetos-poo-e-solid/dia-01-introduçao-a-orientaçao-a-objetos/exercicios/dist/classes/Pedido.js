"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cliente, itens, desconto) {
        this.cliente = cliente;
        this.itens = itens;
        this.desconto = desconto;
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
