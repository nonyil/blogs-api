const { User } = require('../database/models');

async function getUserService() {
  const getAll = await User.findAll({ 
    attributes: {
      exclude: ['password'],
    },
  });

 return getAll;
}

module.exports = { getUserService };