//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.page());
//Name wird erfragt
var yourName = prompt("What's your name?");
b.println(yourName);

// Name wird auf Seite gesetzt
    //TextFrame
      var textWidth = 700;
      var textHeight = 500;
      var textX = b.ceil(b.random(0, b.width-textWidth/2)); // zufälliger X Wert für Textrahmen
      var textY = b.ceil(b.random(0,b.height-textHeight/2)); // zufälliger Y Wert für Textrahmen
      b.noFill();

var text = b.text(yourName, textX,textY,textWidth,textHeight); //Platziert den Namen auf dem Blatt

    // Typo Aussehen
      b.typo(text, 'pointSize',150);
      b.typo(text, 'strokeColor',b.color(0));
      b.stroke(1);
      text.createOutlines(); // wandelt text in Outlines um

var outlinesObj = app.documents[0].polygons.item(0);
outlinesObj.select(); // ist es nötig auszuwählen oder kann man es eleganter lösen?
var outlinePath = app.selection[0].paths;
var outlinePathCount = app.selection[0].paths.count();


// Pfadpunkte des Namens werden zufällig um x- und y- verschoben
  for(i=0; i<outlinePathCount; i++){
      var myPath = outlinePath.item(i);
      var pathPointLength = myPath.pathPoints.length;
      b.println(pathPointLength);

          for(var pathPointCount=0; pathPointCount<pathPointLength; pathPointCount++){
              var pathPoint = myPath.pathPoints.item(pathPointCount);

              anchorPosition = pathPoint.anchor;
              rightDirect = pathPoint.rightDirection;
              leftDirect = pathPoint.leftDirection;

              anchorX = anchorPosition[0];
              anchorY = anchorPosition[1];
              rightX = rightDirect[0];
              rightY = rightDirect[1];
              leftX = leftDirect[0];
              leftY = leftDirect[1];

              var randomX = b.random(-200,200);
              var randomY = b.random(-200,200);

              pathPoint.anchor =  [anchorX+randomX,anchorY+randomY];
              pathPoint.rightDirection = [rightX+randomX,rightY+randomY];
              pathPoint.leftDirection = [leftX+randomX,leftY+randomY];



              b.delay(20);

              } //forLoop innen
    }//for loop außen


app.documents.item(0).print();
DocumentPrintUiOptions.SUPPRESS_FILE_SAVE_DIALOG(true);
DocumentPrintUiOptions.SUPPRESS_PRINT_DIALOG;
}

b.go();

