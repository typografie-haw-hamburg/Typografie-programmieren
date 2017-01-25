var frames = [];
var vertTypeScale = 1.385;
var randomWords = ["hematocyst", "apostatically", "effectivity", "carer", "thoracic", "potos", "curn", "unsquarable", "lettice", "antisolar", "uneluded", "hornito", "nondivergency", "nonassociative", "interpolish", "cabman", "gingeli", "cowpoke", "aegialia", "misrepresent"];

function setup() {
  createCanvas(960, 540);

  for (var i = 0; i < 3; i++) {
    frames[i] = new Frame(random(width), random(height), random(400, 600), random(100, 300), random(100, 500));
  }
}

function draw() {
  background(200);

  for (var i = 0; i < frames.length; i++) {
    frames[i].display();
  }

}

function Frame (xPos, yPos, w, h, displayLength) {
  // a new frame is created with properties selected by the user
  this.xPos = xPos;
  this.yPos = yPos;
  this.w = w;
  this.h = h;
  this.displayLength = displayLength;

  this.startTime = millis();
  this.word = random(randomWords);
  this.horScaleFactor = calculateHorTextScale(this.word, this.w, this.h);

  // dragging is set to false initially, as the frame is not being dragged yet
  this.dragging = false;
  this.xOffset = 0;
  this.yOffset = 0;

  // the display functions displays the frame and first checks if it's being dragged
  // if so, the move function is called to update the frame's xPos and yPos
  this.display = function() {
    if(millis() - this.startTime > this.displayLength) {
      this.word = random(randomWords);
      this.horScaleFactor = calculateHorTextScale(this.word, this.w, this.h);
      this.startTime = millis();
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