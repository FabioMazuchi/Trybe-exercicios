function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function criandoDiasDoMes() {
	let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
	let diasMes = document.getElementById('days');

	for (let d of dezDaysList) {
		let dia = d;
		let diaLi = document.createElement('li');
		
		if(dia === 24 || dia === 25 || dia === 31) {
			diaLi.classList.add('holiday');
		}

		if(dia === 4 || dia === 11 || dia === 18 || dia === 25) {
			diaLi.classList.add('friday');
		}

		
		diaLi.classList.add('day');
		diaLi.innerHTML = dia;

		diasMes.appendChild(diaLi);
	}
}

criandoDiasDoMes();

function criaBotaoFeriado(feriados) {
	const botao = document.createElement('button');
	botao.innerHTML = 'Feriados';
	botao.id = 'btn-holiday';
	containerBotao = document.querySelector('.buttons-container');

	containerBotao.appendChild(botao);
	console.log(containerBotao);
}

criaBotaoFeriado();