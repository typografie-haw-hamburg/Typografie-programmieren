// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());
size(372, 250, LANDSCAPE);
noStroke();
textFont("Sneak", "Medium",)




// Verblasst mit den Jahren ...
var deckkraft = map(year(), 2018, 2098, 100, 10);







// Bilder
var x = random(0, width-70);
var y = random(0, height-100);
var picSizeX = 70;
var picSizeY = 100;
var stadthoefe = image('stadthoefe.jpg', x, y, picSizeX, picSizeY);
opacity(stadthoefe, deckkraft);

var x = random(35, width-20);
var y = random(35, height-70);
var klammerLinks = image('klammer_links.png', x, y);
opacity(klammerLinks, deckkraft);

var x = random(35, width-20);
var y = random(35, height-70);
var klammerRechts = image('klammer_rechts.png', x, y);
opacity(klammerRechts, deckkraft);

var x = random(0, width);
var y = random(0, height);
var m = image('m.png', x, y);
transform(m, "rotate", random(0, 30));
opacity(m, deckkraft);


// Grosse Texte
textSize(60);

var x = random(0, width-220);
var y = random(0, height-20);
var text1a = text("Hommage ans Leben", x, y, 220, 20);
opacity(text1a, deckkraft);

var x = random(0, width-220);
var y = random(0, height-20);
var text2a = text("Tortue", x, y, 220, 20);
opacity(text2a, deckkraft);

var x = random(0, width-220);
var y = random(0, height-20);
var text3a = text("How to ne regret rien", x, y, 220, 20);
opacity(text3a, deckkraft);


// Kleine Texte
textSize(20);

var x = random(0, width-97);
var y = random(0, height-30);
var fragestellung = loadString("fragestellung.txt");
var text1b = text(fragestellung, x, y, 97, 30);
opacity(text1b, deckkraft);

var x = random(0, width-97);
var y = random(0, height-30);
var namen = loadString("namen.txt");
var text2b = text(namen, x, y, 97, 30);
opacity(text2b, deckkraft);



}