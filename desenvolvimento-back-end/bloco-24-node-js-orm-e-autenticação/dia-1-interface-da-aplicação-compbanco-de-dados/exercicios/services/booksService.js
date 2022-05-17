const {Book} = require('../models');

const getAll = async () => {
	const books = await Book.findAll();
	console.log(books);
	return books;
};

const getById = async (id) => {
	const book = await Book.findByPk(id);
	const erro = { message: 'Book not found'};

	if (book === null) throw erro;

	return book;
}

module.exports = {
	getAll,
	getById,
};