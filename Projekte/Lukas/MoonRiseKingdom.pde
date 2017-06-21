import processing.video.*;
import ddf.minim.*;

Minim minim;
AudioPlayer sound;
Movie movie;
PFont font;
PFont monoFont;
PImage frames;
PImage poster;
Table subTable;
Table rectTable = new Table();
int rectsToDraw;
ArrayList<Kaestchen> rectList = new ArrayList<Kaestchen>();

int topMargin = 30;
int leftMargin = 30;
int botMargin = 30;

int movieWidth = 360;
int movieHeight = 195;

int newFrameCounter = 0;
int counter = 0;
int volumeCounter = 0;

boolean lineCrossed = false;
int intervall = 120;
int y = 30;
float volume;
float averageVolume;
float[] volumeArray = new float[30];
int timestamp;
float endPoint;
float breite = 0;
float prevBreite = 0;
float xPos = 0;
int leftStart = leftMargin + movieWidth + leftMargin;
int rectHeight = 15;

Sub subtitle = new Sub();
ArrayList<String> subList = new ArrayList<String>();

int subCounter = 0;
boolean displayState1 = false;
boolean displayState2 = false;
boolean displayState3 = false;
boolean displayState4 = false;
int displayDurSub1 = 0;
int displayDurSub2 = 0;
int displayDurSub3 = 0;
int displayDurSub4 = 0;
int timeFreeze1, timeFreeze2, timeFreeze3, timeFreeze4;
int displayX1, displayX2, displayX3, displayX4;
int displayY1, displayY2, displayY3, displayY4;
String displaySub1;
String displaySub2;
String displaySub3;
String displaySub4;

color[] colArray = new color[2000];
int r;
int g;
int b;

int keyPresses = 0;


HashMap<Integer, String> hm = new HashMap<Integer, String>();

//------------------------------------------------------------------------------------------

void setup(){
  fullScreen();
  //size(1300,800);
  frameRate(30);
  smooth();
  noStroke();

  minim = new Minim(this);
  sound = minim.loadFile("moonrise_sound.mp3");
  movie = new Movie(this, "moonrise.mov");
  frames = new PImage();
  movie.frameRate(30);
  movie.play();
  movie.volume(0);
  sound.play(0);

  subTable = loadTable("subtitles_moonrise.csv");
  // method to fill the HashMap with the key and values from the subTable
  fillHashMap(hm, subTable, 1, 0);

  font = loadFont("AlteHaasGrotesk_Bold-34.vlw");
  monoFont = loadFont("Inconsolata-12.vlw");

  rectsToDraw = int(movie.duration())*30 / 120;
  println(rectsToDraw);

  rectTable.addColumn("id");
  rectTable.addColumn("xPos");
  rectTable.addColumn("yPos");
  rectTable.addColumn("Breite");
  rectTable.addColumn("R");
  rectTable.addColumn("G");
  rectTable.addColumn("B");
  PFont font;

  poster = loadImage("moonrise_poster_2.jpg");
}

void movieEvent(Movie movie) {
  movie.read();
}

//------------------------------------------------------------------------------------------

void draw(){
  background(60);
  image(movie, leftMargin, topMargin, 360,195);
  textFont(monoFont);
  fill(255,220,30);
  text("Press any button to change the view.", 30, height-30);
  textFont(font);
  // every time a frame gets pulled for analysis
  if(counter % intervall == 0){
    frames = movie.get(0,0,920,520);
    colArray[newFrameCounter] = getAverageColor(frames);

  // writes the color data to variables to save them later
    r = colArray[newFrameCounter] >> 16&0xFF;
    g = colArray[newFrameCounter] >> 8&0xFF;
    b = colArray[newFrameCounter]&0xFF;

    prevBreite = breite;

    if(lineCrossed == true){
      prevBreite = 0;
      lineCrossed = false;
    }

    breite = int(averageVolume * 0.6);
    xPos = xPos + prevBreite;

    if(leftStart + xPos + breite > 1000){
      breite = 1000 - leftStart - xPos;
      prevBreite = 0;
      lineCrossed = true;
    }

    endPoint = leftStart + xPos + breite;
    println( "prevBreite: " + prevBreite + " | breite: " + breite + " | Endpunkt: " + endPoint);

    Kaestchen newRect = new Kaestchen(leftStart+xPos, y, breite, rectHeight, colArray[newFrameCounter]);
    rectList.add(newRect);

    if(lineCrossed == true){
      xPos = 0;
      y = y+rectHeight;
    }

    newFrameCounter++;

  // writing the rectangle data to a table to save it for later
    TableRow newRow = rectTable.addRow();
    newRow.setInt(0, newFrameCounter);
    newRow.setInt(1, int(xPos));
    newRow.setInt(2, y);
    newRow.setInt(3, int(breite));
    newRow.setInt(4, r);
    newRow.setInt(5, g);
    newRow.setInt(6, b);
  }


// displays the actual rectangle
  for(int i=0; i<rectList.size(); i++){
    rectList.get(i).display();
  }

//----------VOLUME---------------------------------------------------------------------

  volume = sound.left.level()*1000;
  volumeArray[volumeCounter] = volume;

  if(volumeCounter == 29){
    for(int i = 0; i<29; i++){
      averageVolume = averageVolume + volumeArray[i];
    }
    averageVolume = averageVolume/30;
    //println("averageVolume: "+averageVolume);
  }

  volumeCounter++;
  if(volumeCounter == 30){
    volumeCounter = 0;
  }

//----------SUBTITLES------------------------------------------------------------------

  fill(255,220,30);
  // checks if there is a subtitles located at the current second of the movie
  if(hm.containsKey(millis()/1000) == true){
    subtitle.set(hm.get(millis()/1000));
  }

  if(displayState1){
    if(int(millis()/1000) - timeFreeze1 > displayDurSub1){
      displayState1 = false;
    }else{
      if(int(random(30))==0){
       displaySub1 = modifySubtitle(displaySub1, 5);
      }
      text(displaySub1, displayX1, displayY1);
    }
  }

  if(displayState2){
    if(int(millis()/1000) - timeFreeze2 > displayDurSub2){
      displayState2 = false;
    }else{
      if(int(random(30))==0){
       displaySub2 = modifySubtitle(displaySub2, 5);
      }
      text(displaySub2, displayX2, displayY2);
    }
  }

  if(displayState3){
    if(int(millis()/1000) - timeFreeze3 > displayDurSub3){
      displayState3 = false;
    }else{
      if(int(random(30))==0){
       displaySub3 = modifySubtitle(displaySub3, 5);
      }
      text(displaySub3, displayX3, displayY3);
    }
  }

  if(displayState4){
    if(int(millis()/1000) - timeFreeze4 > displayDurSub4){
      displayState4 = false;
    }else{
      if(int(random(30))==0){
       displaySub4 = modifySubtitle(displaySub4, 5);
      }
      text(displaySub4, displayX4, displayY4);
    }
  }


//----------STATES-------------------------------------------------------------------------

  if(keyPresses == 1){
    background(60);
    image(movie, width/2-480, height/2-260, 960, 520);
    textFont(monoFont);
    fill(255,220,30);
    text("Press any button to change the view.", 30, height-30);
    textFont(font);
  }

  if(keyPresses == 2){
    background(60);
    image(poster, leftMargin,topMargin, 360, 489);
    textFont(monoFont);
    fill(255,220,30);
    text("Press any button to change the view.", 30, height-30);
    textFont(font);
    for(int i=0; i<rectList.size(); i++){
      rectList.get(i).display();
    }
  }

  if(keyPresses == 3){
    background(60);
    textFont(monoFont);
    fill(255,220,30);
    text("Press any button to change the view.", leftMargin, height-botMargin);
    textFont(font);
    // checks if there is a subtitles located at the current second of the movie
    if(hm.containsKey(millis()/1000) == true){
      subtitle.set(hm.get(millis()/1000));
    }

    if(displayState1){
      if(int(millis()/1000) - timeFreeze1 > displayDurSub1){
        displayState1 = false;
      }else{
        if(int(random(30))==0){
         displaySub1 = modifySubtitle(displaySub1, 5);
        }
        text(displaySub1, displayX1, displayY1);
      }
    }

    if(displayState2){
      if(int(millis()/1000) - timeFreeze2 > displayDurSub2){
        displayState2 = false;
      }else{
        if(int(random(30))==0){
         displaySub2 = modifySubtitle(displaySub2, 5);
        }
        text(displaySub2, displayX2, displayY2);
      }
    }

    if(displayState3){
      if(int(millis()/1000) - timeFreeze3 > displayDurSub3){
        displayState3 = false;
      }else{
        if(int(random(30))==0){
         displaySub3 = modifySubtitle(displaySub3, 5);
        }
        text(displaySub3, displayX3, displayY3);
      }
    }

    if(displayState4){
      if(int(millis()/1000) - timeFreeze4 > displayDurSub4){
        displayState4 = false;
      }else{
        if(int(random(30))==0){
         displaySub4 = modifySubtitle(displaySub4, 5);
        }
        text(displaySub4, displayX4, displayY4);
      }
    }
  }

//------------------------------------------------------------------------------------------
  // saves the information about the rectangles in a csv file
  if(newFrameCounter > rectsToDraw){
    saveTable(rectTable, "data/rectTable.csv");
  }

  counter++;
}