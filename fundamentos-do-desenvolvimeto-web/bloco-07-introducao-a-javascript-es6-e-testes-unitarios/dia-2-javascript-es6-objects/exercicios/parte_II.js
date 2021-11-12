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

console.log(allLessons);


