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
db.publications = require("./tutorial.model.js")(sequelize, Sequelize);
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
/*********** USERS - PUBLICATIONS ***********/
db.user.hasMany(db.publications, {
    foreignKey: "publicationId",
    otherKey: "userId",
    as: "publications"
})
/*********** PUBLICATIONS - USERS ***********/
db.publications.belongsTo(db.user, {
  foreignKey: "userId",
  otherKey: "publicationId",
  as: "user"
})
/*********** USERS - COMMENTS ***********/
db.user.hasMany(db.comments, {
  foreignKey: "commentId",
  otherKey: "userId",
  as: "comments"
})
/*********** COMMENTS - USERS ***********/
db.comments.belongsTo(db.user, {
  foreignKey: "userId",
  otherKey: "commentId",
  as: "comment"
})
/********** PUBLICATIONS - COMMENTS **********/
db.publications.hasMany( db.comments, { 
    foreignKey: "commentId",
    otherKey: "publicationId",
    as: "comments" 
});
/*********** COMMENTS - PUBLICATIONS ***********/
db.comments.belongsTo(db.publications, {
  foreignKey: "publicationId",
  otherKey: "commentId",
  as: "publications",
});


module.exports = db;