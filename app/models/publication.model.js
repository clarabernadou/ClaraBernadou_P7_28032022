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
      allowNull: false
    },
    imageUrl: { 
      type: DataTypes.STRING
    }
  });
  return Publication;
};