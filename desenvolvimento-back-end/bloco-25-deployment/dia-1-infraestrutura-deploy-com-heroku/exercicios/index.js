const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('Está vivo!!!'));

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));