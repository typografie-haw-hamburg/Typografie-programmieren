//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear(b.doc());


var mult = b.round(b.random(2,8));

for(i=1; i<50; i++){
  b.line(0,0, b.width-i*mult,i*mult);
  b.line(b.width-i*mult, i*mult, b.width, b.height);
}

for(i=1; i<50; i++){
  b.line(0,0,i*mult,b.height-i*mult);
  b.line(i*mult, b.height-i*mult, b.width, b.height);
}


// Alphabet Array (abc) erstellen
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var abc = [];

for(i=0; i<alphabet.length; i++){
  abc[i] = alphabet.charAt(i);
}
b.textSize(50);
b.textFont("Gotham","Black");
b.fill(244,10,0);
b.textAlign(Justification.CENTER_ALIGN);

for(i=0; i<5; i++){

  for(j=0; j<5; j++){
      if(b.round(b.random(0,1)) == 0){
    b.textFont("Gotham","Black Italic")
  }else{
    b.textFont("Gotham","Book");
  }
    b.text(abc[b.round(b.random(0,23))], 100+j*50, 100+i*50, 50,50);  
  }
  
}




}

b.go();
