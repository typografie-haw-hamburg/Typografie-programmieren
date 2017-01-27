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
// list containing all words and its frequency
var wordList = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(1);
  //getLatestTweet(); 
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

  // else we push the latest tweet into array
  tweetsDisplayed.push(latestTweet);

  // and the words into the wordList
  wordList.push(latestTweet.words.contents);
  
  // draw the recent word in latest tweet!
  background(255);
  textFont('Archivo Narrow');
  textSize(120);
  text(tweetsDisplayed[tweetIndex].words[wordIndex].toUpperCase(), 10, 10, 450, 450);

  // info
  text("tweet Nr.: " + tweetIndex + " ", 10, 200, 800, 200);
  text("word Nr.: " + wordIndex + " ", 10, 300, 800, 200);
  text("tweet length: " + tweetsDisplayed[tweetIndex].words.length, 10, 400, 900, 200);
  text("all words Count: " + wordList.length, 10, 500, 1200, 200);

  tweetIndex ++;
  oldID = latestTweet.id;
}


function wordTimer (){
  wordIndex = wordIndex + 1;
    
  if (wordIndex >= 12 /*tweetsDisplayed[tweetIndex].words.length*/) {
    wordIndex = 0;
  }
  //console.log(wordIndex);
}


/*function Frame () {
  this.x = 100;
  this.y = 100;
  this.sizeX = 1000;
  this.sizeY = 1000;
 
  this.display = function () {
    noFill();
    fill(200)
    rect(0, 0, windowWidth, windowHeight);

    // draw the recent word in latest tweet!
    textFont('Archivo Narrow');
    textSize(120);
    //text(tweetsDisplayed[tweetIndex].words[wordIndex].toUpperCase(), 10, 50, 450, 450);

    // info
    text("Tweet Nr.: " + tweetIndex + " ", 10, 300, 800, 200);
    text("Word Nr.: " + wordIndex + " ", 10, 400, 800, 200);
    //text("Anzahl Wörter: " + tweetsDisplayed[tweetIndex].words.length, 10, 500, 900, 200)

    
  }
}*/