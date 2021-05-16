'use strict';
/**
 * sending a json for 404 status
 * @param {Object} req HTTP request and it's properties
 * @param {Object} res  HTTP response that an Express app sends when it gets an HTTP request
 */
module.exports = (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'oops, message not found',
  });
};
