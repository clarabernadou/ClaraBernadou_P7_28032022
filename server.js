//Import utils
const express = require("express");
const cookieSession = require("cookie-session");
const path = require('path');
const app = express();
const db = require("./app/models");

const controller = require("./app/controllers/publication.controller");

const Role = db.role;

//app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }


db.sequelize.sync();

/* db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db'); 
  initial()
}); */

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/publication.routes")(app);
require("./app/routes/comment.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// images
app.use('/images', express.static(path.join(__dirname, '/public/images')));

// security
var helmet = require('helmet');
app.use(helmet());
