const express = require('express');

const app = express()
const PORT = 80

app.use(express.json())

app.get('/', (req, res) => res.send('Olá ngrok!'))


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))

