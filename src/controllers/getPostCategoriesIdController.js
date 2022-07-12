const { getPostCategoriesIdService } = require('../services/getPostCategoriesId.service');

async function getPostCategoriesIdController(request, response) {
  const byId = await getPostCategoriesIdService(request.params);
  return response.status(200).json(byId);
}

module.exports = { getPostCategoriesIdController };