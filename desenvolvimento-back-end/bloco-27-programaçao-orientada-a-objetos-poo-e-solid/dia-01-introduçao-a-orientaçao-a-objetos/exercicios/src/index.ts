import { Estudante } from "./classes/Estudente";
import { Notas } from "./interfaces";

const notasProva: Notas = { nota1: 8, nota2: 4 ,nota3: 3 , nota4: 6 } 
const notasTrabalho: Notas = { nota1: 8, nota2: 4 }

const est = new Estudante('Fábio', 12, notasProva, notasTrabalho);
const media = est.mediaNotas();
console.log(`Aluno(a) ${est.nome} tem a média ${media}`);
