const express = require('express');
const User = require('./models/user');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/user', async (req, res) => {
	const users = await User.getAll();
	res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
	const { id } = req.params;
	const user = await User.getById(id);
	res.status(200).json(user);
});

app.post('/user', async (req, res) => {
	try {
		const { first_name, last_name, email, password } = req.body;
		const user = await User.create(first_name, last_name, email, password);
		res.status(201).json(user);
	} catch (e) {
		return res.status(500).json({ message: e.message})
	}
});

app.put('/user/:id', async (req, res) => {
	const { first_name, last_name, email, password } = req.body;
	const { id } = req.params;
	const user = await User.update(id, first_name, last_name, email, password);
	res.status(200).json(user);
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));