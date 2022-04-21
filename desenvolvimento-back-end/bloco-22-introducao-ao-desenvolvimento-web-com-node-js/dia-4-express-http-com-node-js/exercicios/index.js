const express = require('express');
const generateToken = require('./generateToken');
const { getSimpons, setSimpsons } = require('./helpers');
const validateToken = require('./validateToken');

const app = express();
app.use(express.json());
app.use(validateToken);

const validateData = (req, res, next) => {
	const { email, password, firstName, phone } = req.body;
	
	if (!email || !password || !firstName || !phone) return res.status(401).json({ message: 'missing fields' });

	res.status(200).json({ token: generateToken() });
};

app.post('/signup', validateData, (req, res) => {
});

app.get('/ping', (req, res) => {
	res.json({ message: 'Pong' });
});

app.post('/hello', (req, res) => {
	const { name } = req.body;
	res.json({ message: `Hello ${name}` });
});

app.post('/greetings', (req, res) => {
	const { name, age } = req.body;

	if (age > 17) return res.status(200).end();

	return res.status(401).end();
});

app.put('/users/:name/:age', (req, res) => {
	const { name, age } = req.params;
	res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.`});
});

app.get('/simpsons', async (req, res) => {
	try {
		const simpsons = await getSimpons();
		res.status(200).json(simpsons);
	} catch (e) {
		return res.status(500).end();
	}
});

app.get('/simpsons/:id', async (req, res) => {
	const { id } = req.params;
	const simpsons = await getSimpons();
	const simpson = simpsons.find(s => s.id === id);

	if (!simpson) return res.status(404).json({ message: 'simpson not found' });

	res.status(200).json(simpson);
});

app.post('/simpsons', async (req, res) => {
	try {
		const { id, name } = req.body;

		const simpsons = await getSimpons();
		const simpsonId = simpsons.findIndex(s => s.id === id);
		
		if (simpsonId !== -1) return res.status(409).json({ message: 'id already exists' });
	
		simpsons.push({ id, name });
		await setSimpsons(simpsons);
		return res.status(204).end();
	} catch (error) {
		return res.status(500).end();
	}
});

app.listen(3000, () => {
	console.log('Ouvindo a porta 3000');
});