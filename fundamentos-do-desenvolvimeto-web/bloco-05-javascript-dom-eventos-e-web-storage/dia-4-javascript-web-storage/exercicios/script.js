window.onload = function () {
	let select = document.querySelector('select');
	select.addEventListener('change', function () {
		let main = document.querySelector('.conteudo');
		let corFundo = select.value;
		main.style.backgroundColor = corFundo;
		localStorage.setItem('corFundo', corFundo);
	});

	let input = document.querySelector('input');
	input.addEventListener('change', function () {
		p = document.querySelector('.texto-alvo');
		let fontTamanho = input.value;
		p.style.fontSize = fontTamanho+'px';
		localStorage.setItem('fonteTamanho', fontTamanho+'px');
	});

	let selectTexto = document.querySelector('#texto-cor');
	selectTexto.addEventListener('change', function () {
		p = document.querySelector('.texto-alvo');
		let corFonte = selectTexto.value;
		p.style.color = corFonte;
		console.log(corFonte);
		localStorage.setItem('corFonte', corFonte);
	});
	

	let article = document.querySelector('.conteudo');
	let cor = localStorage.getItem('corFundo');
	article.style.backgroundColor = cor;

	let p = document.querySelector('.texto-alvo');
	let tamanhoFonte = localStorage.getItem('fonteTamanho');
	p.style.fontSize = tamanhoFonte;

	let corFonte = localStorage.getItem('corFonte');
	p.style.color = corFonte;
}

