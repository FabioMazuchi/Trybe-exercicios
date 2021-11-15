// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
	if(id === '' || detail === ''){
		throw Error('Valores que não sejam strings não são permitidos')
	}	
	if(!isNaN(id) || isNaN(detail)){
		throw Error('Valores que não sejam strings não são permitidos')
	}
	const obj = Object.entries(professionalBoard);
	for (let i = 0; i < obj.length; i++) {
		if(obj[i][1].id === id){
			return(obj[i][1][detail]);
		}
	}
};

module.exports = searchEmployee;
