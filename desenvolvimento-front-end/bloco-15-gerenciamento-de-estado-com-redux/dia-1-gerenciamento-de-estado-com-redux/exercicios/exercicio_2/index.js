const ESTADO_INICIAL_1 = {
	nome: 'Rodrigo',
	sobrenome: 'Santos da Silva',
	endereco: 'Rua Soldado Mathias, 765',
	cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
	nome: 'Bruna',
	sobrenome: 'Santana Oliveira',
	endereco: 'Rua Holanda, 332',
	cidade: 'São Paulo',
};

const alteraNomeSobrenome1 = (nome, sobrenome) => ({
	type: "ALTERA_NOME_SOBRENOME_1",
	nome,
	sobrenome,
});

const alteraNomeSobrenome2 = (nome, sobrenome) => ({
	type: "ALTERA_NOME_SOBRENOME_2",
	nome,
	sobrenome,
});

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
	switch (action.type) {
		case "ALTERA_NOME_SOBRENOME_1":
			return {
				...state,
				nome: action.nome,
				sobrenome: action.sobrenome,
			}
		default:
			return state;
	}
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
	switch (action.type) {
		case "ALTERA_NOME_SOBRENOME_2":
			return {
				...state,
				nome: action.nome,
				sobrenome: action.sobrenome,
			}
		default:
			return state;
	}
};

const reducerCombinado = Redux.combineReducers({
	meuPrimeiroReducer,
	meuSegundoReducer,
})

const store = Redux.createStore(reducerCombinado);

console.log(store.getState());

window.onload = () => {
	setTimeout(() => {
		store.dispatch(alteraNomeSobrenome1('Fábio', 'Mazuchi'));
		store.dispatch(alteraNomeSobrenome2('Rosa', 'Filipina'));
	}, 3000)
}

store.subscribe(() => {
	document.getElementById('nome-1').innerText = store.getState().meuPrimeiroReducer.nome;
	document.getElementById('sobrenome-1').innerText = store.getState().meuPrimeiroReducer.sobrenome;
	document.getElementById('nome-2').innerText = store.getState().meuSegundoReducer.nome;
	document.getElementById('sobrenome-2').innerText = store.getState().meuSegundoReducer.sobrenome;
	console.log(store.getState());
})
