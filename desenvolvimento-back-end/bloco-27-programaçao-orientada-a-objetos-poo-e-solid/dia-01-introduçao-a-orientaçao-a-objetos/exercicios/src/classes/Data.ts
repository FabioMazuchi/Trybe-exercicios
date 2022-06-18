import { validDate } from '../utils/validDate';
const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

export class Data {
	dia: string;
	mes: string;
	ano: string;

	constructor(dia: string, mes: string, ano: string) {
		if(validDate(dia, mes, ano)) {
			this.dia = '01';
			this.mes = '01';
			this.ano = '1900';	
			console.log(`Data criada foi: ${this.dia}/${this.mes}/${this.ano}`);
		} else {
			this.dia = dia;
			this.mes = mes;
			this.ano = ano;
		}
	}

	getMonthName() {
		const data = `${this.mes}-${this.dia}-${this.ano}`;
		const myData = new Date(data);
		const index = myData.getMonth();
		console.log(meses[index]);
	}
}