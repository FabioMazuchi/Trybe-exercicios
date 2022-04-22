const authEmail = (req, res, next) => {
	const { email } = req.body;
	let valid = /\S+@\S+\.\S+/;

	if (!valid.test(email)) return res.status(400).json({ message: 'invalid data' });
	next();
};


module.exports = authEmail;