const pes = 75;
const alt = 1.70;

const calculaImc = () => {
	const peso = pes;
	const altura = alt;

	console.log(`Peso: ${peso}, Altura: ${altura}`);

	const imc = (peso / (altura * altura)).toFixed(2);

	console.log(`IMC: ${imc}`);
}

calculaImc();