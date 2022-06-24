import { ICepAPI } from "../interfaces";

export class CepService {
	private readonly cepApi: ICepAPI;

	constructor(cepApi: ICepAPI) {
		this.cepApi = cepApi;
	}

	addressByCep(cep: string, num: number) {
		return this.cepApi.getAddressByCEP(cep, num);
	}

	cepByAddress(address: string, num: number) {
		return this.cepApi.getCepByAddress(address, num);
	}
}