const jwt = require('jsonwebtoken');
const { CustomError } = require('../CustomError');

require('dotenv').config();

function verify(token) {
  return new Promise((resolve) => {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) throw new CustomError(401, 'Expired or invalid token');
      resolve(decoded);
    });
    return verifyToken;
  });
}

module.exports = { verify };