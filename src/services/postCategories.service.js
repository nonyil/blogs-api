const { Category } = require('../database/models');
const { CustomError } = require('../Utils/CustomError');

async function postCategoriesService(category) {
  const ifExist = await Category.create({ 
    name: category.name,
   });

   if (!category.name) {
    throw new CustomError(400, '"name" is required');
   }

   const newObject = { name: ifExist.name,
    id: ifExist.id,
    };
   
   return newObject;
}

module.exports = { postCategoriesService };