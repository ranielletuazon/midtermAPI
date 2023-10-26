var express = require('express');
var app = express();
var fs = require("fs");

var movie = {
    "movie5" : {
       "title" : "The Conjuring",
       "director" : "James Wan",
       "genre" : "horror, suspense",
       "link" : "https://www.imdb.com/title/tt1457767/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520conjuring",
       "id": 5
    }
 }
 
 app.post('/addMovie', function (req, res) {
    fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["movie4"] = movie["movie4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

app.get('/listMovies', function (req, res) {
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
      var movies = JSON.parse( data );
      var movie = movies["movie" + req.params.id] 
      console.log( movie );
      res.end( JSON.stringify(movie));
   });
})

app.delete('/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["movie" + req.params.id];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})