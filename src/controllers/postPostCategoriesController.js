const { postPostCategoryService } = require('../services/postPostCategory.service');
const { CustomError } = require('../Utils/CustomError');

async function postPostCategoriesController(request, response) {
  const token = request.headers.authorization;
  if (!request.body.title || !request.body.content) {
    throw new CustomError(400, 'Some required fields are missing');
  }
  const postCategories = await postPostCategoryService(request.body, token);

  return response.status(201).json(postCategories);
}

module.exports = { postPostCategoriesController };