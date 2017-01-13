import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class CollectingUserInput extends PApplet {

// ---- GLOBAL VARIABLES ---- //

float r, g, b;
int bgColor;

// question counter
int i = 0;
int userId = 1;
int startTime;

JSONArray answers = new JSONArray();
String[] questions = {
  "F\u00fchlst du dich aktiv?",
  "F\u00fchlst du dich \u00e4ngstlich?",
  "F\u00fchlst du dich gro\u00df?",
  "F\u00fchlst du dich einsam?",
  "F\u00fchlst du dich alt?"};

Circle c;
int radius = 40;
boolean showCircle = false;

// ---- GLOBAL VARIABLES ---- //



public void setup() {
  
  textSize(20);
  textAlign(CENTER);
  noFill();
  stroke(255);
  startTime = millis();
}

public void draw() {
  
  // create a new color depending on mouse position and assign it to the background
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  b = map(mouseX, width, 0, 0, 255);
  
  bgColor = color(r, g, b);
  background(bgColor);
  
  
  // draw the questions or a thank you screen
  if(i < 5) {
    text(questions[i], width/2, height/2 - 10);
  } else {
    text("Vielen Dank f\u00fcr die Teilnahme. Dein Poster wird erstellt.\n(Zum Fortfahren eine Taste dr\u00fccken)", width/2, height/2 - 10);
  }
  
  
  // show a circle if something has been clicked
  if(showCircle) {
    c.display();
  }
}

public void mouseClicked() {
  
  // if all questions have been asked, ignore the click
  if(i > 4) {
    return;
  }
  
  
  if(showCircle == false) {
    // if nothing has been clicked yet a new circle will be drawn
    
    showCircle = true;
    c = new Circle();
    
  } else { 
    // if a circle existed already, we check if it is clicked again ...
    
    if(dist(c.xPos, c.yPos, mouseX, mouseY) < radius) {
      // ... if so, we save an answer.      
      // To do this, we create a new JSON object saving all sorts of input data (mouse position, color, time it took the user to make a choice)
      
      JSONObject answer = new JSONObject();
      
      answer.setFloat("x", c.xPos);
      answer.setFloat("y", c.yPos);
      answer.setFloat("r", red(c.posColor));
      answer.setFloat("g", green(c.posColor));
      answer.setFloat("b", blue(c.posColor));
      answer.setInt("time", millis() - startTime);
      
      // ... then this JSON object gets written to position i of JSON array answers
      answers.setJSONObject(i, answer);
      
      // ... and we increase i to jump to the next question
      i++;
      startTime = millis();
      showCircle = false;
      
      if(i > 4) {
        // if all questions have been asked we write the JSON array answers to a file
        
        String fileName = "data/answers_user_" + userId + ".json";
        saveJSONArray(answers, fileName);
        userId++;
      }
      
    } else {
      // ... else when the circle was not clicked, we redraw the circle at the new position
      
      c = new Circle();
    }
    
  };

}

public void keyReleased() {
  
  // if all questions have been answered and a key is pressed, a new round of questions starts
  if(i > 4) {
    i = 0;
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
  public void settings() {  size(1024, 576); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "CollectingUserInput" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
