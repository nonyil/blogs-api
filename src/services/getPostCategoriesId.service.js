const { Category, BlogPost, User } = require('../database/models');
const { CustomError } = require('../Utils/CustomError');

async function getPostCategoriesIdService(id) {
  const getId = await BlogPost.findOne({
    where: id,
    include: 
    [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  if (!getId) {
    throw new CustomError(404, 'Post does not exist');
  }
  return getId;
}

module.exports = { getPostCategoriesIdService };
