const { Category } = require('../database/models');

async function getCategoriesService() {
  const getAll = await Category.findAll();
  return getAll;
}

module.exports = { getCategoriesService };