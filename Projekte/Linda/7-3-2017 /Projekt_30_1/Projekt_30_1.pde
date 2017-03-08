
// examples of of how to transition between slides
// requires the Ani library by Benedikt Groß
import de.looksgood.ani.*;

//Problem: Meine Daten werden nicht in der Json-Datei gespeichert
//und ich finde den Fehler nicht :(

      int timer;
      boolean timerRunning;

   //colors
      float r, g, b;
      color bgColor;


   //Animation
      float mX = 0;
      float mY = 0;

      AniSequence seq;

  //Circle preset
      float uiOpacity = 255;
      float circleOpacity;

      Circle c;
      float radius = 40;
      boolean showCircle = false;

      PFont Druk, Suisse;

//––– question preset ––––
              int i = -1;
              int userId = 1;
              int startTime;

       // question counter 1

              JSONArray answers1 = new JSONArray();
              String[] questions1 = {
                "groß",
                "bestimmend",
                "laut",
                "schnell",
                "erregt"};

      // question counter2
              int j = -1;

              JSONArray answers2 = new JSONArray();
              String[] questions2 = {
                "klein",
                "zurückhaltend",
                "leise",
                "langsam",
                "entspannt"};

     // question counter3
              int k = -1;

              JSONArray answers3 = new JSONArray();
              String[] questions3 = {
                "angenehm",
                "offen",
                "ernst",
                "aggressiv",
                "genervt"};

     // question counter4
              int l = -1;

              JSONArray answers4 = new JSONArray();
              String[] questions4 = {
                "unangenehm",
                "geschlossen",
                "sorglos",
                "friedfertig",
                "interessiert"};



// ---- GLOBAL VARIABLES ---- //
void setup() {
              
              size(1440, 800);
              Druk = createFont("DrukWide-Bold", 20);
              Suisse = createFont("SuisseBPIntl-Regular ", 20);
              textFont(Druk);
              textSize(20);
              textAlign(CENTER);
              noFill();
              stroke(255);
              noCursor();

//---- ANIMATON SETUP ----//
  Ani.init(this);

  seq = new AniSequence(this);
  seq.beginSequence();

  seq.beginStep();

          // step 1 - Animate the opacity from its current value to 0, at the end call the function nextSlide
          seq.add(Ani.to(this, 0.4, "uiOpacity", 0, Ani.QUAD_OUT, "onEnd:nextSlide")); // Durchsichtigkeit des Kreises
          seq.add(Ani.to(this, 0.4, "radius", radius * 5, Ani.QUAD_OUT)); // Kreis wird immer größer
          seq.endStep();

          // step 2 - Animate the opacity from its current value to 255 after a delay of 0.6 seconds
          seq.beginStep();
          seq.add(Ani.to(this, 0.6, 0.6, "uiOpacity", 255, Ani.QUAD_IN)); //Kreis ist sichtbar
          seq.add(Ani.to(this, 0.6, 0.6, "radius", 40, Ani.QUAD_IN)); // Normaler Radius des Kreises
          seq.endStep();

  seq.endSequence();
}

void draw() {
  
  if(timerRunning == true) {
    if(millis() > (timer + 5000)) {
      i = -1;
      j = -1;
      k = -1;
      l = -1;
      timerRunning = false;
    }
  }
  
          
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  b = map(mouseX, width, 0, 0, 255);

  bgColor = color(r, g, b);
  background(bgColor);



           


           
          if(i < 5 && i >= 0) {
          
          fill(255);
          textAlign(LEFT);
          textSize(25);
          textFont(Druk);
          text("Wie fühlst du dich gerade?", 20, 30);
          textFont(Suisse);
          textSize(15);
          text("Finde deine Position auf der Fläche.", 20, 50);
          
           circleOpacity = uiOpacity;
           fill(255,circleOpacity);
          textFont(Suisse);
          textSize(15);
          textAlign(CENTER);
          text("neutral",width/2,height/2);
          textSize(15);
          textAlign(RIGHT);
          text(questions1[i], 120, height/2 +1);
          textAlign(LEFT);
          text(questions2[j], width-120,height/2 + 1);
          textAlign(CENTER);
          text(questions3[k], width/2,50);
          textAlign(CENTER);
          text(questions4[l], width/2,height-20);

   //draw lines
           line( 130, height/2 - 6, width/2-35, height/2 - 4);
           line( width/2 +35, height/2 -6, width-130, height/2 - 4);
           line( width/2, 65, width/2, height/2 -25);
           line( width/2, height/2 +25, width/2, height - 45);

            circleOpacity = uiOpacity;

            stroke(255, circleOpacity);
            noFill();

            mX = lerp (mX, mouseX, 0.15);
            mY = lerp (mY,mouseY, 0.15);

            ellipse (mX, mY, radius * 2, radius * 2);
            
             //---- LINES ----//
            line(mX, height / 2 - 28, mX, height / 2 +20);
            line(width / 2 - 25, mY, width / 2 + 23, mY);
            
   // Letzte Seite: Thank you-Screen
            } else if (i >= 5) {
              fill(255);
               textFont(Druk);
               textSize(25);
                text("Vielen Dank für die Teilnahme.", width/2, height/2 - 40);
              textFont(Suisse);
              textSize(15);
              text("Deine Karte wird erstellt.\n Zum Fortfahren eine Taste drücken.", width/2, height/2 - 10);
            } else {
              fill(255);
               textFont(Druk);
               textSize(25);
                text("Willkommen bla.", width/2, height/2 - 40);
              textFont(Suisse);
              textSize(15);
              text("Deine Karte wird erstellt.\n Zum Fortfahren eine Taste drücken.", width/2, height/2 - 10);
            }



}

void mouseClicked() {


    if (i >= 0 && i < 5){

      JSONObject answer1 = new JSONObject();

        answer1.setFloat("x", mouseX);
        answer1.setFloat("y", mouseY);
        answer1.setFloat("r", red(bgColor));
        answer1.setFloat("g", green(bgColor));
        answer1.setFloat("b", blue(bgColor));

        answers1.setJSONObject(i, answer1);

      JSONObject answer2 = new JSONObject();

        answer2.setFloat("x", mouseX);
        answer2.setFloat("y", mouseY);
        answer2.setFloat("r", red(bgColor));
        answer2.setFloat("g", green(bgColor));
        answer2.setFloat("b", blue(bgColor));

        answers2.setJSONObject(j, answer2);

      JSONObject answer3 = new JSONObject();

        answer3.setFloat("x", mouseX);
        answer3.setFloat("y", mouseY);
        answer3.setFloat("r", red(bgColor));
        answer3.setFloat("g", green(bgColor));
        answer3.setFloat("b", blue(bgColor));

        answers3.setJSONObject(k, answer3);

      JSONObject answer4 = new JSONObject();

        answer4.setFloat("x", mouseX);
        answer4.setFloat("y", mouseY);
        answer4.setFloat("r", red(bgColor));
        answer4.setFloat("g", green(bgColor));
        answer4.setFloat("b", blue(bgColor));

        answers4.setJSONObject(l, answer4);

        if (i == 4) {
          // if all questions have been asked we write the JSON array answers to a file

          String fileName = "data/answers_user_" + userId + ".json";
          saveJSONArray(answers1, fileName);
          userId++;
        };
    };
}

void mouseReleased () {
    if(i < 5) {
      println("TestMouse");
      println(i);
      seq.start();
    }
}
void keyReleased() {

  // if all questions have been answered and a key is pressed, a new round of questions starts
  if(i > 4) {
     i = -1;
     j = -1;
     k = -1;
     l = -1;

  }

}

// circle class that saves position and color of the circle to be drawn
class Circle {
  float xPos = mouseX;
  float yPos = mouseY;
  color posColor = bgColor;

  void display() {
    ellipse(xPos, yPos, radius * 2, radius * 2);
  }
}

void nextSlide () {
  println("Test");
  if (i < 5) {
    i++;
    j++;
    k++;
    l++;
  } else {
    i = -1;
    j = -1;
    k = -1;
    l = -1;
  }
  if(i == 5) {
    timerRunning = true;
    timer = millis();
  }
}