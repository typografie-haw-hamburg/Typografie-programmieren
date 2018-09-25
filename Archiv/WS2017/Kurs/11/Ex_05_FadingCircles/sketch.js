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




  // DRAW ALL CIRCLES THAT HAVE BEEN RECORDED
  for(var i = 0; i < myCircles.length; i++) {

    // SHIFT EACH CIRCLE'S POSITION RANDOMLY FOR WIGGLE EFFECT
    myCircles[i].x = myCircles[i].x + random(-3, 3);
    myCircles[i].y = myCircles[i].y + random(-3, 3);

    // MAKE CIRCLES SMALLER EACH ROUND
    myCircles[i].dia = myCircles[i].dia - random(2);
    if(myCircles[i].dia <= 0) {
      // IF THE SIZE GETS SMALLER THAN 0, REMOVE ELEMENT FROM THE ARRAY
      myCircles.splice(i, 1);
    } else {
      fill(myCircles[i].sw);
      ellipse(myCircles[i].x, myCircles[i].y, myCircles[i].dia);
    }
  }

}

function mouseDragged() {
  // RECORD NEW CIRCLE WHEN MOUSE IS DRAGGED
  dia = random(80, 160);
  sw = map(mouseX, 0, width, 0, 255);
  var newCircle = {
    x: mouseX,
    y: mouseY,
    dia: dia,
    sw: sw
  }

  myCircles.push( newCircle );
}