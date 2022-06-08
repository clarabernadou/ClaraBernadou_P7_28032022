const { response } = require("express");
const db = require("../models");
const Publication = db.publications;
const Comment = db.comments;

const Op = db.Sequelize.Op;
// Create and Save a new publication
exports.create = (req, res) => {
    // Validate request
    if (!req.body.description) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    };
    // Create a publication
    const publication = {
      userId: req.body.userId,
      username: req.body.username,
      description: req.body.description,
      imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null,
    };
    // Save publications in the database
    Publication.create(publication)
      .then(data => {
        const post = data.get({plain: true});
        post.comments = []
        console.log("Post console.log (for add comments array) ⬇️")
        console.log(post)
        res.send(post);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the publications."
        });
      });
  };
// Retrieve all publications from the database.
exports.findAll = (req, res) => {
    Publication.findAll({
      include: ["comments"],
    })
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
// Find a single publication with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Publication.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find publication with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving publication with id=" + id
        });
      });
  };
// Update a publication by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Publication.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Publication was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update publication with id=${id}. Maybe publication was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating publication with id=" + id
        });
      });
  };
// Delete a publication with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Publication.findByPk(id)
    .then(post => {
      if(post.userId === req.userId || req.userRole === "admin"){
        Publication.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Publication was deleted successfully!"
              });
            }else{
              res.send({
                message: `Cannot delete publication with id=${id}. Maybe publication was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete publication with id=" + id
            });
          });
      };
    });
    }
// Delete all publications from the database.
exports.deleteAll = (req, res) => {
  Publication.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} publications were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all publications."
      });
    });
};
// Find all published publications
exports.findAllPublished = (req, res) => {
  Publication.findAll({ raw: true, where: { published: true }, include: ['user'] })
    .then(publications => {
      Comment.findAll().then(comments => {
        const publicationsWithComments = publications.map(publication => {
          console.log(publication)
          publication.comments = [];
          comments.forEach(comment => {
            if (comment.publicationId === publication.id) {
              publication.comments.push(comment);
            }
          })
          return tuto;
        })
        //console.log(publicationsWithComments);
        res.send(publicationsWithComments);
      })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error"
      })
    })
}