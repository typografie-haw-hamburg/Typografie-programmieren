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
  track: 'refugee',
  lang: 'en'
};
var stream = T.stream('statuses/filter', params);

// on receiving tweets, run tweetEvent
stream.on('tweet', tweetEvent);

function tweetEvent (tweet) {
  latestTweet = {
    id: tweet.id,
    user: tweet.user.screen_name,
    time: tweet.created_at.split(" ")[3],
    text: tweet.text,
    words: []
  }
  // split tweet text into words
  var splitTweet = latestTweet.text.split(" ");

  // push each word into array
  // if (splitTweet.content.startsWith) {

  // }

  for (var i = 0; i < splitTweet.length; i++) {
    latestTweet.words.push(splitTweet[i]);
  }

  console.log(latestTweet.text);
  //console.log("Tweet " + latestTweet.id + " by user " + latestTweet.user + ": " + latestTweet.text);
};




//---- ROUTE ----//

app.get("/nodetext", function (req, res) {
  res.json(latestTweet);
});