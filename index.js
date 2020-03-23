var express = require("express");
var app = express();
var path = require("path");

//setting middleware
app.use(express.static("public"));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

var server = app.listen(3000, () => {
  console.log("Server running on 3000");
});
