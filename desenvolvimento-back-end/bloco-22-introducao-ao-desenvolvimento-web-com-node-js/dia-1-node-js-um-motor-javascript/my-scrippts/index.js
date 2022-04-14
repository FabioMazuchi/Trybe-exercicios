const readline = require("readline-sync");
const imc = require("./imc");
const sorteio = require("./sorteio");
const calcVeloc = require("./velocidade");

const selectScript = () => {
  const script = readline.questionInt("[1]IMC\n[2]Sorteio\n[3]Velocidade ");

  switch (script) {
    case 1:
      imc();
      break;
    case 2:
      sorteio();
      break;
    case 3:
      calcVeloc();
      break;
  }
};

selectScript();
