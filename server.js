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

app.use(express.static(path.join(__dirname, '/app/public')));
// app.use('/static', express.static(path.join(__dirname, './app/public')))



// // Routes
// // =============================================================
apiRoutes(app);
htmlRoutes(app);

// // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.send("hit home route")
  // console.log("home route..serving up home page")
  // res.sendFile(path.join(__dirname + '/index.html'));
  // res.sendFile(path.join(__dirname, "/home.html"));
  res.sendFile(process.cwd() + '/app/public/home.html');
});



// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         res.json(characters[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(characters);
//   }
// });

// Create New Friends - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newfriend = req.body;
//   newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newfriend);

//   friends.push(newfriend);

//   res.json(newfriend);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Server up...App listening on PORT " + PORT);
});
