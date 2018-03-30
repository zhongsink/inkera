'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recruit = sequelize.define('Recruit', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    from: DataTypes.STRING,
    url: DataTypes.STRING,
    check: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recruit;
};