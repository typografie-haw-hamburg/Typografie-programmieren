
//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);



  //Linienanzahl ist Random
  var linienanzahl = b.random(100, 200);

  //Linie
  var line = prompt("Wie breit soll die Linie werden?", "Black, Bold, Regular, Light");
    
 
  

  for (var i = 1; i < linienanzahl; i++){
    
    var height = b.random(0, b.height);


  if (line == "Black"){
    b.strokeWeight(8);
    b.line(0,height, b.width, height);
  }
  if (line == "Bold"){
    b.strokeWeight(6);
    b.line(0,height, b.width, height);
  }
  if (line == "Regular"){
    b.strokeWeight(3);
    b.line(0,height, b.width, height);
  }
  if (line == "Light"){
    b.strokeWeight(1);
    b.line(0,height, b.width, height);
  }






  }



}

b.go();