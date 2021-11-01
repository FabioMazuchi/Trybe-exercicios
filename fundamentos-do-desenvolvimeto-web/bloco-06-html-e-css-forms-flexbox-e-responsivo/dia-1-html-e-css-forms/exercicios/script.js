const dataInput = document.querySelector("#data_inicio");
const divErro = document.querySelector('.erro');
const select = document.querySelector("#estados");

function criarEstados() {
  // Fonte: https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm
  const estados = [
    { sigla: "NM", estado: "Nenhum" },
    { sigla: " AC", estado: "Acre" },
    { sigla: "AL", estado: "Alagoas" },
    { sigla: "AP", estado: "Amapá" },
    { sigla: "AM", estado: "Amazonas" },
    { sigla: "BA", estado: "Bahia" },
    { sigla: "CE", estado: "Ceará" },
    { sigla: "ES", estado: "Espírito Santo" },
    { sigla: "GO", estado: "Goiás" },
    { sigla: "MA", estado: "Maranhão" },
    { sigla: "MT", estado: "Mato Grosso" },
    { sigla: "MS", estado: "Mato Grosso do Sul" },
    { sigla: "MG", estado: "Minas Gerais" },
    { sigla: "PA", estado: "Pará" },
    { sigla: "PB", estado: "Paraíba" },
    { sigla: "PR", estado: "Paraná" },
    { sigla: "PE", estado: "Pernambuco" },
    { sigla: "PI", estado: "Piauí" },
    { sigla: "RJ", estado: "Rio de Janeiro" },
    { sigla: "RN", estado: "Rio Grande do Norte" },
    { sigla: "RS", estado: "Rio Grande do Sul" },
    { sigla: "RO", estado: "Rondônia" },
    { sigla: "RR", estado: "Roraima" },
    { sigla: "SC", estado: "Santa Catarina" },
    { sigla: "SP", estado: "São Paulo" },
    { sigla: "SE", estado: "Sergipe" },
    { sigla: "TO", estado: "Tocantins" },
    { sigla: "DF", estado: "Distrito Federal" },
  ];

  for (let i = 0; i < estados.length; i += 1) {
    const option = document.createElement("option");
    option.value = estados[i].sigla;
    option.innerHTML = estados[i].estado;
    select.appendChild(option);
  }
}

function alert(msg) {
  const divAlert = document.querySelector(".alert");

  divAlert.innerHTML = msg;
}

function exibirInfo(key, valor) {
  const divInfo = document.querySelector("#info");
  const p = document.createElement("p");
  p.innerHTML = key + valor;
  divInfo.appendChild(p);
  console.log(divInfo);
}

function getSelected() {
  let selecinado;

  for (let i = 0; i < select.length; i++) {
    if (select[i].selected === true) {
      selecinado = select[i].innerHTML;
    }
  }
  return selecinado;
}

function getRadio() {
  const selectMoradia = document.querySelectorAll('input[name=moradia]');
  let resultado;

  for (let i = 0; i < selectMoradia.length; i++) {
    if(selectMoradia[i].checked){
      resultado = selectMoradia[i].value;
    }
  }
  return resultado;
}

function enviarDados(event) {
  event.preventDefault();
  let nome = document.querySelector("[name=nome]").value;
  let email = document.querySelector("[name=email]").value;
  let cpf = document.querySelector("[name=cpf]").value;
  let endereco = document.querySelector("[name=endereco]").value;
  let cidade = document.querySelector("[name=cidade]").value;
  let estado = getSelected();
  let moradia = getRadio();

  if (nome.length === 0) {
    alert("Campo nome vazio!");
  } else if (nome.length > 40) {
    alert("Valor de nome inválido");
  } else if (email.length === 0) {
    alert("Campo email vazio!");
  } else if (email.length > 50) {
    alert("Valor de email inválido!");
  }else if (cpf.length === 0) {
    alert('Campo CPF vazio!');
  }else if (cpf.length > 11) {
    alert('Valor de CPF inválido');
  }else if (endereco.length === 0) {
    alert('Campo endereço vazio');
  }else if (endereco.length > 28){
    alert('Valor de endereço inválido!');
  }else if (cidade.length === 0){
    alert('Campo cidade vazio!');
  }else if (cidade.length > 28){
    alert('Valor de cidade inválido!');
  } else if (estado === 'Nenhum') {
    alert("Estado não selecionado!");
  }else if(moradia === undefined){
    alert('Moradia não selecionada!');
  } else {
    // Exibir as informações em uma div
    exibirInfo("Nome: ", nome);
    exibirInfo("E-mail: ", email);
    exibirInfo("CPF: ", cpf);
    exibirInfo("Endedreço: ", endereco);
    exibirInfo("Cidade: ", cidade);
    exibirInfo("Estado: ", estado);
    exibirInfo("Moradia: ", moradia);
   
  }
}

// function validarData(event) {
//   event.preventDefault();
//   let data = dataInput.value;

//   for (let i = 0; i < data.length; i++) {
//     if (data[2] !== "/" || data[5] !== "/" || data.length !== 10) {
//       alert("Erro, formato inválido");
//       break;
//     } else {
//       if ((data[0] <= 0 && data[1] <= 0) || (data[0] >= 3 && data[1] > 1)) {
//         alert("Erro, dia com valor inválido");
//         break;
//       } else if (
//         (data[3] <= 0 && data[4] <= 0) ||
//         (data[3] >= 1 && data[4] > 2)
//       ) {
//         alert("Erro, mês com valor inválido");
//         break;
//       } else if (data[6] < 0 || data[7] < 0 || data[8] < 0 || data[9] < 0) {
//         alert("Erro, ano com valor inválido");
//         break;
//       }
//     }
//   }
// }

window.onload = function () {
  criarEstados();

  const btnEnviar = document.querySelector("#enviar");

  btnEnviar.addEventListener("click", enviarDados);
};
