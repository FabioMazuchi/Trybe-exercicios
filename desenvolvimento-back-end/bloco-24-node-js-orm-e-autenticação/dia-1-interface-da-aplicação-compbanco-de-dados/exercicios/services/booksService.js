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

const create = async (title, author, pageQuantity) => {
	const newBook = Book.create({ title, author,pageQuantity });

	return newBook;
};

const update = async (title, author, pageQuantity, id) => {
	const [updateBook] = await Book.update({ title, author,pageQuantity}, { where: { id } });
	const erro = { message: 'Book not found!' };
	
	if (!updateBook) throw erro;
};

const remove = async (id) => {
	const deletedBook = await Book.destroy( { where: { id } });
	const erro = { message: 'Algo deu errado' };
	
	if (!deletedBook) throw erro;
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};