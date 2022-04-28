module.exports = app => {
    const publications = require("../controllers/comment.controller.js");
    var router = require("express").Router();
  
    // Create a new publication
    router.post("/", publications.createComment);
    // Retrieve a single publication with id
    router.get("/:id", publications.findCommentById);
  
    app.use('/api/publications', router);
  };