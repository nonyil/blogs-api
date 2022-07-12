const { getUserIdService } = require('../services/getUserId.service');

async function getUserIdController(request, response) {
  const userId = await getUserIdService(request.params);
  return response.status(200).json(userId);
}

module.exports = { getUserIdController };