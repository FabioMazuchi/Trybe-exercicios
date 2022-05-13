const express = require('express');
const pingRouter = require('./ping/index');
const cepRouter = require('./cep/index');
const router = express.Router();

router.use('/ping', pingRouter);
router.use('/cep', cepRouter);

module.exports = router;