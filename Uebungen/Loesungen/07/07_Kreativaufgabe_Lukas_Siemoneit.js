//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.noStroke();
b.textSize(8);
b.textFont("Andale Mono");
b.textAlign(Justification.CENTER_ALIGN);
var imgCount = 76;
var allImgNames = [];

for(i=0; i<imgCount; i++){
  var imgName = "img_" + (i+1) + ".png"
  allImgNames.push(imgName);
}

// for(i=0; i<imgCount; i++){
//   b.image(allImgNames[i], 50+i*3,50,3,300);
// }

var counter = 0;

while(allImgNames.length > 0){
  var random = b.floor(b.random(0, allImgNames.length));

  b.image(allImgNames[random], 181.638+counter*3,210.291,3,300);

  allImgNames.splice(random, 1);

  b.println(random);
  counter++;

}

b.text("computer generated portrait", 203.138, 581.598, 190, 20);
b.textSize(7);
b.text(b.nf(b.day(),2) + "." + b.nf(b.month(),2) + "." + b.year() + " | " + b.nf(b.hour(),2) + ":" + b.nf(b.minute(),2) , 215.138,601,598 pt,166,11.055);


}

b.go();