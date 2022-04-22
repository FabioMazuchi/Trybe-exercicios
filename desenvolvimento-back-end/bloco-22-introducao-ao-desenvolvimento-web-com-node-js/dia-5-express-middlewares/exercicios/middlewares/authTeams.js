const authTeamsName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length <= 5)
    return res.status(400).json({ message: "invalid data" });

  next();
};

const authTeamsInitials = (req, res, next) => {
  const { initials } = req.body;
  
  if (!initials || initials.length > 3 || initials.toUpperCase() !== initials)
    return res.status(400).json({ message: "invalid data" });

  next();
};

const authTeamsCountry = (req, res, next) => {
  const { country } = req.body;
  
  if (!country || country.length <= 3)
    return res.status(400).json({ message: "invalid data" });

  next();
};

module.exports = { authTeamsName, authTeamsInitials, authTeamsCountry };
