"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Estudente_1 = require("./classes/Estudente");
const notasProva = { nota1: 8, nota2: 4, nota3: 3, nota4: 6 };
const notasTrabalho = { nota1: 8, nota2: 4 };
const est = new Estudente_1.Estudante('Fábio', 12, notasProva, notasTrabalho);
const media = est.mediaNotas();
console.log(`Aluno(a) ${est.nome} tem a média ${media}`);
