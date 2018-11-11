// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

noStroke();



for(j=0; j<8; j++){

  var xSize=30
  var ySize=45

for(i=0; i<8; i++){

image("wendy-abo.jpg", i*xSize, j*ySize, xSize, ySize);

}


}
fill(230,0, 126);
rotate(45)
rect(30, -35, 300, 35)

textFont("Arial Black", "Regular")
fill(255, 255, 255)
textSize(95)

// textAlign(Justification.CENTER_ALIGN);
text("Jetzt erhältlich!", 35, -30, 350, 50)

}



