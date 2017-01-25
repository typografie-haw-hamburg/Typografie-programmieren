var frames = [];

function setup() {
  createCanvas(960, 540);

  for (var i = 0; i < 3; i++) {
    frames[i] = new Frame(random(width), random(height), random(400, 600), random(100, 300), color(255));
  }
}

function draw() {
  background(200);

  for (var i = 0; i < frames.length; i++) {
    frames[i].display();
  }

}

function Frame (xPos, yPos, w, h, color) {
  // a new frame is created with properties selected by the user
  this.xPos = xPos;
  this.yPos = yPos;
  this.w = w;
  this.h = h;
  this.color = color;

  // dragging is set to false initially, as the frame is not being dragged yet
  this.dragging = false;
  this.xOffset = 0;
  this.yOffset = 0;

  // the display functions displays the frame and first checks if it's being dragged
  // if so, the move function is called to update the frame's xPos and yPos
  this.display = function() {
    fill(this.color);

    if(this.dragging === true) {
      this.move(mouseX + this.xOffset, mouseY + this.yOffset);
    }

    rect(this.xPos, this.yPos, this.w, this.h);
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