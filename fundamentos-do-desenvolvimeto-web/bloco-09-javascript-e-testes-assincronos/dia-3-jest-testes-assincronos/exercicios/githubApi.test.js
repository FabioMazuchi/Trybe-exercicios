const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

it('verifica se no resultado da busca contêm a string "sd-01-week4-5-project-todo-list" e ""', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  const resultado = await getRepos(url);
  const esperado1 = ['sd-01-week4-5-project-todo-list'];
  const esperado2 = ['sd-01-week4-5-project-todo-list'];
  
  expect(resultado).toEqual(
    expect.arrayContaining(esperado1)
  );
  expect(resultado).toEqual(
    expect.arrayContaining(esperado2)
  );
});
