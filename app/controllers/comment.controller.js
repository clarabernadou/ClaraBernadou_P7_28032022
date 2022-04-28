const db = require("../models");
const Comment = db.comments;

exports.createComment = (req, res, tutorialId) => {
    const comment = {
      name: req.body.name,
      text: req.body.text,
      tutorialId: req.params.tutorialId
    }
    Comment.create(comment)
      .then((data) => {
        console.log(">> Created comment: " + JSON.stringify(data, null, 4));
        return data;
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
};

exports.findCommentById = (id) => {
    return Comment.findByPk(id, { include: ["tutorial"] })
      .then((comment) => {
        return comment;
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
  };