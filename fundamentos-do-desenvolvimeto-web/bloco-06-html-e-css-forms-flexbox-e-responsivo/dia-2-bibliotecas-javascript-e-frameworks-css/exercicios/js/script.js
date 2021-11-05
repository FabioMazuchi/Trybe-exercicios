import '../node_modules/just-validate/dist/js/just-validate.js';

// const select = document.querySelector("#estados");
// const divInfo = document.querySelector("#info");

// function criarEstados() {
//   // Fonte: https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm
//   const estados = [
//     { sigla: "NM", estado: "Nenhum" },
//     { sigla: " AC", estado: "Acre" },
//     { sigla: "AL", estado: "Alagoas" },
//     { sigla: "AP", estado: "Amapá" },
//     { sigla: "AM", estado: "Amazonas" },
//     { sigla: "BA", estado: "Bahia" },
//     { sigla: "CE", estado: "Ceará" },
//     { sigla: "ES", estado: "Espírito Santo" },
//     { sigla: "GO", estado: "Goiás" },
//     { sigla: "MA", estado: "Maranhão" },
//     { sigla: "MT", estado: "Mato Grosso" },
//     { sigla: "MS", estado: "Mato Grosso do Sul" },
//     { sigla: "MG", estado: "Minas Gerais" },
//     { sigla: "PA", estado: "Pará" },
//     { sigla: "PB", estado: "Paraíba" },
//     { sigla: "PR", estado: "Paraná" },
//     { sigla: "PE", estado: "Pernambuco" },
//     { sigla: "PI", estado: "Piauí" },
//     { sigla: "RJ", estado: "Rio de Janeiro" },
//     { sigla: "RN", estado: "Rio Grande do Norte" },
//     { sigla: "RS", estado: "Rio Grande do Sul" },
//     { sigla: "RO", estado: "Rondônia" },
//     { sigla: "RR", estado: "Roraima" },
//     { sigla: "SC", estado: "Santa Catarina" },
//     { sigla: "SP", estado: "São Paulo" },
//     { sigla: "SE", estado: "Sergipe" },
//     { sigla: "TO", estado: "Tocantins" },
//     { sigla: "DF", estado: "Distrito Federal" },
//   ];

//   for (let i = 0; i < estados.length; i += 1) {
//     const option = document.createElement("option");
//     option.value = estados[i].sigla;
//     option.innerHTML = estados[i].estado;
//     select.appendChild(option);
//   }
// }

// function exibirInfo(key, valor) {
//   const p = document.createElement("p");
//   p.innerHTML = key + valor;
//   divInfo.appendChild(p);
// }

// function getSelected() {
//   let selecinado;

//   for (let i = 0; i < select.length; i++) {
//     if (select[i].selected === true) {
//       selecinado = select[i].innerHTML;
//     }
//   }
//   return selecinado;
// }

// function getRadio() {
//   const selectMoradia = document.querySelectorAll("input[name=moradia]");
//   let resultado;

//   for (let i = 0; i < selectMoradia.length; i++) {
//     if (selectMoradia[i].checked) {
//       resultado = selectMoradia[i].value;
//     }
//   }
//   return resultado;
// }

// function limpaRadio() {
//   const selectMoradia = document.querySelectorAll("input[name=moradia]");

//   for (let i = 0; i < selectMoradia.length; i += 1) {
//     if (selectMoradia[i].checked === true) {
//       selectMoradia[i].checked = false;
//     }
//   }
// }

// function enviarDados(event) {
//   event.preventDefault();
//   let nome = document.querySelector("[name=nome]").value;
//   let email = document.querySelector("[name=email]").value;
//   let cpf = document.querySelector("[name=cpf]").value;
//   let endereco = document.querySelector("[name=endereco]").value;
//   let cidade = document.querySelector("[name=cidade]").value;
//   let estado = getSelected();
//   let moradia = getRadio();
//   let resumo = document.querySelector("#resumo").value;
//   let cargo = document.querySelector("[name=cargo]").value;
//   let descricaoCargo = document.querySelector("[name=descricao_cargo]").value;

//   if (nome.length === 0 || nome.length > 40) {
//     alerta("Valor de nome inválido!");
//   } else if (email.length === 0 || email.length > 50) {
//     alerta("Valor de email inválido!");
//   } else if (cpf.length === 0 || cpf.length > 11) {
//     alerta("Valor de CPF inválido!");
//   } else if (endereco.length === 0 || endereco.length > 28) {
//     alerta("Valor de endereço inválido");
//   } else if (cidade.length === 0 || cidade.length > 28) {
//     alerta("Valor de cidade inválido!");
//   } else if (estado === "Nenhum") {
//     alerta("Estado não selecionado!");
//   } else if (moradia === undefined) {
//     alerta("Moradia não selecionada!");
//   } else if (resumo.length === 0 || resumo.length > 1000) {
//     alerta("Valor de resumo inválido!");
//   } else if (cargo.length === 0 || cargo.length > 40) {
//     alerta("Valor de cargo inválido!");
//   } else if (descricaoCargo.length === 0 || descricaoCargo.length > 500) {
//     alerta("Valor da descrição inválido!");
//   } else {
//     let data = document.querySelector("#data_inicio").value;
//     let valorData = validarData(data);
//     if (valorData !== false) {
//       // Exibir as informações em uma div
//       exibirInfo("Nome: ", nome);
//       exibirInfo("E-mail: ", email);
//       exibirInfo("CPF: ", cpf);
//       exibirInfo("Endedreço: ", endereco);
//       exibirInfo("Cidade: ", cidade);
//       exibirInfo("Estado: ", estado);
//       exibirInfo("Moradia: ", moradia);
//       exibirInfo("Resumo: ", resumo);
//       exibirInfo("Cargo: ", cargo);
//       exibirInfo("Descrição do cargo: ", descricaoCargo);
//       exibirInfo("Data: ", data);

//       const divAlert = document.querySelector(".alerta");
//       divAlert.style.display = "none";
//     }
//   }
// }

// function validarData(data) {
//   if (data.length === 0) {
//     alert("Campo data vazio!");
//     return false;
//   } else {
//     for (let i = 0; i < data.length; i += 1) {}
//     if (data[2] !== "/" || data[5] !== "/" || data.length !== 10) {
//       alert("Erro, formato de data inválido");
//       return false;
//     } else {
//       if ((data[0] <= 0 && data[1] <= 0) || (data[0] >= 3 && data[1] > 1)) {
//         alert("Erro, dia com valor inválido");
//         return false;
//       } else if (
//         (data[3] <= 0 && data[4] <= 0) ||
//         (data[3] >= 1 && data[4] > 2)
//       ) {
//         alert("Erro, mês com valor inválido");
//         return false;
//       } else if (data[6] < 0 || data[7] < 0 || data[8] < 0 || data[9] < 0) {
//         alert("Erro, ano com valor inválido");
//         return false;
//       }
//     }
//   }
// }

// function limpaGeral(e) {
//   e.preventDefault();
//   const inputs = document.getElementsByTagName("input");
//   const textarea = document.querySelector("#resumo");

//   for (let i = 0; i < inputs.length; i += 1) {
//     inputs[i].value = "";
//   }

//   limpaSelecionado();
//   limpaRadio();
//   limmparDadosGerados();

//   textarea.value = "";
// }

// function limpaSelecionado() {
//   for (let s = 0; s < select.length; s += 1) {
//     if (select[s].selected === true) {
//       select[s].selected = false;
//     }
//   }
// }

// function limmparDadosGerados() {
//   let paragrafos = divInfo.getElementsByTagName("p");
//   const tamanho = paragrafos.length;

//   for (let i = 0; i <= tamanho; i += 1) {
//     divInfo.removeChild(divInfo.firstChild);
//   }
// }

window.onload = function () {
  // criarEstados();
  // const btnlimpar = document.querySelector("#limpar");
  // const btnEnviar = document.querySelector("#enviar");
 
  // btnlimpar.addEventListener("click", limpaGeral);
  // btnEnviar.addEventListener("click", enviarDados);

  new JustValidate('.js-form');

};
