module.exports = (sequelize, Sequelize, DataTypes) => {
  const Publication = sequelize.define("publication", {
    userId: { 
      type: Sequelize.STRING, 
      required: true 
    },
    title: {
      type: Sequelize.STRING,
      required: true 
    },
    description: {
      type: Sequelize.STRING,
      required: true
    },
    imageUrl: { 
      type: Sequelize.STRING,
      required: true 
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Publication;
};