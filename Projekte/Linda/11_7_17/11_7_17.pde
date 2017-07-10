
// examples of of how to transition between slides
// requires the Ani library by Benedikt Groß
import de.looksgood.ani.*;


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
      float radius = 120;
      boolean showCircle = false;

      PFont CinetypeBold, CinetypeRegular;

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
              fullScreen();
              //size(1440, 800);
              CinetypeBold = createFont("GT-Cinetype-Bold.otf", 20);
              CinetypeRegular = createFont("GT-Cinetype-Regular.otf", 20);
              textFont(CinetypeRegular);
              textSize(1/50*height);
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
          seq.add(Ani.to(this, 0.6, 0.6, "radius", 110, Ani.QUAD_IN)); // Normaler Radius des Kreises
          seq.endStep();

  seq.endSequence();
}

void draw() {
  
  if(timerRunning == true) {
    if(millis() > (timer + 50000)) {
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
          textFont(CinetypeBold);
          textSize(1/27.27 * height);
          text("Wie fühlst du", 2*(1/81.0*width), 2*(1/27.27 * height));
          text("dich gerade?",2*(1/81.0*width), 3*(1/27.27 * height));

          textFont(CinetypeRegular);
          textSize(1/50*height);
          text("Finde deine Position auf der Fläche.", 2*(1/81.0*width), 4* (1/27.27 * height));

          
           circleOpacity = uiOpacity;
           fill(255,circleOpacity);
          textFont(CinetypeRegular);
          textSize(1/50*height);
          textAlign(CENTER);
          text("neutral",width/2,height/2);
          textSize(1/50*height);
          textAlign(RIGHT);
          text(questions1[i], 1/9.95*width, height/2 - (1/107.14*height)/2);
          textAlign(LEFT);
          text(questions2[j], width-(1/9.0*width) ,height/2 - (1/107.14*height)/2);
          textAlign(CENTER);
          text(questions3[k], width/2, 3*(1/81.0*width));
          textAlign(CENTER);
          text(questions4[l], width/2,height-1.5*(1/81.0*width));

   //draw lines
           line( 1/9.07*width, height/2 - (1/107.14*height), width/2-(1/27.93*width), height/2 - (1/107.14*height));
           line( width/2 +(1/27.93*width), height/2 - (1/107.14*height), width- (1/8.57*width), height/2 - (1/107.14*height));
           line( width/2, (1/22.0*width), width/2, height/2 -(1/27.93*width)/1.5);
           line( width/2, height/2 + (1/27.93*width)/2, width/2, height - (1/28.93*width));

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
               textFont(CinetypeBold);
               textSize(1/27.27 * height);
                text("Vielen Dank für die Teilnahme.", width/2, height/2 - 2*(1/27.27 *height));
              textFont(CinetypeRegular);
              textSize(1/50*height);
              text("Bitte warte einen Moment. Deine Karte wird erstellt und du findest sie auf der Rückseite des Podests.", width/2, height/2 - 1/27.27 *height);
            } else {
              fill(255);
              textAlign(CENTER);
              textFont(CinetypeRegular);
              textSize(1/50*height);
              text("Willkommen zu", width/2, 4* (1/27.27 * height));

               textFont(CinetypeBold);
               textSize(1/5.1 * height);
               textAlign(CENTER);
                text("EMOTION", width/2, 1/2.96*height);
                text("NOW", width/2, 1/1.92 * height);

              textFont(CinetypeRegular);
              textSize(1/50*height);
              text(" Hier kannst du deinen gegenwärtigen emotionalen Zustand\n durch einen kurzen interaktiven Fragebogen ermitteln.\n Die Daten werden in generativer Gestaltung übertragen und\n in vielschichtige Muster übersetzt. Das Resultat wird als\n Karte ausgedruckt und visualisiert deine persönlichen Emotionen.", width/2, 1/1.63*height);
              textAlign(CENTER);
               text(" → Starte den Fragebogen und klicke einmal auf das Trackpad.", width/2, height- 4*(1/27.27 * height));
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