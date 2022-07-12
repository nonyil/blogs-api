const { User } = require('../database/models');
const { CustomError } = require('../Utils/CustomError');
// const { CustomError } = require('../Utils/CustomError');
const { generate } = require('../Utils/token/generate');

async function UserRegisterService(user) {
  const alredyExist = await User.findOne({ where: { email: user.email } });
  if (alredyExist) {
    throw new CustomError(409, 'User already registered');
  }
  await User.create(user);
  return generate(user);
}

module.exports = { UserRegisterService };