var path = require("path");

var friends = require("../data/friends.js")

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log("req.body:");
    console.log(req.body);

    var urScore = newFriend.scores;

    //these get called in survey.html
    var matchName = "";
    var matchPhoto = "";

    for (i=0; i<friends.length; i++) {
        for (j=0; j<urScore.length; j++){
            // absolute vslue here I think
        }
        // assign the match stuff to the empty variable????
    }

    friends.push(newFriend);
    res.json(newFriend);
  });