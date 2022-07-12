const { getPostCategoriesService } = require('../services/getPostCategories.service');

async function getPostCategoriesController(request, response) {
  const categories = await getPostCategoriesService();
  return response.status(200).json(categories);
}

module.exports = { getPostCategoriesController };