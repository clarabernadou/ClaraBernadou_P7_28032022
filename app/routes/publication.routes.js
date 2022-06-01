const publications = require("../controllers/publication.controller.js");
const multer = require('../middleware/multer.config');
const auth = require("../middleware/index.js")

module.exports = function(app) {
  app.post("/api/publication/create", auth.authJwt.verifyToken, multer, publications.create);
  app.get("/api/publications", multer, auth.authJwt.verifyToken, publications.findAll);
  app.get("/api/publications/published", multer, auth.authJwt.verifyToken, publications.findAllPublished);
  app.get("/api/publication/:id", multer, auth.authJwt.verifyToken, publications.findOne);
  app.put("/api/publication/update/:id", multer, auth.authJwt.verifyToken, publications.update);
  app.delete("/api/publication/delete/:id", auth.authJwt.verifyToken, publications.delete);
  app.delete("/api/publications/delete", auth.authJwt.verifyToken, publications.deleteAll);
};