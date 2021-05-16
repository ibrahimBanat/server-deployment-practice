'use strict';
// require the error files to be used to hanlde the errors
const serverError = require('./error/500');
const notFound = require('./error/404');

// Require express to run the server and handle the routes
const express = require('express');
const app = express();

// Setup the server to work with env config port
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//routes
app.get('/', rootRouteHandler);
app.get('/bad', badRouteHandler);

// use of other js files to handle the errors
app.use(serverError);
app.use('*', notFound);

/**
 * handling the root route and make it's endpoint
 * @param {Object} req HTTP request and it's properties
 * @param {Object} res  HTTP response that an Express app sends when it gets an HTTP request
 */
function rootRouteHandler(req, res) {
  res.send('hello from the other side');
}
/**
 * handling server error with status 500
 * @param {Object} req HTTP request and it's properties
 * @param {Object} res  HTTP response that an Express app sends when it gets an HTTP request
 */
function badRouteHandler(req, res) {
  throw new Error('Something went wrong!');
}
/**
 * starting the server and listening to A port
 */
function serverStart() {
  app.listen(PORT, () => {
    console.log(`app is running at ${PORT}`);
  });
}

module.exports = {
  app: app,
  serverStart: serverStart,
};
