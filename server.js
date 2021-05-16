'use strict';
const serverError = require('./error/500');
const notFound = require('./error/404');

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//routes
app.get('/', rootRouteHandler);
app.get('/bad', badRouteHandler);
app.use(serverError);
app.use('*', notFound);

function rootRouteHandler(req, res) {
  res.send('hello from the other side');
}
function badRouteHandler(req, res) {
  throw new Error('Something went wrong!');
}

function serverStart() {
  app.listen(PORT, () => {
    console.log(`app is running at ${PORT}`);
  });
}

module.exports = {
  app: app,
  serverStart: serverStart,
};
