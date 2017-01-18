var mainCircle;
var lineCount = 50;
var vertSlider;
var vertMin, vertMax, horMin, horMax;

function setup() {
  createCanvas(1000, 1000);
  
    var red = color(255, 0, 0);
  // Slider Kreis
  vertSlider = new Circle(width / 10, height / 2, 30, red);
  

  fill(0, 0, 255);
  // Kreis 
  mainCircle = new Circle(900 , height/3 , 40);
}

function draw() {
  
   // Punkt anzeigen 
  mainCircle.display();
  
  // Slider anzeigen
  vertSlider.display();

  // Linien an Punkt anpassen


  
   stroke(10);
  for (var i = 0; i < lineCount; i++) {
    //Linie Lichquelle
    line(mainCircle.xPos, mainCircle.yPos, 700, 300 / (lineCount - 1) * i+400);
    //Linie Wellenlaenge
     line(700 ,300 / (lineCount - 1) * i+400, 300, 300 / (lineCount - 1) * i+400);
     //Linie Silizium
    line(300 ,300 / (lineCount - 1) * i+400, 200, 300 / (lineCount - 1) * i+300);
  }
  
 }


function Circle (xPos, yPos, radius) {
  background(200)
  // a new circle is created with properties selected by the user
  this.xPos = xPos;
  this.yPos = yPos;
  this.radius = radius;

  // dragging is set to false initially, as the circle is not being dragged yet
  this.dragging = false;

  // the display functions displays the circle and first checks if it's being dragged
  // if so, the move function is called to update the circle's xPos and yPos
  this.display = function() {
    background(200)
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





