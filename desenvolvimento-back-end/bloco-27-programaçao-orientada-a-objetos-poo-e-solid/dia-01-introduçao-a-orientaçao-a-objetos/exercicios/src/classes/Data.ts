export class Data {
	private _dia: number;
	private _mes: number;
	private _ano: number;

	constructor(dia: number, mes: number, ano: number) {
		if(this.validDate(dia, mes, ano)) {
			this._dia = 1;
			this._mes = 1;
			this._ano = 1900;	
			console.log(`Data criada foi: ${this.dia}/${this.mes}/${this.ano}`);
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

	validDate(dia: number, mes: number, ano: number): Boolean {
		if (dia <= 0 || mes <= 0 || ano < 1900) return true;
		return false;
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
}