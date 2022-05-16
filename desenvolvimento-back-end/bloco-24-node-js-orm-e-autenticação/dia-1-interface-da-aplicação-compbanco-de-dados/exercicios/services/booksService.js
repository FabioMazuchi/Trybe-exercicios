const {Book} = require('../models');

const getAll = async () => {
	const books = await Book.findAll();
	console.log(books);
	return books;
};

module.exports = {
	getAll,
};