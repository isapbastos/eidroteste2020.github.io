//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
//console.log(req.body.crypto);
//para pegar um elemento do json
var tipo = req.body.tipo;
  res.write("<h1>"+tipo+".</h1>");
  res.send();


});
app.listen(process.env.PORT || 3000, function() {
  console.log("server is running on port 3000!");
});
