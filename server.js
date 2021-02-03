var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3035;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

var notes = [
];

app.use(express.static('./02-Homework/Develop/public'))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "02-Homework/Develop/public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "02-Homework/Develop/public/notes.html"));
  });

  app.get("/api/:notes", function(req, res) {
    return res.json(notes);
  });
 

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  