const { BlogPost, User } = require('../database/models');
const { CustomError } = require('../Utils/CustomError');
const { verify } = require('../Utils/token/verify');

async function deletePostIdService(paramsId, token) {
  // const postId = await BlogPost.findOne({ where: { id } });
  
  const id = await BlogPost.findOne({ where: { id: paramsId } });

  if (!id) {
    throw new CustomError(404, 'Post does not exist');
  }

  const verifyEmail = await verify(token);
  const verifyUser = await User.findOne({ where: { email: verifyEmail.email } }); 

  if (id.userId !== verifyUser.id) {
    throw new CustomError(401, 'Unauthorized user');
  }
  
  await BlogPost.destroy({ where: { id: id.id } });
}

module.exports = { deletePostIdService };