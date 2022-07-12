const { deleteUserIdService } = require('../services/deleteUserId.service');

async function deleteUserIdController(request, response) {
  const token = request.headers.authorization;

  await deleteUserIdService(token);

  return response.status(204).end();
}

module.exports = { deleteUserIdController };