export class Data {
	private _dia: number;
	private _mes: number;
	private _ano: number;

	constructor(dia: number, mes: number, ano: number) {
		if(!this.validDate(dia, mes, ano)) {
			this._dia = 1;
			this._mes = 1;
			this._ano = 1900;	
		} else {
			this._dia = dia;
			this._mes = mes;
			this._ano = ano;
		}
	}

	public get dia(): number {
		return this._dia;
	}

	public set dia(value: number) {
		this._dia = value;
	}

	public get mes(): number {
		return this._mes;
	}

	public set mes(value: number) {
		this._mes = value;
	}

	public get ano(): number {
		return this._ano;
	}

	public set ano(value: number) {
		this._ano = value;
	}

	private validDate(dia: number, mes: number, ano: number): Boolean {
		if (new Date(ano, mes, dia).getDate() !== dia) return false
		return true;
	}

	getMonthName(): string {
		const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
		const data = `${this.mes}-${this.dia}-${this.ano}`;
		const myData = new Date(data);
		const index = myData.getMonth();
		
		return meses[index];
	}

	isLeapYear(): Boolean {
		// https://pt.stackoverflow.com/questions/21739/como-validar-data-levando-em-conta-ano-bissexto
		return ((this._ano % 4 == 0) && (this._ano % 100 != 0)) || (this._ano % 400 == 0);
	}

	compare(date: Data): number {
		const dataAutalStr = `${this.ano}-${this.mes}-${this.dia}`;
		const dateStr = `${date.ano}-${date.mes}-${date.dia}`

		if (new Date(dataAutalStr) > new Date(dateStr)) return 1;
		if (new Date(dataAutalStr) < new Date(dateStr)) return -1;
		return 0;
	}

	format(formato: string): string {
		const consdicoes: boolean[] = [
			(!formato.match(/a{2,4}/g)),
			(!formato.match(/m{2}/g) && !formato.match(/M{1}/g)),
			(!formato.match(/d{2}/g))
		];

		if(consdicoes.every(cond => cond)) throw new Error(`O formato passado é inválido: ${formato}`);

		const day = this.dia > 9 ? this.dia.toString() : `0${this.dia.toString()}`
		const mes = this.mes > 9 ? this.mes.toString() : `0${this.mes.toString()}`
		const ano = this.ano.toString();

		const dataFomratada = formato
		.replace('dd', day)
		.replace('mm', mes)
		.replace('M', this.getMonthName())
		.replace('aaaa', ano)
		.replace('aa', ano.substring(-2))

		return dataFomratada
	}
}