module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
      name: {
        type: DataTypes.STRING, 
        required: true 
      },
      text: {
        type: DataTypes.STRING, 
        required: true 
      },
      tutorialId: {
        type: DataTypes.STRING, 
        required: true 
      }
    });
    return Comment;
  };