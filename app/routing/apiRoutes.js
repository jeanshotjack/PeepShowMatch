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
    var totalMath = 40; //5 possible responses, 10 questions, 5-1 = 4, 4 * 10 = 40 , 40 is the largest difference someone can have 

    for (i=0; i<friends.length; i++) {
        var math = 0;
        for (j=0; j<urScore.length; j++){
            math += Math.abs(friends[i].scores[j] - urScore[j]);
        }
        // assign the match stuff to the empty variable????
        if (math < totalMath) {

            totalMath = diff;
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }
    }

    friends.push(newFriend);
    res.json(newFriend);
  });