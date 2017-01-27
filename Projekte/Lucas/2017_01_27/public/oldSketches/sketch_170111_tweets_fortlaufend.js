// hey timo, die wörter habe ich im server.js aufgesplittet und in das objekt als array gespeichert, das läuft soweit (siehe terminal). die tweets werden noch zu schnell geladen und der wordIndex, der die Worte sekündlich hochzählen soll, kommt nicht hinterher. pro tweet wird nun ein wort angezeigt, während der timer hochzählt. die idee war ja sowieso, den text im frame zu laden und die getTweet-funktion nur dazu benutzen, einen tweet zu laden und in den array als objekt zu pushen. der frame soll dann an der stelle tweetIndex durch die wörter an der stelle wordIndex loopen. wenn der wordIndex > word.length, wordIndex = 0, und im draw loop if wordIndex = 0, getTweet. das aktuelle problem ist nun, dass er die länge des arrays irgendwie nicht erkennt, also der wordIndex nie wieder zurückgesetzt wird.


// array with all the tweet objects
var tweetsDisplayed = [];
// array for frames
var frames = [];
// proofer
var oldID;
// counts the tweet, used to display the tweet
var tweetIndex = 0;
// loops through words in a tweet
var wordIndex = 0;
// sets the time a word is being displayed
var tempo = setInterval(wordTimer, 1000);
// imcoming tweet from node.js
var latestTweet;

function preload () {
  getLatestTweet(); 
  wordTimer();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  // get one tweet
  
  // set up a frame
 

  // set frame rate if tweets are rushing by too fast
  frameRate(1);
}


function draw() {
  background(255);
  
  console.log("tweet nr: " + (tweetIndex - 1));
  console.log("tweetlaenge: " + tweetsDisplayed[tweetIndex - 1].words.length);
  console.log("word nr: " + wordIndex);
  console.log("THE WORD: " + tweetsDisplayed[tweetIndex - 1].words[wordIndex]);

  
  // load tweets into frame
  frames[0] = new Frame(20, 20, 1000, 1000);
  frames[0].display();

  frames[1] = new Frame(20, 300, 1000, 1000);
  frames[1].display();

  frames[2] = new Frame(20, 600, 1000, 1000);
  frames[2].display();
}


function getLatestTweet() {
  loadJSON("/nodetext", gotLatestTweet);
}


function gotLatestTweet(latestTweet) {

  // if the latest tweet is still the same one, we do not need to redraw
  if(latestTweet.id === oldID) {
    return;
  };

  // else push the latest tweet into array
  tweetsDisplayed.push(latestTweet);
  
  tweetIndex ++;
  oldID = latestTweet.id;
}


function wordTimer (){
  wordIndex = wordIndex + 1;
    
  if (wordIndex > tweetsDisplayed[tweetIndex - 1].words.length - 1) {
    wordIndex = 0;
    // only call for latest tweet only if wordIndex has run through last tweets words
    getLatestTweet();
    console.log("neuer tweet wird geladen");
  }
  //console.log(wordIndex);
}


function Frame (x, y, sizeX, sizeY) {
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
 
  this.display = function () {
    // noFill();
    // fill(200)
    // rect(0, 0, windowWidth, windowHeight);

    // draw the recent word in latest tweet!
    textSize(120);
    textFont('Archivo Narrow');
    text(tweetsDisplayed[tweetIndex - 1].words[wordIndex].toUpperCase(), this.x, this.y, 450, 450);

    // info
    textSize(20);
    text("TWEET # " + (tweetIndex - 1) + " ", this.x, this.y + 140, 800, 200);
    text("WORD # " + wordIndex + " ", this.x, this.y + 160, 800, 200);
    text("LENGTH: " + tweetsDisplayed[tweetIndex - 1].words.length, this.x, this.y + 180, 900, 200)   
  }
}
