var express = require("express");
var path = require("path");

var app = express();
var PORT = 3035;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static('C:/Users/derek/OneDrive/Desktop/homework/Note-Taker/02-Homework/Develop/public'))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "02-Homework/Develop/public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "02-Homework/Develop/public/notes.html"));
  });
 

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  