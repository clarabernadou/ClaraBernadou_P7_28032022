const comment = require("../controllers/comment.controller.js");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/publication/:id/comment",
    comment.createComment
  );
  app.get("/api/publication/:id/comment/:id", comment.findCommentById);
};