var viewConfig = require('./config/view');
var errorConfig = require('./config/error');
var utilitiesConfig = require('./config/utilities');
var routesConfig = require('./config/routes');
var Sequelize = require('sequelize');
var datetimeRouter = require('./routes/datetime');
var movieRouter = require('./routes/movie');

var express = require('express');

var app = express();

app.use('/datetime', datetimeRouter);
app.use('/movie', movieRouter);

viewConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;
