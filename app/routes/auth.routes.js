const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const multer = require('../middleware/multer.config');
const userPassLength = require('../middleware/password');
const auth = require("../middleware/index.js")
module.exports = function(app) {
  app.post("/api/auth/signup", [ verifySignUp.checkRolesExisted ], userPassLength, controller.signup);
  app.post("/api/auth/signin", controller.signin);
  app.post("/api/auth/signout", auth.authJwt.verifyToken, controller.signout);
  app.put("/api/auth/profile/update/:id", auth.authJwt.verifyToken, controller.update);
  app.delete("/api/auth/profile/delete/:id", auth.authJwt.verifyToken, controller.delete);
  app.get("/api/auth/profile/:id", auth.authJwt.verifyToken, controller.findOne);
  app.post("/api/upload_file/:id", multer, auth.authJwt.verifyToken, controller.uploadFile);
};