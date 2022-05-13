const express = require('express');
const pingController = require('../../controllers/pingController');
const pingRouter = express.Router();

pingRouter.get('/', pingController.getPing);

module.exports = pingRouter;
