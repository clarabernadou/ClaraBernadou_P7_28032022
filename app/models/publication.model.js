module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define("publication", {
    userId: {
      type: DataTypes.INTEGER,
      required: true
    },
    title: {
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
    published: {
      type: DataTypes.BOOLEAN
    }
  });
  return Publication;
};