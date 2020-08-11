const createError = require('http-errors');
const express = require('express');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')
const logger = require('morgan');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

app.use("/", require("./src/router/test.js"));
app.use("/Week", require('./src/router/week.js'));
app.use("/Recipe", require('./src/router/recipe.js'));
app.use("/Import", require("./src/router/scraper.js"));
app.use("/Image", require("./src/router/image.js"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: err
  });
});

module.exports = app;
