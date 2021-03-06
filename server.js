const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const passport = require('passport');
const config = require('./server/config');
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001;

const app = express();

// connect to the database and load models
// uses environmental variable for deployment (Heroku) or defaults to local config
const uri = process.env.MONGODB_URI || "mongodb://localhost/trovedb";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// plug in the promise library:
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});

// Use morgan logger for logging requests
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(function(req, res, next) {
    var schema = req.headers["x-forwarded-proto"];

    if (schema === "https") {
      req.connection.encrypted = true;
    }

    next();
  });

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());
app.use(cors());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

