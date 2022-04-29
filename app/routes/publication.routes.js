module.exports = app => {
  const publications = require("../controllers/publication.controller.js");
  var router = require("express").Router();

  // Create a new publication
  router.post("/", publications.create);
  // Retrieve all publication
  router.get("/", publications.findAll);
  // Retrieve all published publication
  router.get("/published", publications.findAllPublished);
  // Retrieve a single publication with id
  router.get("/:id", publications.findOne);
  // Update a publication with id
  router.put("/:id", publications.update);
  // Delete a publication with id
  router.delete("/:id", publications.delete);
  // Delete all publication
  router.delete("/", publications.deleteAll);
  //like or dislike a publication
  router.patch('/:id/like', publications.likeOrNot);

  app.use('/api/home', router);
};