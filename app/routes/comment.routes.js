const comment = require("../controllers/comment.controller.js");
module.exports = function(app) {
  app.post("/api/:id/comment", comment.createComment);
  app.get("/api/:id/comment/:id", comment.findCommentById);
};