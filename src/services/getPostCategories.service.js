const { Category, BlogPost, User } = require('../database/models');

async function getPostCategoriesService() {
  const blogPost = await BlogPost.findAll(
    {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
  );
  return blogPost;
}

module.exports = { getPostCategoriesService };
