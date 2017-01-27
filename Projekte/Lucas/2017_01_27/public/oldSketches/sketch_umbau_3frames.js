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
//var tempo = setInterval(wordTimer, 1000);
// imcoming tweet from node.js
var latestTweet;
// number of Frames
var numberOfFrames = 3;

function preload () {
  for(var i = 0; i < numberOfFrames; i++) {
    getLatestTweet();
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
   // set frame rate if tweets are rushing by too fast
  //frameRate(1);
}


function draw() {
  background(255);
  
  tweetsDisplayed[0];
  tweetsDisplayed[1];
  tweetsDisplayed[2];
  // load tweets into frame
  for(var i = 0; i < numberOfFrames; i++) {
    frames[i] = new Frame(20, 300 * i, 1000, 1000, i);
    frames[i].display();
  }


  // console.log("tweet nr: " + (tweetIndex));
  // console.log("tweetlaenge: " + tweetsDisplayed[tweetIndex - 1].words.length);
  // console.log("word nr: " + wordIndex);
  // console.log("THE WORD: " + tweetsDisplayed[tweetIndex - 1].words[wordIndex]);
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


/*function wordTimer (){
  wordIndex = wordIndex + 1;
    
  if (wordIndex > tweetsDisplayed[tweetIndex - 1].words.length - 1) {
    wordIndex = 0;
    // only call for latest tweet only if wordIndex has run through last tweets words
    getLatestTweet();
    console.log("neuer tweet wird geladen");
  }
  //console.log(wordIndex);
}*/


function Frame (x, y, sizeX, sizeY, frameNumber) {
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.frameNumber = frameNumber;
  

  this.display = function () {
    console.log("frame number: " + frameNumber);
    console.log("tweetsDisplayed " + tweetsDisplayed[frameNumber]);
    // noFill();
    // fill(200)
    // rect(0, 0, windowWidth, windowHeight);

    // draw the recent word in latest tweet!
    textSize(50);
    textFont('Archivo Narrow');
    text(tweetsDisplayed[frameNumber].text.toUpperCase(), this.x, this.y, 450, 450);

    // info
    // textSize(20);
    // text("TWEET # " + (tweetIndex - 1) + " ", this.x, this.y + 140, 800, 200);
    // text("WORD # " + wordIndex + " ", this.x, this.y + 160, 800, 200);
    // text("LENGTH: " + tweetsDisplayed[tweetIndex - 1].words.length, this.x, this.y + 180, 900, 200)   
  }
}
