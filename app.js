const createError = require('http-errors');
const express = require('express');
const bodyParser = require("body-parser");
const logger = require('morgan');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let recipe = require('./src/recipe.js');;
let week = require('./src/week.js')

app.all("/", (req, res) => {
    //forward to react client
    res.end("Hello World!");
});

app.use("/Week", week);
app.use("/Recipe", recipe);

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
      error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
