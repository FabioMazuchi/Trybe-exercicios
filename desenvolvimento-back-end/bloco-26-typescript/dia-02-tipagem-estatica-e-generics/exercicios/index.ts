import Car from './Car';
import Colors from './Colors';
import Doors from './Doors'; 
import Directions from './Directions';
import Pizza from './Pizza';

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
const calabreza: Pizza = { flavor: 'Calabreza', slices: 8 }
const marguerita: Pizza = { flavor: 'Marguerita', slices: 6 }
const nutela: Pizza = { flavor: 'Nutela', slices: 4 }

console.log(calabreza);
console.log(marguerita);
console.log(nutela);


