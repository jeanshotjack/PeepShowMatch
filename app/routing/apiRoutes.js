app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log("req.body:");
    console.log(req.body);
    friends.push(newFriend);
    res.json(newFriend);
  });