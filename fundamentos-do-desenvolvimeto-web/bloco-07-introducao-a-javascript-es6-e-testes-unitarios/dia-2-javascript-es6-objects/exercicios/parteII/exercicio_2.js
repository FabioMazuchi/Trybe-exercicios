const maiorPalavra = frase => {
	let palavras = frase.split(' ');
	let maior = 0;
	let resultado = '';

	for (let i = 0; i < palavras.length; i += 1) {
		if(palavras[i].length > maior) {
			maior = palavras[i].length;
			resultado = palavras[i];
		}		
	}
	return resultado;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
