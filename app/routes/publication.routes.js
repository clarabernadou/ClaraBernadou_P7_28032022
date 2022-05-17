const publications = require("../controllers/publication.controller.js");
const multer = require('../middleware/multer.config');
module.exports = function(app) {
  app.post("/api/publication/create", multer, publications.create);
  app.get("/api/publications", multer, publications.findAll);
  app.get("/api/publications/published", multer, publications.findAllPublished);
  app.get("/api/publication/:id", multer, publications.findOne);
  app.put("/api/publication/update/:id", multer, publications.update);
  app.delete("/api/publication/delete/:id", publications.delete);
  app.delete("/api/publications/delete", publications.deleteAll);
};