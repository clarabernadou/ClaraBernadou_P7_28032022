module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
      userId: {
        type: DataTypes.INTEGER,
        required: true
      },
      name: {
        type: DataTypes.STRING, 
        required: true 
      },
      text: {
        type: DataTypes.STRING, 
        required: true 
      },
      publicationId: {
        type: DataTypes.INTEGER,
        required: true 
      }
    });
    return Comment;
  };