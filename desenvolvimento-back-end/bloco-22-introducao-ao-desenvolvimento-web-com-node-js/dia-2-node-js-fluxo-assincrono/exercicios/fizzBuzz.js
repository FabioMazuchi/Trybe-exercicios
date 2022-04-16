const fizzBuzz = (n) => {
	const promisse = new Promise((resolve, reject) => {
		if (n % 3 === 0 && n % 5 === 0) {
			resolve('FizzBuzz');
		}
		if (n % 3 === 0) {
			resolve('Fizz');
		}
		if (n % 5 === 0) {
			resolve('Buzz');
		}
		reject(`Valor inválido: ${n}`);
	});

	return promisse;
};

const main = async () => {
	try {
		const res = await fizzBuzz(1);
		console.log(res);
	} catch (e) {
		console.log(e);
	}
};

main();