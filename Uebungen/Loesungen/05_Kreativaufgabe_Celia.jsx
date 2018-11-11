// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

rect(0,0,width,height)
noStroke()
fill(255,255,255)

for (var i= 0; i < 30; i++){
var x1 = random(0,width);
var y1 = random(0,height);
var dia= random(10,20)
rect(x1,y1,dia,dia)
}
noFill()
stroke(230,97,77)
for (var i= 0; i < 30; i++){
var x1 = random(0,width);
var y1 = random(0,height);
var dia= random(10,20)
rect(x1,y1,dia,dia)
}
noStroke()
var x = 20;
var y = 50;
var picSizeX = 120;
var picSizeY = 100;
var fl_1 = image('flucht_1.jpg', x, y, picSizeX, picSizeY);

var x = 90;
var y = 130;
var picSizeX = 120;
var picSizeY = 100;
var fl_1 = image('flucht_5.jpg', x, y, picSizeX, picSizeY);



textSize(10)
fill(255,255,255)
var x = random(0,100);
var y = random(0,200);
var fragestellung = loadString("Text.txt");
var text1b = text(fragestellung, x, y, 97, 30);

textSize(30)
text("COVER",x,y,100,100)

textSize(100)
text("[C]",10,10,100,100)






}