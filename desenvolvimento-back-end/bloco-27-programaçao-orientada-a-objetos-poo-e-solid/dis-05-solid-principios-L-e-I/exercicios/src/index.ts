import { CepService } from "./classes/CepService";
import { FooCepAPI } from "./classes/FooCepAPI";

async function main() {
	const fooCep = new FooCepAPI();
	const cepSvc = new CepService(fooCep);

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
}

main();