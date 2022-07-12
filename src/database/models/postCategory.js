'use strict';

module.exports = (sequelize, DataTypes) => {
  const postCategories = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, 
  {
    tableName: 'PostCategories', timestamps: false
  }) 

  postCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId', as: 'categories',
      otherKey: 'categoryId', through: 'PostCategory',
    })
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId', as: 'BlogPost',
      otherKey: 'postId', through: 'PostCategory',
    })
  }
  return postCategories 
}
