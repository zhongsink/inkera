'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ad = sequelize.define('Ad', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ad;
};