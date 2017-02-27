// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};





// Basic route that sends the user first to the AJAX Page
// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "//public/survey.html"));
// });

// app.get("/home", function(req, res) {
//   res.sendFile(path.join(__dirname, "//public/home.html"));
// });

// // Search for Specific Friend (or all friends) - provides JSON
// app.get("/api/:friends?", function(req, res) {
//   var chosen = req.params.friends;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < friends.length; i++) {
//       if (chosen === friends[i].routeName) {
//         res.json(friends[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(friends);
//   }
// });