// Desafio 1
function compareTrue(par1, par2) {
  let resultado = '';

  if (par1 && par2) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let pos1 = array[0];
  let ultimaPos = array[array.length - 1];

  return ultimaPos + ', ' + pos1;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let maior = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  for (let n = 0; n < array.length; n++) {
    if (array[n] == maior) {
      cont++;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  let d1 = cat1 - mouse; //1 - 0 = 1
  let d2 = cat2 - mouse; //1-2 = -1 

  if (d1 < 0) {
    d1 = d1 - d1 - d1;
  }

  if (d2 < 0) {
    d2 = d2 - d2 - d2;
  }

  if (d1 > d2) {
    resultado = 'cat2';
  } else if (d2 > d1) {
    resultado = 'cat1';
  } else if (d1 == d2) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  let div = [];
  let cont = 0;

  for (let n of numeros) {
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        div.push(i);
      }
    }
    for (let k = 1; k < div.length; k++) {
      if (div.length <= 3 && div[k] == 3) {
        resultado.push('fizz');
      } else if (div.length <= 3 && div[k] == 5) {
        resultado.push('buzz');
      } else if (div[k] == 5 || div[k] == 3) {
        cont++;
        if (cont == 2) {
          resultado.push('fizzBuzz');
        }
      } else if (div[k] % 3 !== 0 && div[k] % 5 !== 0) {
        resultado.push('bug!');
      }
    }
    cont = '';
    div.splice(0, div.length);
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let novaString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] == 'a') {
      novaString += '1';
    } else if (string[i] == 'e') {
      novaString += '2';
    } else if (string[i] == 'i') {
      novaString += '3';
    } else if (string[i] == 'o') {
      novaString += '4';
    } else if (string[i] == 'u') {
      novaString += '5';
    } else {
      novaString += string[i];
    }
  }
  return novaString;
}

function decode(string) {
  let novaString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] == '1') {
      novaString += 'a';
    } else if (string[i] == '2') {
      novaString += 'e';
    } else if (string[i] == '3') {
      novaString += 'i';
    } else if (string[i] == '4') {
      novaString += 'o';
    } else if (string[i] == '5') {
      novaString += 'u';
    } else {
      novaString += string[i];
    }
  }
  return novaString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
