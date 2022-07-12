const jwt = require('jsonwebtoken');

require('dotenv').config();

function generate(credentials) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(credentials, process.env.JWT_SECRET, {
      expiresIn: '365d',
    }, (error, key) => {
      if (error) reject(error);
      resolve(key);
    });
    return token;
  });
}

module.exports = { generate };