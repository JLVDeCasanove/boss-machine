const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions.js');
const meetingsRouter = require('./meetings.js');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;