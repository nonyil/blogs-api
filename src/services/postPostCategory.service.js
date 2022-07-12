const { BlogPost, Category, User, PostCategory } = require('../database/models');
const { CustomError } = require('../Utils/CustomError');
const { verify } = require('../Utils/token/verify');

async function postPostCategoryService(postCategories, token) {
  const ifExist = await Category.findAll({ where: { id: postCategories.categoryIds } });
  const map = ifExist.map((index) => index.id);
  if (map.length !== postCategories.categoryIds.length) {
    throw new CustomError(400, '"categoryIds" not found');
  }
  const verifyToken = await verify(token);
  const find = await User.findOne({ where: { email: verifyToken.email } });
  const newObject = { title: postCategories.title,
  content: postCategories.content, 
  userId: find.id,
  updated: new Date(),
  published: new Date() };
  const { dataValues: { id, updated, published } } = await BlogPost.create(newObject);
  await Promise.all(postCategories.categoryIds.map(async (index) => {
    await PostCategory.create({ postId: id, categoryId: index });
  }));
  newObject.id = id; newObject.published = published; newObject.updated = updated;
  return newObject;
}

module.exports = { postPostCategoryService };