const comment = require("../controllers/comment.controller.js");
module.exports = function(app) {
  app.post("/api/comments/createComment", comment.createComment);
  app.get("/api/comments/:id", comment.findCommentById);
};