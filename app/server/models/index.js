'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const winston = require('winston');
let basename  = path.basename(__filename);
let env       = process.env.NODE_ENV || 'development';
let config    = require(__dirname + '/../../../config/config.json')[env];
let db        = {};

// ORM database log
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: 'log/database.log'}),
  ],
});

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: (msg) => logger.info(msg),
  freezeTableName: true,
  operatorsAliases: false
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
