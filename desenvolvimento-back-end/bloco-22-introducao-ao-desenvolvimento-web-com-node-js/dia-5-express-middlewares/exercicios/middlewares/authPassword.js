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

module.exports = authPassword;
