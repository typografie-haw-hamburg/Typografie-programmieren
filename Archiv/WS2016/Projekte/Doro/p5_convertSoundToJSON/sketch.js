var button, fR, fC;

var json;
var sound, recorded, amplitude, fft;

var idArray = [];
var levelArray = [];
var levelVoiceArray = [];
var femaleVolumeArray = [];
var maleVolumeArray = [];
var centroidArray = [];
var sopranoArray = [];
var mezzosopranoArray = [];
var contraltoArray = [];
var altusArray = [];
var tenorArray = [];
var baritoneArray = [];
var bassArray = [];

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
     json.centroid = centroidArray[i];
     json.level = levelArray[i];
     json.levelVoice = levelVoiceArray[i];
     json.femaleLevel = femaleVolumeArray[i];
     json.maleLevel = maleVolumeArray[i];
     json.soprano = sopranoArray[i];
     json.mezzosoprano = mezzosopranoArray[i];
     json.contralto = contraltoArray[i];
     json.altus = altusArray[i];
     json.tenor = tenorArray[i];
     json.baritone = baritoneArray[i];
     json.bass = bassArray[i];
     
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
  var soprano = fft.getEnergy(260, 1050); 
  var mezzosoprano = fft.getEnergy(220, 880); 
  var contralto = fft.getEnergy(170, 700);
  var altus = fft.getEnergy(160, 660);
  var tenor = fft.getEnergy(130, 520);
  var baritone = fft.getEnergy(95, 390);
  var bass = fft.getEnergy(80, 330);
  var levelVoice = fft.getEnergy(80, 1050);
  var femaleVolume = fft.getEnergy(170, 1050);
  var maleVolume = fft.getEnergy(80, 660);
  
  idArray.push(frameCount);
  centroidArray.push(centroid);
  levelArray.push(level);
  levelVoiceArray.push(levelVoice);
  femaleVolumeArray.push(femaleVolume);
  maleVolumeArray.push(maleVolume);
  sopranoArray.push(soprano);
  mezzosopranoArray.push(mezzosoprano);
  contraltoArray.push(contralto);
  altusArray.push(altus);
  tenorArray.push(tenor);
  baritoneArray.push(baritone);
  bassArray.push(bass);
}
