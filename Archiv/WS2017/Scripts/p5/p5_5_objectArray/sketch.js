var r, b;
var x = 50;
var y = 50;

var myCircles = [];


function setup() {
  createCanvas(640, 360);
}

function draw() {
  r = map(mouseX, 0, width, 0, 255);
  b = map(mouseX, width, 0, 0, 255);
  background(r, 0, b);
  
  var newCircle = {};
  newCircle.x = random(width);
  newCircle.y = random(height);
  newCircle.dia = random(5, 50);
  
  myCircles.push(newCircle);
  
  for(var i = 0; i < myCircles.length; i++) {
    ellipse(myCircles[i].x, myCircles[i].y, myCircles[i].dia);
  }
  
}

function mouseClicked() {
  //ellipse(x, y, 50);
}