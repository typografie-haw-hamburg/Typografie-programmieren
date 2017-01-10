// ---- GLOBAL VARIABLES ---- //
//FRAGEN
  // Frage 1: Ist es möglich die Farbe bewusst zu steuern?
  // Wenn mein Mauszeiger z.B. auf ein Adjektiv wie "aktiv" zeigt, verfärbt sich die Farbe in
  // eine passende Farbe wie Rot...
  
  // Frage 2: Wie ist es möglich, dass immer ein Kreis dem Mauszeiger folgt?
  
  // Frage 3: Am Ende des Scripts ist die Funktion kaputt gegangen, dass mein eine Taste drückt und von Vorn beginnt.
  //Weiß leider nicht woran das liegt.
  
  // Frage 4: Wie könnte ich den Übergang von einer Adjektiv-Runde zur nächsten besser sichtbar machen?
  // z.B. vll nach dem Doppelklick einmal alles weiß oder Schwarz färben?
  
  
float r, g, b;
color bgColor;

//int userId = 1;


      // question counter 1
      int i = 0;
      
      JSONArray answers1 = new JSONArray();
      String[] questions1 = {
        "aktiv",
        "groß",
        "schnell",
        "alt",
        "ruhig"};
        
      // question counter2
      int j = 0;
      
      JSONArray answers2 = new JSONArray();
      String[] questions2 = {
        "passiv",
        "klein",
        "langsam",
        "jung",
        "gestresst"};
        
     // question counter3
      int k = 0;
      
      JSONArray answers3 = new JSONArray();
      String[] questions3 = {
        "wütend",
        "besorgt",
        "entspannt",
        "offen",
        "leicht"}; 
        
     // question counter4
      int l = 0;
      
      JSONArray answers4 = new JSONArray();
      String[] questions4 = {
        "friedfertig",
        "sorglos",
        "erregt",
        "geschlossen",
        "schwer"};

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
}

void draw() {
  
  // create a new color depending on mouse position and assign it to the background
  // Frage 1: Ist es möglich die Farbe bewusst zu steuern?
  // Wenn mein Mauszeiger z.B. auf ein Adjektiv wie "aktiv" zeigt, verfärbt sich die Farbe in
  // eine passende Farbe wie Rot...
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  b = map(mouseX, width, 0, 0, 255);
  
  bgColor = color(r, g, b);
  background(bgColor);
  
  
  // draw the questions or a thank you screen
  if(i < 5) {
    textAlign(CORNER);
    textSize(25);
    text("Wie fühlst du dich gerade?", 20, 30);
    textSize(10);
    text("Finde deine Position auf der Fläche und bestätige sie mit einem Doppelklick.", 20, 50);
    textSize(10);
    textAlign(CENTER);
    text("neutral",width/2,height/2);
    textSize(10);
    textAlign(CORNER, LEFT);
    text(questions1[i], 10, height/2);
    textAlign(CORNER, RIGHT);
    text(questions2[j], width-40,height/2);
    textAlign(CENTER);
    text(questions3[k], width/2,50);
    textAlign(CENTER);
    text(questions4[l], width/2,height-20);

   //draw lines
   line( 55, height/2 -3, width/2-35, height/2 - 3);
   line( width/2 +35, height/2 -3, width-55, height/2 - 3);
   line( width/2, 65, width/2, height/2 -25);
   line( width/2, height/2 +25, width/2, height - 45);
    
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
  if(i > 5) {
    return;
  }
  
  
 if(showCircle == false) {
    // if nothing has been clicked yet a new circle will be drawn
    
 showCircle = true;
 c = new Circle();
    
  }
 else { 
    // if a circle existed already, we check if it is clicked again ...
    
    if(dist(c.xPos, c.yPos, mouseX, mouseY) < radius) {
      // ... if so, we save an answer.      
      // To do this, we create a new JSON object saving all sorts of input data (mouse position, color, time it took the user to make a choice)
      
      JSONObject answer1 = new JSONObject();
      
      answer1.setFloat("x", c.xPos);
      answer1.setFloat("y", c.yPos);
      answer1.setFloat("r", red(c.posColor));
      answer1.setFloat("g", green(c.posColor));
      answer1.setFloat("b", blue(c.posColor));
      
      // ... then this JSON object gets written to position i of JSON array answers
      answers1.setJSONObject(i, answer1);
      
      JSONObject answer2 = new JSONObject();
      
      answer2.setFloat("x", c.xPos);
      answer2.setFloat("y", c.yPos);
      answer2.setFloat("r", red(c.posColor));
      answer2.setFloat("g", green(c.posColor));
      answer2.setFloat("b", blue(c.posColor));
      
      // ... then this JSON object gets written to position i of JSON array answers
      answers2.setJSONObject(j, answer2);
      
      JSONObject answer3 = new JSONObject();
      
      answer3.setFloat("x", c.xPos);
      answer3.setFloat("y", c.yPos);
      answer3.setFloat("r", red(c.posColor));
      answer3.setFloat("g", green(c.posColor));
      answer3.setFloat("b", blue(c.posColor));
      
      // ... then this JSON object gets written to position i of JSON array answers
      answers3.setJSONObject(k, answer3);
      
      JSONObject answer4 = new JSONObject();
      
      answer4.setFloat("x", c.xPos);
      answer4.setFloat("y", c.yPos);
      answer4.setFloat("r", red(c.posColor));
      answer4.setFloat("g", green(c.posColor));
      answer4.setFloat("b", blue(c.posColor));
      
      // ... then this JSON object gets written to position i of JSON array answers
      answers4.setJSONObject(l, answer4);
      
      // ... and we increase i to jump to the next question
      i++;
      showCircle = false;
      j++;
      showCircle = false;
      k++;
      showCircle = false;
      l++;
      showCircle = false;
      
      if(i > 4) {
        // if all questions have been asked we write the JSON array answers to a file
        

        String fileName2 = "data/answers2_user.json";
        saveJSONArray(answers2, fileName2);

 //       userId++;
      }
      
    } else {
      // ... else when the circle was not clicked, we redraw the circle at the new position
      
      c = new Circle();
    }
    
  };

}

void keyReleased() {
  
  // if all questions have been answered and a key is pressed, a new round of questions starts
  // das funktioniert bei meinem modifizierten Code gerade nicht mehr, warum?
  if(i > 5) {
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