//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.fill(50);

var crimeString = b.loadString("Baton_Rouge_Crime_Incidents.csv");
b.CSV.delimiter(";");
var data = b.CSV.decode(crimeString);

// for(i=0; i<10; i++){
//   b.ellipse(50+i*10, 100 - data[i].OFFENSETIME*0.1, 1,1);
// }

// for(i=0; i<20; i++){
// b.println(b.round(data[i].OFFENSETIME * 0.01))
// }




var counterArray = [];
for(var i=0; i<24; i++){
  counterArray[i] = 0;
}

for(var i=0; i<1000; i++){
  counterArray[b.round(data[i].OFFENSETIME * 0.01)]++;
}

b.textFont("Helvetica", "Bold");
b.text("When does crime happen in Baton Rouge?", 50, 50, 100, 100);

b.line(50, 250, b.width-50, 250);
b.beginShape();
b.vertex(50,250);
for(var i=0; i<24; i++){

  b.vertex(50+i*5, 250-counterArray[i]*2);

}
b.vertex(b.width-50,250);
b.vertex(50,250);
b.endShape();

for(var i=0; i<24; i=i+4){
  b.text(i + ":00", 50+i*5, 255,20,20);
}


b.println(counterArray);

}

b.go();