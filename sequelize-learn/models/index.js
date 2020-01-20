const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'; //production
const config = require('../config/config.json')[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

const db = {};

db.User = require('./User')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize); // 모듈을 가져온 다음에 바로 함수를 호출하는 것..!

db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });

db.Sequelize = Sequelize; // 패키지
db.sequelize = sequelize; // 인스턴스

module.exports = db;

// 1:1 hasOne, belongsTo
// 1:N hasMany, belongsTo
// N:N belongsToMany
