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
  
  for(var i = 0; i < myCircles.length; i++) {
    myCircles[i].x = myCircles[i].x + random(-2, 2);
    myCircles[i].y = myCircles[i].y + random(-2, 2);
    fill(myCircles[i].sw);
    ellipse(myCircles[i].x, myCircles[i].y, myCircles[i].dia);
  }
  
}

function mouseDragged() {
  var newCircle = {};
  newCircle.x = mouseX;
  newCircle.y = mouseY;
  newCircle.dia = random(5, 50);
  newCircle.sw = map(mouseX, 0, width, 0, 255);
  
  myCircles.push(newCircle);
}

function keyTyped() {
  if (key === 'a') {
    myCircles = [];
  }
}





