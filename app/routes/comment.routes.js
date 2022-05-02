module.exports = app => {
    const comment = require("../controllers/comment.controller.js");
    var router = require("express").Router();
  
    // Create a new publication
    router.post("/", comment.createComment);
    // Retrieve a single publication with id
    router.get("/:id", comment.findCommentById);
  
    app.use('/api/:id', router);
  };