// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // If url is localhost:3000/home go to home.html
  app.get("/home", function(req, res) {
    res.send("hit home route")
    res.sendFile(path.join(__dirname +'/../public/home.html'));
  });

  // If url is localhost:3000/survey go to survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    console.log("default routing")
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

};






