var mainCircle;
var lineCount = 20;

function setup() {
  createCanvas(640, 360);

  fill(0, 0, 255);
  // create a new Circle object and save it as mainCircle
  mainCircle = new Circle(width / 4, height / 2, 40);
}

function draw() {
  background(200);

  // display mainCircle
  mainCircle.display();

  // display some lines with start positions depending on the mainCircle's position
  stroke(0);
  for (var i = 0; i < lineCount; i++) {
    line(mainCircle.xPos, mainCircle.yPos, width, height / (lineCount - 1) * i);
  }
}


function Circle (xPos, yPos, radius) {
  // a new circle is created with properties selected by the user
  this.xPos = xPos;
  this.yPos = yPos;
  this.radius = radius;

  // dragging is set to false initially, as the circle is not being dragged yet
  this.dragging = false;

  // the display functions displays the circle and first checks if it's being dragged
  // if so, the move function is called to update the circle's xPos and yPos
  this.display = function() {
    noStroke();

    if(this.dragging === true) {
      this.move(mouseX, mouseY);
    }

    ellipse(this.xPos, this.yPos, radius);
  }

  this.move = function(targetX, targetY) {
    this.xPos = targetX;
    this.yPos = targetY;
  }

  // if the clicked function is called, the distance between mouse and the circle's midpoint is calculated
  // if it is smaller than the circle's radius that means the user has clicked on the circle
  // dragging will be set to true in this case
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.xPos, this.yPos);
    if(d < this.radius) {
      this.dragging = true;
    }
  }

  // if the release function is called, dragging will be set to false again, as the user is not dragging anymore
  this.released = function() {
    this.dragging = false;
  }
}

// if the mouse is pressed the clicked function is called on the circle
function mousePressed() {
  mainCircle.clicked();
}

// if the mouse is released the released function is called on the circle
function mouseReleased() {
  mainCircle.released();
}