var locationData;

function preload(){
    locationData =  getCurrentPosition();
}

function setup() {
  // print data to console
  print(locationData.latitude)
  print(locationData.longitude)
  print(locationData.accuracy)
  print(locationData.altitude)
  print(locationData.altitudeAccuracy)
  print(locationData.heading)
  print(locationData.speed)

  createCanvas(640, 360);
}

function draw() {
  background(255);
  textSize(24);
  text("Breitengrad: " + nf(locationData.latitude, 0, 2) + "°", 20, 40);
  text("Längengrad: " + nf(locationData.longitude, 0, 2) + "°", 20, 80);
}