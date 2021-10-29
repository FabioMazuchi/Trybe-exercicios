const dataInput = document.querySelector("#data_inicio");

function criarEstados() {
  // Fonte: https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm
  const estados = [
    { sigla: " NM", estado: "Nenhum" },
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

  const select = document.querySelector("#estados");
  for (let i = 0; i < estados.length; i += 1) {
    const option = document.createElement("option");
    option.value = estados[i].sigla;
    option.innerHTML = estados[i].estado;
    select.appendChild(option);
  }
}

function enviarDados(event) {
  event.preventDefault();
  // validarNome();
  // validarEmail();
  // validarCpf();
  // validarEndereco();
  // validarCidade();
  validarEstado();
}

function validarNome() {
  const input = document.querySelector("[name=nome]");
  let valor = input.value;

  if (valor.length <= 0) {
    alert("Nome vazio.");
  } else if (valor.length > 40) {
    alert("Nome com tamanho inválido.");
  }
}

function validarEmail() {
  const input = document.querySelector("[name=email]");
  let valor = input.value;

  if (valor.length <= 0) {
    alert("E-mail vazio.");
  } else if (valor.length > 50) {
    alert("E-mail com tamanho inválido.");
  }
}

function validarCpf() {
  const input = document.querySelector("[name=cpf]");
  let valor = input.value;

  if (valor.length <= 0) {
    alert("CPF vazio.");
  } else if (valor.length > 11) {
    alert("CPF com tamanho inválido.");
  }
}

function validarEndereco() {
  const input = document.querySelector("[name=endereco]");
  let valor = input.value;

  if (valor.length <= 0) {
    alert("Endereço vazio.");
  } else if (valor.length > 28) {
    alert("Endereço com tamanho inválido.");
  }
}

function validarCidade() {
  const input = document.querySelector("[name=cidade]");
  let valor = input.value;

  if (valor.length <= 0) {
    alert("Cidade vazio.");
  } else if (valor.length > 28) {
    alert("Cidade com tamanho inválido.");
  }
}

function validarEstado() {
	console.log(selected);
}

window.onload = function () {
  criarEstados();

	let selected;
  const input = document.querySelector("[name=estado]");
  let estados = input.children;
  for (let estado of estados) {
    addEventListener("change", function (event) {
      selected = event.target.value;

    });
  }

  const btnEnviar = document.querySelector("#enviar");
  btnEnviar.addEventListener("click", enviarDados);
};

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
