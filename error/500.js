'use strict';
/**
 *
 * @param {object} err object with information about the error
 * @param {Object} req HTTP request and it's properties
 * @param {Object} res  HTTP response that an Express app sends when it gets an HTTP request
 * @param {method} next passing errors to express to handle them
 */
module.exports = (err, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: err.message,
    route: req.path,
  });
};
