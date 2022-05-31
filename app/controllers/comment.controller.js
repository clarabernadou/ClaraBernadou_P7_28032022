const db = require("../models");
const Publication = db.publications;
const Comment = db.comments;

exports.createComment = (req, res) => {
  const comment = {
    username: req.body.username,
    descriptionComment: req.body.descriptionComment,
    publicationId: req.body.publicationId,
    userId: req.userId
  }
  console.log("Comment console.log ⬇️")
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

// Retrieve all publications from the database.
exports.findAllComments = (req, res) => {
  Comment.findAll()
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving publications."
      });
    });
};

// Delete a publication with the specified id in the request
exports.deleteComment = (req, res) => {
  const id = req.params.id;
  Comment.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Comment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete comment with id=${id}. Maybe comment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete comment with id=" + id
      });
    });
};
