'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    phone: DataTypes.STRING,
    github: DataTypes.STRING,
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    introduction: DataTypes.STRING,
    website: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile;
};