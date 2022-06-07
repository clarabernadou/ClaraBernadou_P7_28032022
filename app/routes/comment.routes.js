const comment = require("../controllers/comment.controller.js");
const auth = require("../middleware/index.js")
module.exports = function(app) {
  app.post("/api/:publicationId/comments", auth.authJwt.verifyToken, comment.createComment);
  app.get("/api/comments/:id", auth.authJwt.verifyToken, comment.findCommentById);
  app.get("/api/comments", auth.authJwt.verifyToken, comment.findAllComments);
  app.delete("/api/:publicationId/comments/delete/:commentId", auth.authJwt.verifyToken, comment.deleteComment);
};