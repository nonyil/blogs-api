const { CustomError } = require('../Utils/CustomError');
const { User } = require('../database/models');

async function getUserIdService(user) {
  const getUserId = await User.findOne({ where: { id: user.id },
  attributes: {
    exclude: ['password'],
  } });
  if (!getUserId) {
    throw new CustomError(404, 'User does not exist');
  }
  return getUserId;
}

module.exports = { getUserIdService };