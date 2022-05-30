const db = require("../models");
const Publication = db.publications;
const Comment = db.comments;

exports.createComment = (req, res) => {

  const comment = {
    userId: req.body.userId,
    username: req.body.username,
    descriptionComment: req.body.descriptionComment,
    publicationId: req.body.publicationId,
  }

  console.log(comment);

  Comment.create(comment)
    .then((comment) => {
      console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};
exports.findCommentById = (id) => {
  return Comment.findByPk(id, { include: ["publication"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
};

