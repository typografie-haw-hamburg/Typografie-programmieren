// ---- GLOBAL VARIABLES ---- //

float r, g, b;
color bgColor;

// question counter
int i = 0;
int userId = 1;
int startTime;

JSONArray answers = new JSONArray();
String[] questions = {
  "Fühlst du dich aktiv?",
  "Fühlst du dich ängstlich?",
  "Fühlst du dich groß?",
  "Fühlst du dich einsam?",
  "Fühlst du dich alt?"};

Circle c;
int radius = 40;
boolean showCircle = false;

// ---- GLOBAL VARIABLES ---- //



void setup() {
  size(1024, 576);
  textSize(20);
  textAlign(CENTER);
  noFill();
  stroke(255);
  startTime = millis();
}

void draw() {
  
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
    text("Vielen Dank für die Teilnahme. Dein Poster wird erstellt.\n(Zum Fortfahren eine Taste drücken)", width/2, height/2 - 10);
  }
  
  
  // show a circle if something has been clicked
  if(showCircle) {
    c.display();
  }
}

void mouseClicked() {
  
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

void keyReleased() {
  
  // if all questions have been answered and a key is pressed, a new round of questions starts
  if(i > 4) {
    i = 0;
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