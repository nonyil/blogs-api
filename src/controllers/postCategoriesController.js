const { postCategoriesService } = require('../services/postCategories.service');

async function postCategoriesController(request, response) {
  const categories = await postCategoriesService(request.body);
  return response.status(201).json(categories);
}

module.exports = { postCategoriesController };