const authEmail = require('../middlewares/authEmail');
const authPassword = require('../middlewares/authPassword');
const authUserName = require('../middlewares/authUserName');
const loginSuccess = require('../middlewares/loginSuccess');
const userCreated = require('../middlewares/userCreated');

const router = require('express').Router();

router.get('/register', authUserName, authEmail, authPassword, userCreated);

router.post('/login', authEmail, authPassword, loginSuccess);

module.exports = router;