// Sends a text from Node.js to a p5.js sketch


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

// if a get request is sent to the path "/nodetext" the callback function will send some text to this address
app.get("/nodetext", function (req, res) {
  res.send('I am a text that travelled from Node.js to p5.js!');
});