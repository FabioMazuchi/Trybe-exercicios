const express = require('express');
const booksService = require('../services/booksService');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const books = await booksService.getAll();
	
		res.status(200).json(books);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
})

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const book = await booksService.getById(id);
	
		res.status(200).json(book);
	} catch (e) {
		console.log(e.message);
		res.status(404).json({ message: e.message });
	}
})

router.post('/', async (req, res) => {
	try {
		const { title, author, pageQuantity } = req.body;
		const newBook = await booksService.create(title, author, pageQuantity);

		res.status(200).send(newBook);
	} catch (e) {
		console.log(e.message);
		res.status(404).json({ message: e.message });
	}
})

router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { title, author, pageQuantity } = req.body;
		await booksService.update(title, author, pageQuantity, id);

		res.status(200).send('Book updated!');
	} catch (e) {
		console.log(e.message);
		res.status(404).json({ message: e.message });
	}
})

module.exports = router;