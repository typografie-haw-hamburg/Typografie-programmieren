var vertSlider;
var lineCount = 20;
var vertMin, vertMax, horMin, horMax;

function setup() {
  createCanvas(640, 360);

  var red = color(255, 0, 0);
  // create a new Circle object and save it as vertSlider
  vertSlider = new Circle(width / 10, height / 2, 30, red);

  vertMin = height / 5;
  vertMax = height / 5 * 4;
  vertSlider.setMaximums(width / 10, vertMin, width / 10, vertMax);

  var green = color(0, 255, 0);
  // create a new Circle object and save it as horSlider
  horSlider = new Circle(width / 2, height / 10, 30, green);

  horMin = width / 5;
  horMax = width / 5 * 4;
  horSlider.setMaximums(horMin, height / 10, horMax, height / 10);
}

function draw() {
  background(200);

  // draw line for vertSlider and display vertSlider
  stroke(0);
  line(width / 10, vertMin, width / 10, vertMax);
  vertSlider.display();

  stroke(0);
  line(horMin, height / 10, horMax, height / 10);
  horSlider.display();

  // display some lines
  // the color depends on the position of the horSlider
  // the amount depends on the position of the vertSlider
  var lineColor = color( map(horSlider.xPos, horMin, horMax, 255, 0) );
  var lineCount = floor( map(vertSlider.yPos, height / 5, height / 5 * 4, 1, 20) );
  stroke(lineColor);
  for (var i = 0; i < lineCount; i++) {
    var lineYPos = height / 2 - 50 + (i * 5);
    line(width / 2 - 50, lineYPos, width / 2 + 50, lineYPos);
  }
}


function Circle (xPos, yPos, radius, color) {
  // a new circle is created with properties selected by the user
  this.xPos = xPos;
  this.yPos = yPos;
  this.radius = radius;
  this.color = color;

  // by default the circle can be moved anywhere
  // default min and max values are set to the size of the canvas
  this.minX = 0;
  this.maxX = width;
  this.minY = 0;
  this.maxY = height;

  // dragging is set to false initially, as the circle is not being dragged yet
  this.dragging = false;

  // the display functions displays the circle and first checks if it's being dragged
  // if so, the move function is called to update the circle's xPos and yPos
  this.display = function() {
    noStroke();
    fill(this.color);

    if(this.dragging === true) {
      this.move(mouseX, mouseY);
    }

    ellipse(this.xPos, this.yPos, radius);
  }

  // the move function moves the circles to the target position
  // as long as it is within the min and max values
  // the constrain function makes sure that only values between min and max are picked
  this.move = function(targetX, targetY) {
    this.xPos = constrain(targetX, this.minX, this.maxX);
    this.yPos = constrain(targetY, this.minY, this.maxY);
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

  // maximums can be used to restrain movement (for sliders etc.)
  this.setMaximums = function(minX, minY, maxX, maxY) {
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }
}

// if the mouse is pressed the clicked function is called on the circle
function mousePressed() {
  vertSlider.clicked();
  horSlider.clicked();
}

// if the mouse is released the released function is called on the circle
function mouseReleased() {
  vertSlider.released();
  horSlider.released();
}