// hey timo, die wörter habe ich im server.js aufgesplittet und in das objekt als array gespeichert, das läuft soweit (siehe terminal). die tweets werden noch zu schnell geladen und der wordIndex, der die Worte sekündlich hochzählen soll, kommt nicht hinterher. pro tweet wird nun ein wort angezeigt, während der timer hochzählt. die idee war ja sowieso, den text im frame zu laden und die getTweet-funktion nur dazu benutzen, einen tweet zu laden und in den array als objekt zu pushen. der frame soll dann an der stelle tweetIndex durch die wörter an der stelle wordIndex loopen. wenn der wordIndex > word.length, wordIndex = 0, und im draw loop if wordIndex = 0, getTweet. das aktuelle problem ist nun, dass er die länge des arrays irgendwie nicht erkennt, also der wordIndex nie wieder zurückgesetzt wird.

// Reads a twitter stream and sends tweets from Node.js to p5.js


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




//---- TWITTER ----//

var latestTweet = {};

// setting up twit and api keys
var Twit = require('twit');

// pulling all twitter account info from another file
var config = require('./config');
var T = new Twit(config);

// define parameters for query and set up a stream
var params = {
  track: 'trump'
};
var stream = T.stream('statuses/filter', params);

// on receiving tweets, run tweetEvent
stream.on('tweet', tweetEvent);

function tweetEvent (tweet) {
  latestTweet = {
    id: tweet.id,
    user: tweet.user.screen_name,
    text: tweet.text,
    words: []
  }
  // split tweet text into words 
  var splitTweet = latestTweet.text.split(" ");
  
  // push each word into array
  for (var i = 0; i < splitTweet.length; i++) {
    latestTweet.words.push(splitTweet[i]);
  }

  console.log(latestTweet.words);
  //console.log("Tweet " + latestTweet.id + " by user " + latestTweet.user + ": " + latestTweet.text);
};




//---- ROUTE ----//

app.get("/nodetext", function (req, res) {
  res.json(latestTweet);
});
