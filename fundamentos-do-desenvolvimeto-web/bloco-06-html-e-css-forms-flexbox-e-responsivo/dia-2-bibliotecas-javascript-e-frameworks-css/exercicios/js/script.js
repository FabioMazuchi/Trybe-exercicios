import '../node_modules/just-validate/dist/js/just-validate.js';

const select = document.querySelector("#estado");
// const divInfo = document.querySelector("#info");

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

function limpaRadio() {
  const selectMoradia = document.querySelectorAll("input[name=moradia]");

  for (let i = 0; i < selectMoradia.length; i += 1) {
    if (selectMoradia[i].checked === true) {
      selectMoradia[i].checked = false;
    }
  }
}

function limpaGeral(e) {
  e.preventDefault();
  const inputs = document.getElementsByTagName("input");
  const textarea = document.querySelector("#resumo");

  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = "";
  }

  limpaSelecionado();
  limpaRadio();

  textarea.value = "";
}

function limpaSelecionado() {
  for (let s = 0; s < select.length; s += 1) {
    if (select[s].selected === true) {
      select[s].selected = false;
    }
  }
}

new JustValidate('.js-form', {
  rules: {
    nome: {
      required: true,
      maxLength: 40,
    },
    email: {
      required: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    endereco: {
      required: true,
      maxLength: 28,
    },
    cidade: {
      required: true,
      maxLength: 28,
    },
    estado: {
      required: true,
    },
    moradia: {
      required: true,
    },
    resumo: {
      required: true,
      maxLength: 1000,
    },
    cargo: {
      required: true,
      maxLength: 40,
    },
    descricaoCargo: {
      required: true,
      maxLength: 500,
    },
    data: {
      required: true,
    }
  },
  messages: {
    nome: {
      required: 'Campo nome obrigatório.',
      maxLength: 'Nome máximo com 40 letras.',
    },
    email: {
      required: 'Campo e-mail obrigatório.',
      maxLength: 'E-mail máximo com 50 letras.',
    },
    cpf: {
      required: 'Campo CPF obrigatório.',
      maxLength: 'CPF máximo com 11 letras.',
    },
    endereco: {
      required: 'Campo endereço obrigatório',
      maxLength: 'Endereço máximo com 28 letras.'
    },
    cidade: {
      required: 'Campo cidade obrigatório',
      maxLength: 'Cidade máxima com 28 letras.',
    },
    estado: {
      required: 'Obrigatório selecionar um estado.',
    },
    moradia: {
      required: 'Obrigatório selecionar um tipo de moradia.'
    },
    resumo: {
      required: 'Campo resumo obrigatório.',
      maxLength: 'Resumo máximo com 1000 letras.',
    },
    cargo: {
      required: 'Campo cargo obrigatório.',
      maxLength: 'Cargo máxomo com 40 letras.',
    },
    descricaoCargo: {
      required: 'Campo descrição do cargo obrigatório',
      maxLength: 'Descrição do cargo máximo com 500 letras.'
    },
    data: {
      required: 'Campo data obrigatório.',
    }
  },
  submitHandler : function (form, values) {
    console.log(form, values);
  }});

window.onload = function () {
  criarEstados();
  const btnlimpar = document.querySelector("#limpar"); 

  btnlimpar.addEventListener("click", limpaGeral);

};
