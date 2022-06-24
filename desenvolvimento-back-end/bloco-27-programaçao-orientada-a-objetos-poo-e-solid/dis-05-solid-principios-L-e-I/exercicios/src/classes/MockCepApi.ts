import { ICepAPI } from "../interfaces";

export class MockCepApi implements ICepAPI {
	async getAddressByCEP(cep: string, number: number): Promise<string> {
		return `O endereço para o "CEP: ${cep}, nº: ${number}" é "endereço mock"`;
	}
	async getCepByAddress(address: string, number: number): Promise<string> {
		return `O CEP para: "${address}, nº: ${number}" é "CEP mock"`;
	}
}