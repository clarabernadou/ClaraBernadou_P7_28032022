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
    }
   console.log("hello") 
    // Create a publication
    const publication = {
      userId: req.body.userId,
      description: req.body.description,
      imageUrl: req.body.imageUrl
    };
    // Save publications in the database
    Publication.create(publication)
      .then(data => {
        res.send(data);
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
    const description = req.query.description;
    var condition = description ? { description: { [Op.like]: `%${description}%` } } : null;
    Publication.findAll({ where: condition })
      .then(data => {
        res.send(data);
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
    Publication.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Publication was deleted successfully!"
          });
        } else {
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
  Publication.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving publications."
        });
      });
  };

  exports.likeOrNot = (req, res, next) => {
    if (req.body.like === 1) {
        Publication.updateOne({ _id: req.params.id }, { $inc: { likes: req.body.like++ }, $push: { usersLiked: req.body.userId } })
            .then((publication) => 
              res.status(200).json({ message: 'Add like' })) //if like is add
            .catch(error => 
                res.status(400).json({ error })) //else return 400 error
    } else if (req.body.like === -1) {
      Publication.updateOne({ _id: req.params.id }, { $inc: { dislikes: (req.body.like++) * -1 }, $push: { usersDisliked: req.body.userId } })
            .then((publication) => 
              res.status(200).json({ message: 'Add dislike' })) //if dislike is add
            .catch(error => 
                res.status(400).json({ error })) //else return 400 error
    } else {
  Publication.findOne({ _id: req.params.id })
    .then(publication => {
      if (publication.usersLiked.includes(req.body.userId)) {
      Publication.updateOne({ _id: req.params.id }, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
        .then(
          (publication) => { 
            res.status(200).json({ message: 'Like deleted' }) }) //if like is deleted
  .catch(
    error => res.status(400).json({ error })) //else return 400 error
  } else if (publication.usersDisliked.includes(req.body.userId)) {
    Publication.updateOne(
      { _id: req.params.id }, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
        .then(
          (publication) => { 
            res.status(200).json({ message: 'Dislike deleted' }) }) //if dislike is deleted
  //IF ELSE
  .catch(
    error => 
      res.status(400).json({ error })) //else return 400 error
          }
    })
  //IF ELSE
  .catch(
    error => 
      res.status(400).json({ error })) //else return 400 error
    }
  }