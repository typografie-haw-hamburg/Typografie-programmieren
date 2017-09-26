//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

//b.close(false);

var textLayer = b.layer("Text");
var graphicLayer = b.layer("Grafik");

var startPointSize = 10;
b.textSize(startPointSize);

var xTextOne = 50; 
var yTextOne = 50;
var wTextOne = 200;
var hTextOne = startPointSize;    // one line per textframe



var text = "Iciet ipsam sedipsa nusant faccus eatemque as est, ea dolorro videsti isimpor aestrum volupta tioreius ex essitate laut aut dolorum faccuptaquam repella ceprovid magnit quides autament verrore volecus, conest hariaerum hil expliquia custio et pra et et in conserovit ea et volo quiduciae consequ assimagnam, aut quisci aceptat quatur re voloremo volum fuga. Ut is dem sitae. Nemos etur aut quia nimodit atemque nihit, comnihiliquo toreiur? Hitatiisint.";


// link textframes in a document with 5 pages
for (var i = 1; i <= 5; i++){
  b.page(i);

  var runningText = b.text(text, xTextOne, yTextOne, wTextOne, hTextOne);
  runningText.name = "Fließtext";
  runningText.itemLayer = textLayer;

  if (i != 1){
    b.linkTextFrames(prevRunningText, runningText);
  }

  var prevRunningText = runningText;


  // draw line                                  
  var myLine = b.lines(runningText);
  for (var j = 0; j < myLine.length; j++){          // myLine.length = 1 (one line per textframe)
    var myChars = b.characters(myLine[j]);          // build characters in line

    var lastChar = myChars[myChars.length];         // last char in line
    var charBounds = b.bounds(lastChar);    

    var yLineOne = yTextOne + startPointSize/2;
    var xEndLineOne = charBounds.right;
    
    b.strokeWeight(0.3);
    b.line(xTextOne, yLineOne, xEndLineOne, yLineOne); 
  }

}

}
b.go();






