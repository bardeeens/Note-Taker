// required node modules
var express = require("express");
var path = require("path");
var fs = require('fs')

var app = express();
var PORT = process.env.PORT || 3035;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this allows us to use everything in the public folder(css, js)
app.use(express.static('./02-Homework/Develop/public'))

// gets us notes.html at /notes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/02-Homework/Develop/public/notes.html"));
  });
// gets us db.json at /api/notes
  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/02-Homework/Develop/db/db.json"));
  });
// posts changes to db.json
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

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/02-Homework/Develop/public/index.html"));
  });

    app.delete("/api/notes/:id", function(req, res){
    let rawData = fs.readFileSync('./02-Homework/Develop/db/db.json')
    let result = JSON.parse(rawData)
      
      var chosen = req.params.id
      console.log(result);
      
      for (let i = 0; i < result.length; i++) {
        if (result[i].id == chosen){
          result.splice(i, 1)
          console.log("its happening");
          res.json(result)
        }
       
        
      }
fs.writeFile(__dirname + "/02-Homework/Develop/db/db.json", JSON.stringify(result), function(error){
      if (error) {
        throw error
      }
      console.log("success");
    })
    })

   
  
   

    
  
 

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  