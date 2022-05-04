module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define("publication", {
    userId: {
      type: DataTypes.INTEGER,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    imageUrl: { 
      type: DataTypes.STRING
    }
  });
  return Publication;
};