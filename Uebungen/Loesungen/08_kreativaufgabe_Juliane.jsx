// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {


revert();
textSize(23);
textFont("Sneak", "Medium");

// funktioniert nicht bei der ersten Seite:
doc().documentPreferences.facingPages = true;




// Text Datei laden:
var myFile = file("~/Documents/basiljs/user/181125_hausaufgabe08/data/monuments.txt");
var myString = loadString(myFile);
var tfA = text(myString, 10, 10, 160, 258);
var myWords = words(tfA);

println(myWords.length);


//Linie
for (var i=0; i<myWords.length; i++){

  var myBounds = bounds(myWords[68]);
  fill(0, 0, 255);
  line(myBounds.left, myBounds.baseline+1, width-80, height-30);
}

//Definition Denkmal
textSize(12);
textFont("Sneak", "Medium");
text("zum Gedächtnis an eine Person oder ein Ereignis errichtete, größere plastische Darstellung; Monument",width-80, height-30, 60, 20);


// So lange neue Seiten hinzufügen bis es keinen Übersatz meht gibt
while (tfA.overflows === true){
  addPage();
  var tfB = text("", 10, 10, 160, 258);
  linkTextFrames(tfA, tfB);
  tfA = tfB;
}


// Blau Verlauf in der Schrift
// Wird nicht auf zweite Seite übertragen !!!!!
for (var i=0; i<myWords.length; i++) {
  var myBlue = map(i, 0, myWords.length-1, 40, 255);
  myTextColor = color(0, 0, myBlue);
  typo(myWords[i], "fillColor", myTextColor);
}


// Hervorhebung "Denkmäler"
var black = color(0, 0, 0);

for (var i=0; i<myWords.length; i++) {

  if(myWords[i].contents === "Denkmäler"){
    typo(myWords[i], "skew", 10);
    typo(myWords[i], "fillColor", black);
      typo(myWords[i], "underline", true);

  }

  // if(myWords[i].contents === "Monument"){
  //   typo(myWords[i], "skew", 20);
  //   typo(myWords[i], "fillColor", blau);
  //   typo(myWords[i], "pointSize", 30)
  // }

  // if(myWords[i].contents === "denk"){
  //   typo(myWords[i], "skew", 20);
  //   typo(myWords[i], "fillColor", blau);
  //   typo(myWords[i], "pointSize", 30)
  // }

}


//Bild
noStroke();
var foto = image('kriegerdenkmal.png', 60, 120, 130, 130);













}

