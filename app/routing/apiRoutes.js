var path = require('path')
var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    console.log("sending JSON friends data to front end")
    console.log(friendsData)
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
      friendsData.push(req.body);
      res.json(true);
    });


    app.post('/api/friends', function(req, res){

      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000,
      };

      var newFriend = req.body;
      var newScores = newFriend.scores;

      var totalDifference = 0;

      for (var i = 0, i < friends.length; i++ ){

        totalDifference = 0;

        for (var j = 0; j < friends[i].scores[j]; j++) {

          totalDifference += Math.abs(parseInt(newScores[j]) - parseInt(friends[i].score[j]));
        
            if (totalDifference <= bestMatch.friendDifference) {

              bestMatch.name = friends[i].name;
              bestMatch.photo = friends[i].photo;
              bestMatch.friendDifference = totalDifference;
            }
        }
      }

      friends.push(newFriend);

      res.json(bestMatch);
    });

  }
  



  
