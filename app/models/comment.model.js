module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
      username: {
        type: DataTypes.STRING, 
        required: true 
      },
      descriptionComment: {
        type: DataTypes.STRING, 
        require: true 
      },
      publicationId: {
        type: DataTypes.INTEGER,
        required: true 
      }
    });
    return Comment;
  };