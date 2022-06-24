import { IVehicle } from "../interfaces";

export class FuturistcCar implements IVehicle {
	drive() { console.log('Drive a futuristic car') }
	
	fly() { console.log('Flying a futuristic car') }
}