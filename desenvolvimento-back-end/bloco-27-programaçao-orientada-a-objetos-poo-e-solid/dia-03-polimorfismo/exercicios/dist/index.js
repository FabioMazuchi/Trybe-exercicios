"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./classes/Person");
var Student_1 = require("./classes/Student");
var Subject_1 = require("./classes/Subject");
var Teacher_1 = require("./classes/Teacher");
console.log('=========== PERSON TEST ==============');
var joao = new Person_1.Person('João', new Date('10-02-2000'));
var maria = new Person_1.Person('Maria', new Date('10-03-2010'));
console.log(joao);
console.log(maria);
// const bob = new Person('Bob', new Date('10-02-2000'));
// const silva = new Person('Silva', new Date('10-03-2022'));
// console.log(bob);
// console.log(silva);
console.log('\n=========== STUDENT TEST ==============');
var bob = new Student_1.Student('Bob', new Date('01-02-2020'));
var mary = new Student_1.Student('Mary', new Date('10-03-2010'));
console.log(bob);
console.log(mary);
console.log('\n=========== EMPLOYEE TEST ==============');
var employee = {
    registration: 'sdsfsfsdf098098',
    salary: 2200.00,
    admissionDate: new Date(),
    generateRegistration: function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "".concat(randomStr);
    },
};
console.log(employee);
console.log(employee.generateRegistration());
console.log('\n=========== SUBJECT TEST ==============');
var matematica = new Subject_1.Subject('Matemáica');
// const geo = new Subject('Ge');
console.log(matematica.nome);
// console.log(geo.nome);
console.log('\n=========== TEACHER TEST ==============');
var math = new Subject_1.Subject('Matemática');
var julia = new Teacher_1.Teacher('Júlia', new Date('02-10-2019'), 1200, math);
console.log(julia);
