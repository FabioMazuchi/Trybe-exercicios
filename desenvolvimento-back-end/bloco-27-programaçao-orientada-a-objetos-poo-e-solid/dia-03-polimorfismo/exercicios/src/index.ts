import { Employee } from "./classes/Employee";
import { Student } from "./classes/Student";
import { Subject } from "./classes/Subject";
import { Teacher } from "./classes/Teacher";

console.log('\n=========== STUDENT TEST ==============');
const bob = new Student('Bob', new Date('01-02-2020'));
const mary = new Student('Mary', new Date('10-03-2010'));

console.log(bob);
console.log(mary);

console.log('\n=========== EMPLOYEE TEST ==============');
const empl = new Employee('Fábio', new Date('09-01-1984'), 2350);
console.log(empl);

console.log('\n=========== SUBJECT TEST ==============');
const matematica = new Subject('Matemáica');

console.log(matematica.nome);

console.log('\n=========== TEACHER TEST ==============');
const math = new Subject('Matemática');
const julia = new Teacher('Júlia', new Date('02-10-2019'), 1200, math);

console.log(julia);







