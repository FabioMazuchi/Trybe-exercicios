const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};
  
const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

const adicionaTurno = (lesson, key, value) => lesson[key] = value;

adicionaTurno(lesson2, 'turno', 'noite');

const listarKeys = (object) => Object.keys(object);

const objectLenght = (object) => Object.keys(object).length;

const listValues = (object) => Object.values(object);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalEstudantes = (object) => {
	const arrayObj = Object.entries(object);
	let soma = 0;
	for(let i = 0; i < arrayObj.length; i += 1){
		soma += arrayObj[i][1].numeroEstudantes;
	}
	return soma;
}

const getValue = (object, pos) => {
	const keys = Object.entries(object);
	return keys[pos][1];
} 

getValue(lesson1, 0);


