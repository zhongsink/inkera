'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    check: DataTypes.BOOLEAN,
    heats: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Question.hasMany(models.Answer);
      }
    }
  });
  return Question;
};