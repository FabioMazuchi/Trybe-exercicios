window.onload = function () {
	const btnForm = document.querySelector('.botao-entrar');

	btnForm.addEventListener('click', validarLogin);
};

function validarLogin(e) {
	e.preventDefault();
	const email = document.querySelector('input[name=email]').value;
	const senha = document.querySelector('input[name=password]').value;

	if(email === 'tryber@teste.com' && senha === '123456') {
		alert('Olá, Tryber!');
	}else{
		alert('Email ou senha inválidos.')
	}
	console.log(senha);
}
