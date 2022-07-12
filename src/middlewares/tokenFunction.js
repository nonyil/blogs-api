const { CustomError } = require('../Utils/CustomError');
const { verify } = require('../Utils/token/verify');

async function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw new CustomError(401, 'Token not found');
  const tokenIsValid = await verify(authorization);
  if (!tokenIsValid) throw new CustomError(401, 'Expired or invalid token');
  return next();
}

module.exports = { tokenValidation };