var express = require("express");
var path = require("path");
var fs = require('fs')

var app = express();
var PORT = process.env.PORT || 3035;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [
];

app.use(express.static('./02-Homework/Develop/public'))


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/02-Homework/Develop/public/notes.html"));
  });

  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/02-Homework/Develop/db/db.json"));
  });

  app.post("/api/notes", function(req, res) {
    let newNote = req.body
    let rawData = fs.readFileSync('./02-Homework/Develop/db/db.json')
    let result = JSON.parse(rawData)
    newNote.id = new Date();
    result.push(newNote)
    fs.writeFile(__dirname + "/02-Homework/Develop/db/db.json", JSON.stringify(result), function(error){
      if (error) {
        throw error
      }
      console.log("success");
    })
  });
    app.delete("/api/notes/:notes", function(req, res){
    let rawData = fs.readFileSync('./02-Homework/Develop/db/db.json')
    let result = JSON.parse(rawData)
      
      var chosen = req.params.newNote
      console.log(chosen);
      
      for (let i = 0; i < result.length; i++) {
        if (result[i].id == result){
          result.remove(result[i])
          console.log("its happening");
        }
       
        
      }

    })

    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "/02-Homework/Develop/public/index.html"));
    });
  
   

    
  
 

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  