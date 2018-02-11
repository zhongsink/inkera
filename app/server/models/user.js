'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    usename: DataTypes.STRING,
    email: DataTypes.STRING,
    encrypted_password: DataTypes.STRING,
    authentication_token: DataTypes.STRING,
    portrait: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};