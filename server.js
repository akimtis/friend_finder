var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var htmlRoutes = require("./app/routing/htmlRoutes.js")
var apiRoutes = require("./app/routing/apiRoutes.js")
// var serveStatic = require('serve-static');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(serveStatic(__dirname + '/public'));

// app.use(express.static(path.join(__dirname, '/app/public')));
// app.use('/static', express.static(path.join(__dirname, './app/public')))

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// // Routes
// // =============================================================
// apiRoutes(app);
// htmlRoutes(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Server up...App listening on PORT " + PORT);
});
