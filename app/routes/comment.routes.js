const comment = require("../controllers/comment.controller.js");
const auth = require("../middleware/index.js")
module.exports = function(app) {
  app.post("/api/:publicationId/comments", auth.authJwt.verifyToken, comment.createComment);
  app.get("/api/comments/:id", comment.findCommentById);
  app.get("/api/comments", comment.findAllComments);
  app.delete("/api/comments/delete/:id", comment.deleteComment);
};