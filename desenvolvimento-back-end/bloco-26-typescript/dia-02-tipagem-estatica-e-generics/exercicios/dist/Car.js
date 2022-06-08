"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
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
    openTheDoor(door) {
        console.log(`A porta está aberta ${door}`);
    }
    closeTheDoor(door) {
        console.log(`A porta está fechada ${door}`);
    }
    turn(direction) {
        console.log(`Virando o carro para a ${direction}`);
    }
}
exports.default = Car;
