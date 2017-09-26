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
// imcoming tweet from node.js
var latestTweet;

var vertTypeScale = 1.385;


function preload () {
  getLatestTweet();
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 3; i++) {
    frames[i] = new Frame(random(width), random(height), random(400, 600), random(100, 300), 1000);
  }
}


function draw() {
  background(200);

  for (var i = 0; i < frames.length; i++) {
    frames[i].display();
  }
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

function Frame (xPos, yPos, w, h, displayLength) {
  // a new frame is created with properties selected by the user
  this.xPos = xPos;
  this.yPos = yPos;
  this.w = w;
  this.h = h;
  this.displayLength = displayLength;

  this.startTime = millis();
  this.wordCounter = 0;
  this.word = tweetsDisplayed[tweetIndex - 1].words[this.wordCounter].toUpperCase();
  this.horScaleFactor = calculateHorTextScale(this.word, this.w, this.h);

  // dragging is set to false initially, as the frame is not being dragged yet
  this.dragging = false;
  this.xOffset = 0;
  this.yOffset = 0;

  // the display functions displays the frame and first checks if it's being dragged
  // if so, the move function is called to update the frame's xPos and yPos
  this.display = function() {
    if(millis() - this.startTime > this.displayLength) {
      this.word = tweetsDisplayed[tweetIndex - 1].words[this.wordCounter].toUpperCase();
      this.horScaleFactor = calculateHorTextScale(this.word, this.w, this.h);
      this.startTime = millis();
      // count word
      this.wordCounter ++;
    }

    if(this.wordCounter > tweetsDisplayed[tweetIndex - 1].words[this.wordCounter].length){
      getLatestTweet();
      this.wordCounter = 0;
    }

    if(this.dragging === true) {
      this.move(mouseX + this.xOffset, mouseY + this.yOffset);
    }

    fill(255);
    rect(this.xPos, this.yPos, this.w, this.h);

    fill(0);
    textSize(this.h * vertTypeScale);

    push();
    scale(this.horScaleFactor, 1);
    text(this.word, this.xPos / this.horScaleFactor, this.yPos + this.h);
    pop();
  }

  this.move = function(targetX, targetY) {
    this.xPos = targetX;
    this.yPos = targetY;
  }

  // if the clicked function is called, it is checked if the mouse is on top of a frame
  // dragging will be set to true in this case
  this.clicked = function() {
    if(mouseX > this.xPos &&
       mouseX < this.xPos + this.w &&
       mouseY > this.yPos &&
       mouseY < this.yPos + this.h) {
      this.dragging = true;
      this.xOffset = this.xPos - mouseX;
      this.yOffset = this.yPos - mouseY;
    }
  }

  // if the release function is called, dragging will be set to false again, as the user is not dragging anymore
  this.released = function() {
    this.dragging = false;
  }
}

// if the mouse is pressed the clicked function is called on the frame
function mousePressed() {
  for (var i = 0; i < frames.length; i++) {
    frames[i].clicked();
  }
}

// if the mouse is released the released function is called on the frame
function mouseReleased() {
  for (var i = 0; i < frames.length; i++) {
    frames[i].released();
  }
}

function calculateHorTextScale(word, frameWidth, frameHeight) {
  textSize(frameHeight * vertTypeScale);
  var tw = textWidth(word);
  var horScaleFactor = frameWidth / tw;
  return horScaleFactor;
}



/*function Frame (x, y, sizeX, sizeY) {
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;

  this.display = function () {
    // noFill();
    // fill(200)
    // rect(0, 0, windowWidth, windowHeight);

    // draw the recent word in latest tweet!
    noStroke();

    //  set font values
    textSize(this.sizeY);
    textFont("Archivo Narrow");


    //  measure current word in set font
    var wordWidth = textWidth(tweetsDisplayed[tweetIndex - 1].words[wordIndex].toUpperCase());



    //  map textWidth of current word with horizontal scaling
    var distMin = 0;
    var distMax = textWidth("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHH") - this.sizeX;
    var scaleMin = 1;
    var scaleMax = 0.2;
    var scaleNarrow = map(wordWidth, distMin, distMax, scaleMin, scaleMax);

    // console.log("Wortbreite: " + wordWidth);
    // console.log("Skalierung: " + horizontalScale);
    // console.log("Buchstabenanzahl: " + tweetsDisplayed[tweetIndex - 1].words[wordIndex].length);
    // console.log("X: " + this.x + " Y: " + this.y);

    //  draw text
    fill(0);
    background(255);
    textAlign(LEFT);
    push();
    if (wordWidth > this.sizeX) {
      scale(scaleNarrow, 1);
    }
    else {
      scale(1, 1);
    }

    text(tweetsDisplayed[tweetIndex - 1].words[wordIndex].toUpperCase(), 0, 0, this.sizeX, this.sizeY);
    pop();
  }
}*/


