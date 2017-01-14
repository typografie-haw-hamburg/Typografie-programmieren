// examples of of how to transition between slides
// requires the Ani library by Benedikt Groß
import de.looksgood.ani.*;

int i;

float r, g, b;
color bgColor;

float mX = 0;
float mY = 0;

AniSequence seq;

float uiOpacity = 255;
float circleOpacity;
float circleRadius = 32;

void setup() {
  size(1024, 576);
  noCursor();

  textSize(18);
  textAlign(CENTER);


  //---- ANIMATON SETUP ----//
  Ani.init(this);

  seq = new AniSequence(this);
  seq.beginSequence();

  seq.beginStep();
  // step 1 - Animate the opacity from its current value to 0, at the end call the function nextSlide
  seq.add(Ani.to(this, 0.4, "uiOpacity", 0, Ani.QUAD_OUT, "onEnd:nextSlide"));
  seq.add(Ani.to(this, 0.4, "circleRadius", circleRadius * 5, Ani.QUAD_OUT));
  seq.endStep();

  // step 2 - Animate the opacity from its current value to 255 after a delay of 0.6 seconds
  seq.beginStep();
  seq.add(Ani.to(this, 0.6, 0.6, "uiOpacity", 255, Ani.QUAD_IN));
  seq.add(Ani.to(this, 0.6, 0.6, "circleRadius", 40, Ani.QUAD_IN));
  seq.endStep();

  seq.endSequence();
}

void draw() {

  //---- BACKGROUND ----//
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  b = map(mouseX, width, 0, 0, 255);

  bgColor = color(r, g, b);
  background(bgColor);


  //---- TEXT ----//
  fill(255, uiOpacity);
  if(i < 5) {
    text("Frage " + (i + 1), width/2, height/2 - 10);
  }
  else {
    text("Vielen Dank für die Teilnahme. Dein Poster wird erstellt.\n(Zum Fortfahren eine Taste drücken)", width/2, height/2 - 10);
  }


  //---- CIRCLE ----//
  // if questions are asked show the circle. On the last screen, do not show the circle
  if(i < 5) {
    circleOpacity = uiOpacity;
  } else {
    circleOpacity = 0;
  }
  stroke(255, circleOpacity);
  noFill();

  // lerp adds some smoothing, just so it looks nicer than using mouseX and mouseY directly
  mX = lerp(mX, mouseX, 0.15);
  mY = lerp(mY, mouseY, 0.15);
  ellipse(mX, mY, circleRadius * 2, circleRadius * 2);


  //---- LINES ----//
  line(mX, height / 2 - 35, mX, height / 2 + 5);
  line(width / 2 - 20, mY, width / 2 + 20, mY);
}

void mouseReleased() {
  if(i < 5) {
    seq.start();
  }
}

void keyReleased() {
  if(i > 4) {
    seq.start();
  }
}

void nextSlide() {
  if(i < 5) {
    i++;
  } else {
    i = 0;
  }
}