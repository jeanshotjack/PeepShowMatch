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

    friends.push(newFriend);
    res.json(newFriend);
  });