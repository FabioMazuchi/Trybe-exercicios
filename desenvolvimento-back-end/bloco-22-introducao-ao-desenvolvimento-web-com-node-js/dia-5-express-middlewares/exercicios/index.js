const express = require('express');
const authEmail = require('./middlewares/authEmail');
const authPassword = require('./middlewares/authPassword');
const authUserName = require('./middlewares/authUserName');
const userCreated = require('./middlewares/userCreated');

const app = express();
app.use(express.json());

app.get('/user/register', authUserName, authEmail, authPassword, userCreated);

app.listen(3000);