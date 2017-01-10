// Continuously sends random numbers from Node.js to a p5.js sketch


//---- SERVER ----//

var express = require('express');
var app = express();

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);

});

// This is for hosting files
// Anything in the public directory will be served
app.use(express.static('public'));



//---- ROUTE ----//

app.get("/nodetext", function (req, res) {
  // sends a random number between 1 and 100
  res.send( Math.ceil(Math.random()*100) + "");
});