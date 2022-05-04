const connection = require('./connection');

const getAll = async () => {
	try {
		const [users] = await connection.execute('SELECT * RM users');
		return users;
	} catch (e) {
		console.log(e.message);
	}
};

const getById = async (id) => {
	const [user] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
	return user;
};

const update = async (id, firstName, lastName, email, password) => {
	await connection.execute('UPDATE users SET first_name=?, last_name=?, email=?, password=? WHERE id=?', [firstName, lastName, email, password, id]);

	return { id, firstName, lastName, email, password };
};

const create = async (firstName, lastName, email, password) => {
	const [{ insertId }] = await connection.execute('INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)', [firstName, lastName, email, password]);

	return { id: insertId, firstName, lastName, email, password };
};

module.exports = {
	getAll,
	getById,
	update,
	create
};