const publications = require("../controllers/publication.controller.js");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/publication/create",
    publications.create
  );
  app.get("/api/publications", publications.findAll);
  app.get("/api/publications/published", publications.findAllPublished);
  app.get("/api/publication/:id", publications.findOne);
  app.put("/api/publication/update/:id", publications.update);
  app.delete("/api/publication/delete/:id", publications.delete);
  app.delete("/api/publications/delete", publications.deleteAll);
};