const { User } = require('../database/models');
const { CustomError } = require('../Utils/CustomError');
const { generate } = require('../Utils/token/generate');

async function loginService(email, password) {
  const user = await User.findOne({ where: {
    email,
  } });

  if (!user) throw new CustomError(400, 'Invalid fields');
  
  const invalidPassword = user.password === password;
  if (!invalidPassword) throw new CustomError(400, 'Invalid password');
  const tokenGenerate = generate({ email, password });
  return tokenGenerate;
}

module.exports = { loginService };