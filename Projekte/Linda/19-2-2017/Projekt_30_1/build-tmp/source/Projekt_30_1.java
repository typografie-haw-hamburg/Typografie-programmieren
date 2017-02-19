import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import de.looksgood.ani.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Projekt_30_1 extends PApplet {


// examples of of how to transition between slides
// requires the Ani library by Benedikt Gro\u00df


//Problem: Meine Daten werden nicht in der Json-Datei gespeichert
//und ich finde den Fehler nicht :(

   //colors
      float r, g, b;
      int bgColor;


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


//\u2013\u2013\u2013 question preset \u2013\u2013\u2013\u2013
              int i;
              int userId = 1;
              int startTime;

       // question counter 1

              JSONArray answers1 = new JSONArray();
              String[] questions1 = {
                "gro\u00df",
                "dominant",
                "laut",
                "schnell",
                "erregt"};

      // question counter2
              int j;

              JSONArray answers2 = new JSONArray();
              String[] questions2 = {
                "klein",
                "zur\u00fcckhaltend",
                "leise",
                "langsam",
                "entspannt"};

     // question counter3
              int k;

              JSONArray answers3 = new JSONArray();
              String[] questions3 = {
                "angenehm",
                "offen",
                "ernst",
                "aggressiv",
                "genervt"};

     // question counter4
              int l;

              JSONArray answers4 = new JSONArray();
              String[] questions4 = {
                "unangenehm",
                "geschlossen",
                "sorglos",
                "friedfertig",
                "interessiert"};



// ---- GLOBAL VARIABLES ---- //
public void setup() {
              
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
          seq.add(Ani.to(this, 0.4f, "uiOpacity", 0, Ani.QUAD_OUT, "onEnd:nextSlide")); // Durchsichtigkeit des Kreises
          seq.add(Ani.to(this, 0.4f, "radius", radius * 5, Ani.QUAD_OUT)); // Kreis wird immer gr\u00f6\u00dfer
          seq.endStep();

          // step 2 - Animate the opacity from its current value to 255 after a delay of 0.6 seconds
          seq.beginStep();
          seq.add(Ani.to(this, 0.6f, 0.6f, "uiOpacity", 255, Ani.QUAD_IN)); //Kreis ist sichtbar
          seq.add(Ani.to(this, 0.6f, 0.6f, "radius", 40, Ani.QUAD_IN)); // Normaler Radius des Kreises
          seq.endStep();

  seq.endSequence();
}

public void draw() {

  println(i);

          
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  b = map(mouseX, width, 0, 0, 255);

  bgColor = color(r, g, b);
  background(bgColor);



           


           
           if((i < 5)&&(j < 5)&&(k < 5)&&(l < 5)) {
          
          fill(255);
          textAlign(LEFT);
          textSize(25);
          text("Wie f\u00fchlst du dich gerade?", 20, 30);
          textSize(15);
          text("Finde deine Position auf der Fl\u00e4che.", 20, 50);
          
           circleOpacity = uiOpacity;
           fill(255,circleOpacity);
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

            mX = lerp (mX, mouseX, 0.15f);
            mY = lerp (mY,mouseY, 0.15f);

            ellipse (mX, mY, radius * 2, radius * 2);
            
             //---- LINES ----//
            line(mX, height / 2 - 28, mX, height / 2 +20);
            line(width / 2 - 25, mY, width / 2 + 23, mY);
            
   // Letzte Seite: Thank you-Screen
            } else {
              fill(255);
              textSize(15);

              text("Vielen Dank f\u00fcr die Teilnahme. Dein Poster wird erstellt.\n(Zum Fortfahren eine Taste dr\u00fccken)", width/2, height/2 - 10);
            }



}

public void mouseClicked() {


    if ((i < 5)&&(j < 5)&&(k < 5)&&(l < 5)){

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

public void mouseReleased () {
    if((i < 5)&&(j < 5)&&(k < 5)&&(l < 5)) {
      seq.start ();
    }
}
public void keyReleased() {

  // if all questions have been answered and a key is pressed, a new round of questions starts
  if(i > 4) {
     i = 0;
     j = 0;
     k = 0;
     l = 0;

  }

}

// circle class that saves position and color of the circle to be drawn
class Circle {
  float xPos = mouseX;
  float yPos = mouseY;
  int posColor = bgColor;

  public void display() {
    ellipse(xPos, yPos, radius * 2, radius * 2);
  }
}

public void nextSlide () {
  if ((i < 5)&&(j < 5)&&(k < 5)&&(l < 5)) {
    i++;
    j++;
    k++;
    l++;
  } else {
    i = 0;
    j = 0;
    k = 0;
    l = 0;
  }
}
  public void settings() {  size(1440, 800); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Projekt_30_1" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
