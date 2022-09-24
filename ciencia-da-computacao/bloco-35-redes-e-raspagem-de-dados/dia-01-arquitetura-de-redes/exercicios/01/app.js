const express = require('express');

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Olá Curl!'))

app.post('/', (req, res) => {
	const {body, headers: {authorization}} = req
	console.log((authorization));
	
	res.status(200).json(body)
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))

