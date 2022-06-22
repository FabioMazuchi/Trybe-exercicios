"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject(_nome) {
        this._nome = _nome;
        this.nome = _nome;
    }
    Object.defineProperty(Subject.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            if (value.length < 3)
                throw new Error('O nome tem que ter no mínimo 3 caracteres.');
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
exports.Subject = Subject;
