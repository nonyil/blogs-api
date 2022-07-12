const { Op } = require('sequelize');
const { Category, BlogPost, User } = require('../database/models');

async function getPostSearchService(q) {
  const queryPost = await BlogPost.findAll({
    where: {
      [Op.or]: {
        title: {
          [Op.substring]: q,
        },
        content: {
          [Op.substring]: q,
        },
      },
    },
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    console.log(queryPost);
  return queryPost;
}

module.exports = { getPostSearchService };