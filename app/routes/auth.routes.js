const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const multer = require('../middleware/multer.config');
module.exports = function(app) {
  app.post("/api/auth/signup", [ verifySignUp.checkRolesExisted ], controller.signup);
  app.post("/api/auth/signin", controller.signin);
  app.post("/api/auth/signout", controller.signout);
  app.put("/api/auth/profile/update/:id", multer, controller.update);
  app.delete("/api/auth/profile/delete/:id", controller.delete);
  app.get("/api/auth/profile/:id", controller.findOne);
  app.post("/api/upload_file/:id", multer, controller.uploadFile);
};