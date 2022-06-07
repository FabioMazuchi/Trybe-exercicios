import Colors from './Colors'
import Doors from './Doors'
import Directions from './Directions'

class Car {
	brand: string
	color: Colors
	doors: number

	constructor(brand: string, color: Colors, doors: number) {
		this.brand = brand
		this.color = color
		this.doors = doors
	}

	turnOn() {
		console.log('O carro está ligado!');
	}

	turnOff() {
		console.log('O carro está desligado');
	}

	speedUp() {
		console.log('Acelerando...');
	}

	speedDown() {
		console.log('Reduzindo a velocidade...');
	}

	stop() {
		console.log('Freiando...');
	}

	honk() {
		console.log('bi bi bi...');
	}

	openTheDoor(door: Doors) {
		console.log(`A porta está aberta ${door}`);
	}

	closeTheDoor(door: Doors) {
		console.log(`A porta está fechada ${door}`);
	}

	turn(direction: Directions) {
		console.log(`Virando o carro para a ${direction}`);
	}
}

export default Car