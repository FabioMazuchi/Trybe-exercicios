import { Employee } from "./classes/Employee";
import { EvaluationResult } from "./classes/EvaluationResult";
import { Exam } from "./classes/Exam";
import { Order } from "./classes/Order";
import { OrderItem } from "./classes/OrderItem";
import { Student } from "./classes/Student";
import { Subject } from "./classes/Subject";
import { Teacher } from "./classes/Teacher";
import { Work } from "./classes/Work";

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'))
const math = new Subject('Matemática');
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const examMath = new Exam(marta, 25);
const workMath = new Work(marta, 50); 

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));

console.log('Avaliaçoes: ', carolina.evaluationsResults);
console.log('Soma das notas: ', carolina.somaNotas());
console.log('Média das notas: ', carolina.mediaNotas());

const lanche = new OrderItem('X-burguer', 12.5);
const suco = new OrderItem('Suco de laranja', 4.7);

const carolOrder = new Order(carolina, [lanche, suco], 'dinheiro', 0.1);

console.log('Pedido da Carol: ', carolOrder);











