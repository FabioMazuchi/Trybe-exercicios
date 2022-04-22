const crypto = require('crypto');

const loginSuccess = (req, res) => {
	const token = crypto.randomBytes(6).toString('hex');

  res.status(200).json({ message: `token: ${token}` });
};

module.exports = loginSuccess;