const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (gabarito, students) => {
	let contagem = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (students[i] === 'N.A') {
      continue;
		} else if (students[i] === gabarito[i]) {
			contagem += 1;
		} else {
			contagem -= 0.5;
		}
  }
  return `Total de pontos: ${contagem}`;
};

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS));
