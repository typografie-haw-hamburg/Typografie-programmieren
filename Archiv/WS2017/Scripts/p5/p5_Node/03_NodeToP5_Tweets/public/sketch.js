var oldID;

function setup() {
  createCanvas(640, 360);

  // set frame rate if tweets are rushing by too fast
  //frameRate(5);
}

function draw() {
  // in the loop each time call for the latest tweet
  getLatestTweet();
}

function getLatestTweet() {
  loadJSON("/nodetext", gotLatestTweet);
}

function gotLatestTweet(latestTweet) {

  // if the latest tweet is still the same one, we do not need to redraw
  if(latestTweet.id === oldID) {
    return;
  };

  // else we draw the new tweet
  background(200);
  text("ID: " + latestTweet.id, 50, 50);
  text("User: " + latestTweet.user, 50, 100);
  text("Tweet: " + latestTweet.text, 50, 150, 450, 450);
  oldID = latestTweet.id;
}