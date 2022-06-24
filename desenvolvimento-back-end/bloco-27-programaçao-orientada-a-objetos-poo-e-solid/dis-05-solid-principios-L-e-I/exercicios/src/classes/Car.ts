import { IDrive } from "../interfaces";

export class Car implements IDrive {
	drive() { console.log('Dirigindo um carro!') }
}