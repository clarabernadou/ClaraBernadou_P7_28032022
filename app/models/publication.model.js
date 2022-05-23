module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define("publication", {
    userId: {
      type: DataTypes.INTEGER,
      required: true
    },
    username: {
      type: DataTypes.STRING,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    imageUrl: { 
      type: DataTypes.STRING
    },
    like: {
      type: DataTypes.INTEGER
    },
    dislike: {
      type: DataTypes.INTEGER
    },
  });
  return Publication;
};