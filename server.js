var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var api = require("./app/routing/apiRoutes.js")(app);
var html = require("./app/routing/htmlRoutes.js")(app);

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });