import { IFly } from "../interfaces";

export class Airplane implements IFly {
	fly() { console.log('Veículo está voando!') }
}