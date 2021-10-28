const select = document.querySelector("#estados");
// Fonte: https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm
const estados = [{sigla:' AC',estado: 'Acre'},
{sigla:'AL',estado: 'Alagoas'},
{sigla:'AP',estado: 'Amapá'},
{sigla:'AM',estado: 'Amazonas'},
{sigla:'BA',estado: 'Bahia'},
{sigla:'CE',estado: 'Ceará'},
{sigla:'ES',estado: 'Espírito Santo'},
{sigla:'GO',estado: 'Goiás'},
{sigla:'MA',estado: 'Maranhão'},
{sigla:'MT',estado: 'Mato Grosso'},
{sigla:'MS',estado: 'Mato Grosso do Sul'},
{sigla:'MG',estado: 'Minas Gerais'},
{sigla:'PA',estado: 'Pará'},
{sigla:'PB',estado: 'Paraíba'},
{sigla:'PR',estado: 'Paraná'},
{sigla:'PE',estado: 'Pernambuco'},
{sigla:'PI',estado: 'Piauí'},
{sigla:'RJ',estado: 'Rio de Janeiro'},
{sigla:'RN',estado: 'Rio Grande do Norte'},
{sigla:'RS',estado: 'Rio Grande do Sul'},
{sigla:'RO',estado: 'Rondônia'},
{sigla:'RR',estado: 'Roraima'},
{sigla:'SC',estado: 'Santa Catarina'},
{sigla:'SP',estado: 'São Paulo'},
{sigla:'SE',estado: 'Sergipe'},
{sigla:'TO',estado: 'Tocantins'},
{sigla:'DF',estado: 'Distrito Federal'},
];

for (let i = 0; i < estados.length; i += 1) {
  const option = document.createElement("option");

  console.log(i);
  option.value = estados[i].sigla;
  option.innerHTML = estados[i].estado;

  select.appendChild(option);
  console.log(option);
}
