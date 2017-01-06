var tweetIncoming;
console.log('The bot is starting');

// setting up twit and api keys
var twit = require('twit');
var config = require('./config');
var T = new twit(config);


// define parameters for query
var params = {
  track: 'refugee',
}
// set up a stream
var stream = T.stream('statuses/filter', params);

// assign stream to on function (event, callback)
stream.on('tweet', tweetEvent);

  // save tweets into a file
var fs = require('fs');
var json = JSON.stringify(tweet.text, null, 2);
fs.writeFile(params + "tweet" + counter + ".json", json);
var counter = 0;

// write callback function
function tweetEvent (tweet) {
  //console.log('USER ' + tweet.user.screen_name + '.--- TEXT ' + tweet.text + '.--------------------' + counter)
  var tweetIncoming = JSON.stringify(tweet.text, null, 2);
  console.log(tweetIncoming);
  

  
  counter ++
}



