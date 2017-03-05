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

  var friendData = require('../data/friends.js');


    app.post('/api/friends', function(req, res){
      var newFriend = req.body;

      for(var i = 0; i < newFriend.scores.length; i++) {
        if(newFriend.scores[i] == "1") {
          newFriend.scores[i] = 1;
        } else if(newFriend.scores[i] == "5") {
          newFriend.scores[i] = 5;
        } else {
          newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
      }

      var differencesArray = [];

      for(var i = 0; i < friendData.length; i++) {

        var comparedFriend = friendData[i];
        var totalDifference = 0;
        
        for(var k = 0; k < comparedFriend.scores.length; k++) {
          var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
          totalDifference += differenceOneScore;
        }

        differencesArray[i] = totalDifference;
      }

      var bestFriendNum = differencesArray[0];
      var bestFriendIndex = 0;

      for(var i = 1; i < differencesArray.length; i++) {
        if(differencesArray[i] < bestFriendNum) {
          bestFriendNum = differencesArray[i];
          bestFriendIndex = i;
        }
      }

      friendData.push(newFriend);

      res.json(friendData[bestFriendIndex]);
    })
  }
  



  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendsData = [];

//     console.log(friendsData);
//   });
// };


// Search for Specific Friend (or all friends) - provides JSON
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
