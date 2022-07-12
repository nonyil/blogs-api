const { User } = require('../database/models');
const { verify } = require('../Utils/token/verify');

async function deleteUserIdService(token) {
  const verifyEmail = await verify(token);
  await User.destroy({ where: { email: verifyEmail.email } }); 
}

module.exports = { deleteUserIdService };