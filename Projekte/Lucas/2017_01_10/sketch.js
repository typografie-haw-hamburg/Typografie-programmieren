// hey timo, die wörter habe ich im server.js aufgesplittet und in das objekt als array gespeichert, das läuft soweit (siehe terminal). die tweets werden noch zu schnell geladen und der wordIndex, der die Worte sekündlich hochzählen soll, kommt nicht hinterher. pro tweet wird nun ein wort angezeigt, während der timer hochzählt. die idee war ja sowieso, den text im frame zu laden und die getTweet-funktion nur dazu benutzen, einen tweet zu laden und in den array als objekt zu pushen. der frame soll dann an der stelle tweetIndex durch die wörter an der stelle wordIndex loopen. wenn der wordIndex > word.length, wordIndex = 0, und im draw loop if wordIndex = 0, getTweet. das aktuelle problem ist nun, dass er die länge des arrays irgendwie nicht erkennt, also der wordIndex nie wieder zurückgesetzt wird.
// edit: fixed, für wordLength laufen die tweets wohl auch zu schnell durch, bei kleinerer framerate werden sie allerdings angezeigt

var tweetsDisplayed = [];
var frames = [];
var oldID;
var tweetIndex = 0;
var wordIndex = 0;
var tempo = setInterval(wordTimer, 1000);

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frames[0] = new Frame();

  // set frame rate if tweets are rushing by too fast
  //frameRate(1);
}

function draw() {
  // in the loop each time call for the latest tweet

  // debugging
  // text("Anzahl der Tweets: " + tweetsDisplayed.length, 10, 50, 450, 450);
  // text("Dazugehörige Tweet-ID: " + tweetIndex, 10, 100, 450, 450);
  // text("Sekündlicher Wort-Zähler: " + wordIndex, 10, 150, 450, 450);
  // text("Anzahl der Wörter des Tweets: " + tweetsDisplayed[tweetIndex].words.length, 10, 300, 450, 450)
  
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
  
  // draw the recent word in latest tweet!
  background(255);
  textFont('Archivo Narrow');
  textSize(120);
  text(tweetsDisplayed[tweetIndex].words[wordIndex].toUpperCase(), 10, 50, 450, 450);

  // info
  text("Tweet Nr.: " + tweetIndex + " ", 10, 300, 800, 200);
  text("Word Nr.: " + wordIndex + " ", 10, 400, 800, 200);
  text("Anzahl Wörter: " + tweetsDisplayed[tweetIndex].words.length, 10, 500, 800, 200) // funktioniert nicht

  tweetIndex ++;
  oldID = latestTweet.id;
}

function wordTimer (){
  wordIndex = wordIndex + 1;
    
  if (wordIndex >= tweetsDisplayed[tweetIndex].words.length) {
    wordIndex = 0;
  }
  //console.log(wordIndex);
}

function Frame () {
  this.x = 100;
  this.y = 100;
  this.sizeX = 1000;
  this.sizeY = 1000;
 
  this.display = function () {
    noFill();
    rect(400, 10, 100, 400);
    // draw the recent word in latest tweet!
    fill(0);
    textFont('Archivo Narrow');
    textSize(20);

    text(tweetsDisplayed[tweetIndex].words[wordIndex].toUpperCase(), 10, 50, 450, 450);
    text("Tweet Nr.: " + tweetIndex + " ", 10, 300, 800, 200);
    text("Word Nr.: " + wordIndex + " ", 10, 400, 800, 200);  
  }
}
