import { Notas, SomaNotas } from "../interfaces";

export class Estudante {
	nome: string;
	matricula: number;
	notasProva: Notas;
	notasTrabalho: Notas;

	constructor(nome: string, matricula: number, notasProva: Notas, notasTrabalho: Notas) {
		this.nome = nome;
		this.matricula = matricula;
		this.notasProva = notasProva;
		this.notasTrabalho = notasTrabalho;
	}

	private soma(acc: number, nota: number): number { return acc + nota }

	private somaNotas(): SomaNotas {
		const arrayNotasProva = Object.values(this.notasProva);
		const somaNotasProva = arrayNotasProva.reduce(this.soma);
		const arrayNotasTrabalho = Object.values(this.notasTrabalho);
		const somaNotasTrabalho = arrayNotasTrabalho.reduce(this.soma);
		const result: SomaNotas = { somaNotasProva, somaNotasTrabalho };

		return result;
	}

	mediaNotas() {
		const { somaNotasProva, somaNotasTrabalho } = this.somaNotas();
		const lenghtProva = Object.values(this.notasProva).length; 
		const lenghtTrabalho = Object.values(this.notasTrabalho).length; 
		const result = (somaNotasProva / lenghtProva) + (somaNotasTrabalho / lenghtTrabalho);
		
		return result;
	}
}