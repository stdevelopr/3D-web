var express = require("express");
var app = express();
var path = require("path");

global.THREE = require("three");

//setting middleware
app.use(express.static("dist"));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

var server = app.listen(3000, () => {
  console.log("Server running on 3000");
});
