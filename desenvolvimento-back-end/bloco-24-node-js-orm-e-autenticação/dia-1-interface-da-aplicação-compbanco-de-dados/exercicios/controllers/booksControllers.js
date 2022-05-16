const express = require('express');
const booksService = require('../services/booksService');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const books = await booksService.getAll();
	
		res.status(200).json(books);
	} catch (e) {
		console.log(e.message);
	}
})

module.exports = router;