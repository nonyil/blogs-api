const { getCategoriesService } = require('../services/getCategories.service');

async function getCategoriesController(request, response) {
  const categories = await getCategoriesService();
  return response.status(200).json(categories);
}

module.exports = { getCategoriesController };