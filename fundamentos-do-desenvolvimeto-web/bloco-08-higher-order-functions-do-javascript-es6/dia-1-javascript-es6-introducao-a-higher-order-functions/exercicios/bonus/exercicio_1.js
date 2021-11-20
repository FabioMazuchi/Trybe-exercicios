const mage = {
  healthPoints: 130, // pontos de saúde
  intelligence: 45,
  mana: 125, 
  damage: undefined, // dano
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danodragao = () => Math.trunc(Math.random() * (dragon.strength - 15) + 15);

console.log(danodragao());
