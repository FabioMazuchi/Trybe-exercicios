const { authUserName, authEmail, authPassword } = require('../middlewares/authUser');
const loginSuccess = require('../middlewares/loginSuccess');
const userCreated = require('../middlewares/userCreated');

const router = require('express').Router();

router.get('/register', authUserName, authEmail, authPassword, userCreated);

router.post('/login', authEmail, authPassword, loginSuccess);

module.exports = router;