module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
      userId: {
        type: DataTypes.INTEGER,
        required: true
      },
      username: {
        type: DataTypes.STRING, 
        required: true 
      },
      descriptionComment: {
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