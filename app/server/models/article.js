'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    lable: DataTypes.STRING,
    check: DataTypes.BOOLEAN,
    heats: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Article.hasMany(models.Like);
      }
    }
  });
  return Article;
};