var index = 0;
var tweetArray = [];
var tempo = setInterval(wordTimer, 500);
var frame = [];

function setup() {
  print("Test");
  createCanvas(windowWidth, windowHeight);
  getTweet();


  // console.log(tweetArray);
}

function draw() {
  frame[0] = new Frame(300, 100);
  frame[1] = new Frame(300, 200);
  frame[2] = new Frame(300, 300);

  frame[0].display();
  frame[1].display();
  frame[2].display();
}


function wordTimer () {
  index = index + 1;

  if (index >= tweetArray.length) {
    index = 0;
  }
  // console.log(index);
}


function Frame (x, y) {
  this.x = x;
  this.y = y;
  this.sizeX = 400;
  this.sizeY = 100;

  this.display = function () {
    // noStroke();
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.sizeX, this.sizeY);

    fill(0);
    textSize(72);
    textAlign(CENTER, CENTER);
    text(tweetArray[index], this.x, this.y);
    // tweetArray.splice(index, 1);
    console.log(tweetArray.length);
  };
}

function getTweet () {
  // var tweetRecent = "" + tweetIncoming + "";
  var tweetRecent = "Hallo Timo, mein Script kann schon Wörter aufteilen und nach und nach anzeigen";
  var splitTweet = split(tweetRecent, " ");
  for (var i = 0; i < splitTweet.length; i++) {
    tweetArray.push(splitTweet[i]);
  }
    // console.log(splitTweet);
}


