const authUserName = (req, res, next) => {
	const { username } = req.body;
	
	if (username.length <= 3) return res.status(400).json({ message: 'invalid data'});

	next();
};

const authEmail = (req, res, next) => {
	const { email } = req.body;
	let valid = /\S+@\S+\.\S+/;

	if (!valid.test(email)) return res.status(400).json({ message: 'invalid data' });
	next();
};

const authPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ meessage: "invalid data" }); 
  
  const stringPass = password.toString();

  if (
    stringPass.length < 4 ||
    stringPass.length > 8 ||
    typeof password !== "number"
  )
    return res.status(400).json({ meessage: "invalid data" });
  next();
};

module.exports = { authUserName, authEmail, authPassword }