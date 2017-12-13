var x = 200;
var y = 200;
var r, b;
var dia = 150;

var myCircles = [];

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  background(0, 0, 255);
  // put setup code here
  rectMode(CENTER);

}

function draw() {

  // BACKGROUND
  background(r, 0, b);
  r = map( mouseX, 0 , width, 0, 255);
  b = map( mouseX, width, 0, 0, 255);

  // CIRCLE
  dia = random(80, 240);
  var newCircle = {
    x: mouseX,
    y: mouseY,
    dia: dia
  }

  // PUSH NEW CIRCLE TO ARRAY
  myCircles.push( newCircle );

  // DRAW ALL RECORDED CIRCLES
  for(var i = 0; i < myCircles.length; i++) {
    ellipse(myCircles[i].x, myCircles[i].y, myCircles[i].dia);
    // ellipse(myCircles[i].x, myCircles[i].y, dia);   // -> interesting alternative
  }

}