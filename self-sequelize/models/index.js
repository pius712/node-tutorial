const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
