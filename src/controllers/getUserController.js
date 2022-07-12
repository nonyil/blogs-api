const { getUserService } = require('../services/getUser.service');

async function getUserController(request, response) {
  const users = await getUserService();
  return response.status(200).json(users);
}

module.exports = { getUserController };