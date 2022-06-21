import { Person } from "./classes/Person";
import { Student } from "./classes/Student";
import { Employee } from "./interfaces";

console.log('=========== PERSON TEST ==============');

const joao = new Person('João', new Date('10-02-2000'));
const maria = new Person('Maria', new Date('10-03-2010'));
console.log(joao);
console.log(maria);

// const bob = new Person('Bob', new Date('10-02-2000'));
// const silva = new Person('Silva', new Date('10-03-2022'));
// console.log(bob);
// console.log(silva);

console.log('\n=========== STUDENT TEST ==============');
const bob = new Student('Bob', new Date('01-02-2020'));
const mary = new Student('Mary', new Date('10-03-2010'));
console.log(bob);
console.log(mary);

console.log('\n=========== EMPLOYEE TEST ==============');
const employee: Employee = {
	registration: 'sdsfsfsdf098098',
	salary: 2200.00,
	admissionDate: new Date(),

	generateRegistration() {
		const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `${randomStr}`;	
	},
}

console.log(employee);
console.log(employee.generateRegistration());







