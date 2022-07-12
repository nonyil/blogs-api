const { putPostCategoriesService } = require('../services/putPostCategories.service');
const { CustomError } = require('../Utils/CustomError');

async function putPostCategoriesController(request, response) {
  const { id } = request.params;
  const token = request.headers.authorization;
  const jinsei = request.body;

  if (!jinsei.title || !jinsei.content) {
    throw new CustomError(400, 'Some required fields are missing');
  }

  const putPost = await putPostCategoriesService(id, token, jinsei);

  return response.status(200).json(putPost);
}

module.exports = { putPostCategoriesController };