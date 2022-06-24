import { Airplane } from "./classes/AirPlane";
import { Car } from "./classes/Car";
import { CepService } from "./classes/CepService";
import { FooCepAPI } from "./classes/FooCepAPI";
import { FuturistcCar } from "./classes/FuturisticCar";
import { MockCepApi } from "./classes/MockCepApi";

async function main() {
	const fooCep = new FooCepAPI();
	const cepSvc = new CepService(fooCep);

	console.log('=========== FOO CEP ==============');
	console.log(
		'get address by cep',
		'->',
		await cepSvc.addressByCep('xx.xxx-xx', 10),
	);
	console.log(
		'get cep by address',
		'->',
		await cepSvc.cepByAddress('street foo, betwen bar and baz', 10),
	);

	const mock = new MockCepApi();
	const cepSvc1 = new CepService(mock);
	console.log('\n=========== MOCK ==============');
	console.log(
		'get address by cep',
		'->',
		await cepSvc1.addressByCep('xx.xxx-xx', 10),
	);
	console.log(
		'get cep by address',
		'->',
		await cepSvc1.cepByAddress('street foo, betwen bar and baz', 10),
	);

	console.log('\n=========== VEÍCULOS ==============');
	const carFuturist = new FuturistcCar();
	const car = new Car();
	const aviao = new Airplane();

	carFuturist.drive();
	carFuturist.fly();
	car.drive();
	aviao.fly();
}

main();