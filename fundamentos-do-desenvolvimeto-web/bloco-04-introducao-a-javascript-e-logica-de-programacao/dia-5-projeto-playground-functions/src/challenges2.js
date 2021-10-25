// Desafio 10
function techList(array, nome) {

  if (array.length === 5) {
    array = array.sort();
  }

  let resultado = '';
  let novoArray = [];
  let obj = {
    tech: array[0],
    name: nome
  }

  if (array.length == 0) {
    resultado = 'Vazio!';
  } else {
    for (let a of array) {
      obj = {
        tech: a,
        name: nome
      }
      novoArray.push(obj);
    }
    resultado = novoArray;
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(array) {
  let digito = '';
  let group1 = '';
  let group2 = '';
  let cont = 0;
  let resultado;

  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else {
    for (let n = 0; n < array.length; n++) {
      if (array[n] < 0 || array[n] > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        for (let i = 0; i < array.length; i++) {
          if (array[i] < 0 || array[i] > 9) {
          } else if (array[n] == array[i]) {
            cont++;
          }
        }
        if (cont >= 3) {
          resultado = 'não é possível gerar um número de telefone com esses valores';
          break;
        } else {
          if (n < 2) {
            digito += array[n];
          } else if (n > 1 && n <= 6) {
            group1 += array[n];
          } else if (n > 6) {
            group2 += array[n];
          }
        }
        resultado = '(' + digito + ')' + ' ' + group1 + '-' + group2;
        cont = '';
      }
    }
  }
  return resultado;
}

// Desafio 12
function triangleCheck(a, b, c) {
  abs_b_c = Math.abs(b - c);
  abs_a_c = Math.abs(a - c);
  abs_a_b = Math.abs(a - b);

  if (abs_b_c < a && a >= (b + c) || abs_a_c < b && b >= (a + c) || abs_a_b < c && c >= (a + c)) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}

// Desafio 13
function hydrate(string) {
  let soma = 0;
  let resultado = '';

  for (let s of string) {
    console.log(s);
    if (s == '1' || s == '2' || s == '3' || s == '4' || s == '5' || s == '6' || s == '7' || s == '8' || s == '9') {
      soma += Number(s);
    }
  }
  if (soma > 1) {
    resultado = soma + ' copos de água';
  } else {
    resultado = soma + ' copo de água';
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
