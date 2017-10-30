var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + "/../client/build"))


app.listen(3000, function(){
  console.log("Listening on port 3000");
})
