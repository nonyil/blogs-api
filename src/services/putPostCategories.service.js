const { Category, BlogPost, User } = require('../database/models');
const { CustomError } = require('../Utils/CustomError');
const { verify } = require('../Utils/token/verify');

async function putPostCategoriesService(paramsId, token, jinsei) {
  const { id } = await BlogPost.findOne({
    where: { id: paramsId },
  });

  const verifyEmail = await verify(token);
  const verifyUser = await User.findOne({ where: { email: verifyEmail.email } }); 
  if (id !== verifyUser.id) {
    throw new CustomError(401, 'Unauthorized user');
  }
  await BlogPost.update({ ...jinsei, updated: new Date() }, { where: { id: paramsId } });
  
  const newObject = await BlogPost.findOne({
    where: id,
    include: 
    [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return newObject;
}

module.exports = { putPostCategoriesService };