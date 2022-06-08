import Car from './Car';
import Colors from './Colors';
import Doors from './Doors'; 
import Directions from './Directions';
import SugarPizza from './SuggarPizza';
import VegetarianPizza from './VegetarianPizza';
import CommonPizza from './CommonPizza';

const gol = new Car('Volksvagen', Colors.PRATA, 4);

gol.openTheDoor(Doors.MOTORISTA);
gol.closeTheDoor(Doors.MOTORISTA);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.ESQUERDA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.DIREITA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.DIREITA);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.ATRAS_DO_CARONA);
gol.closeTheDoor(Doors.ATRAS_DO_CARONA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.DIREITA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.ESQUERDA);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.DIREITA);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.ATRAS_DO_CARONA);
gol.closeTheDoor(Doors.ATRAS_DO_CARONA);
gol.speedUp();

console.log('\n========= PIZZARIA ============');
const calabreza: CommonPizza = { flavor: 'Calabresa', slices: 6 }
const frango: CommonPizza = { flavor: 'Frango', slices: 8 }
const pepperoni: CommonPizza = { flavor: 'Pepperoni', slices: 8 }
const marguerita: VegetarianPizza = { flavor: 'Marguerita', slices: 8 }
const palmito: VegetarianPizza = { flavor: 'Palmito', slices: 8 }
const goiabadaQueijo: SugarPizza = { flavor: 'Goiabada com Queijo', slices: 4 }

console.log(calabreza);
console.log(frango);
console.log(pepperoni);
console.log(marguerita);
console.log(palmito);
console.log(goiabadaQueijo);


