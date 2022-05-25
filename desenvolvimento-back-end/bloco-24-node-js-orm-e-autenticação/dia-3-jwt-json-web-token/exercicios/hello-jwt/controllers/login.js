const Joi = require('joi');

const Jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) => 
  Joi.object({
    username: Joi.string()
   .messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" id required',
    }),
    password: Joi.string().min(5).required()
    .messages({
      'string.min': '"password" length be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

const login = async (req, res, next) => {
  const { username, password } = req.body;
  
  const { error } = validateBody(req.body);

  if (error) return next(error);

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
   const err = new Error('Invalid username or password');
   err.statusCode = 401;

   return next(err);
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';
  console.log(admin);

  const payload = { username, admin };
  
  const token = Jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};

module.exports = login;
