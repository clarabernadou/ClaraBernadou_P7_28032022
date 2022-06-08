const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
/********* DATABASE *********/
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.publications = require("./publication.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model")(sequelize, Sequelize);

/*********** ROLES - USERS ***********/
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
/*********** USERS - ROLES ***********/
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.ROLES = ["user", "admin", "moderator"];
/*********** PUBLICATIONS - USERS ***********/
db.publications.belongsTo(db.user, {
  foreignKey: 'userId',
  as: 'user'
});
/*********** USERS - PUBLICATIONS  ***********/
db.user.hasMany(db.publications, {
  as: 'publications'
});
/*********** PUBLICATIONS - COMMENTS ***********/
db.publications.hasMany(db.comments, { 
  as: "comments" 
});
/*********** COMMENTS - PUBLICATIONS ***********/
db.comments.belongsTo(db.publications, {
  foreignKey: "publicationId",
  as: "publication",
});
/*********** USERS - COMMENTS ***********/
db.user.hasMany(db.comments, {
  as : 'comments'
});
/*********** COMMENTS - USERS ***********/
db.comments.belongsTo(db.user, {
  foreignKey: 'userId',
  as: 'user'
});

module.exports = db;