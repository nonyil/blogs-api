const { deletePostIdService } = require('../services/deletePostId.service');

async function deletePostIdController(request, response) {
  const { id } = request.params;
  const token = request.headers.authorization;
  await deletePostIdService(id, token);

  return response.status(204).end();
}

module.exports = { deletePostIdController };
