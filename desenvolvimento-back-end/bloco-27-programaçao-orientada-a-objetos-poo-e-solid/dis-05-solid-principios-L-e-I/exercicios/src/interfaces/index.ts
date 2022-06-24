export interface ICepAPI {
	getAddressByCEP(cep: string, number: number): Promise<string>
	getCepByAddress(address: string, number: number): Promise<string>
}

export interface IVehicle {
	drive(): void
	fly(): void
}

export interface IDrive {
	drive(): void
}

export interface IFly {
	fly(): void
}