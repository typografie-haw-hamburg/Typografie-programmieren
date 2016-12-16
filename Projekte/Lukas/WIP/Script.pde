import processing.video.*;
import ddf.minim.*;

Minim minim;
AudioInput in;
AudioPlayer player;

Movie movie;
PImage[] frames;

int n= 100;
int counter = 0;
int intervall = 60;

void setup(){
size(800,400);
frameRate(23.976024);
noStroke();
minim = new Minim(this);
//in = minim.getLineIn();

// load your own audio and movie file here to run the script
// put them in a data folder in the same directory as the .pde

player = minim.loadFile("sugar_man.mp3");
movie = new Movie(this, "sugar.m4v"); 
frames = new PImage[n];
movie.frameRate(23.976024);
movie.play();
//movie.jump(30);
player.play();
movie.volume(0);
}

void movieEvent(Movie movie) {
  movie.read();
}

void draw(){
image(movie, 0, 0, 300,150);

if(counter % intervall == 0){
  frames[counter/intervall] = movie.get(0,0,1280,720);
}

//image(frames[counter/30], counter/30*5, 170, 5, 75);
fill(getAverageColor(frames[counter/intervall]));
rect(counter/intervall*5,170,5,75);

image(frames[counter/intervall], 0,250, 300,150);
text("Hello", 0,0);

counter++;
fill(255);
rect(400, 0, 400, height);
rectMode(CENTER);
fill(0);
rect(500, height/2, player.left.level()*1000, player.left.level()*1000);
rectMode(CORNER);

println(player.left.level()*1000);

}



color getAverageColor(PImage img){
  img.loadPixels();
  int r=0, g=0, b=0;
  for(int i=0; i<img.pixels.length; i++){
    color c = img.pixels[i];
    r += c>>16&0xFF;
    g += c>>8&0xFF;
    b += c&0xFF;
  }
  r /= img.pixels.length;
  g /= img.pixels.length;
  b /= img.pixels.length;
  return color(r,g,b);
}
