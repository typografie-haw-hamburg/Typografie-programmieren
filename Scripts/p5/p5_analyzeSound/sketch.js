// Mit diesem Programm wird 18 mal pro Sekunde (frameRate=18) beim Abspielen eines Soundfiles (soundfile.mp3) der Sound "abgetastet". Welche Werte genau ausgelesen werden, wird in function fillArrays() definiert. Die Werte werden dann in die definierten Arrays gepushed (z.B. levelArray), die dann wiederum nach dem Song durch Klicken des over-Buttons (function stop()) in die Varibale jasonArray gepushed werden. Dieser Array (der also aus einzelnen Arrays besteht) wird dann als JSON-file gespeichert...ich hoffe, das ist verständlich :)

var button, fR, fC;

var json;
var sound, recorded, amplitude, fft;

var idArray = [];
var levelArray = [];

var jsonArray = [];


function preload() {
  sound = loadSound('soundfile.mp3');
}


function setup() {
  fC = 0;
  fR = 18;
  frameRate(fR);

  createCanvas(500,500);

  sound.play();
  recorded = sound.duration();

  amplitude = new p5.Amplitude();
  fft = new p5.FFT();

  // creating a button
  button = createButton('over');
  button.position(width/2 - button.width/2, height - button.height);
  button.mousePressed(stop);
}


function draw() {
  background(0);

  // called functions
  fillArrays();
  whiteCurtain();
}


function stop() {
  sound.stop()

   for (i = 0; i < idArray.length; i++){
     json = {};

     json.id = idArray[i];
     json.level = levelArray[i];

     jsonArray.push(json);
   }
   saveJSON(jsonArray, 'soundfile.json');
}


function whiteCurtain(){
   // frameCount of played sound file
  if (sound.isPlaying() == true){
    fC += 1;
  }

  // time-dependend rect
  if(fC > 1){
    var actualSongTime = fC/fR;
    var rectHeight = map(actualSongTime, 0, recorded, 0, height+1)
    fill(255);
    rect(-1, -1, width+1, rectHeight);
  }
}


function fillArrays() {
  var level = amplitude.getLevel();

  var spectrum = fft.analyze();
  var centroid = fft.getCentroid();

  idArray.push(frameCount);
  levelArray.push(level);
}
