// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc())
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
var form1=rect(0,0,width,height)
var op=random(30,90);
opacity(form1,op);


strokeWeight(1);
var r=random(255);
var g=random(255);
var b=random(255);
stroke(r,g,b);

var x1=0;
var y1=0;
var xOffset = random(0,60);
var yOffset = random(0,70);
x2 = x1 + xOffset
y2 = y1 + yOffset
//Linienformation
line(x1,y1,x2,y2);
line(x2,y2,8+x2,8+y2);
line(8+x2,8+y2,20+x2,30+y2);
line(20+x2,30+y2,50+x2,54+y2);
line(50+x2,54+y2,80+x2,96+y2);
line(80+x2,96+y2,40+x2,140+y2);
line(40+x2,140+y2,90+x2,155+y2);
line(90+x2,155+y2,150+x2,170+y2);
line(150+x2,170+y2,155+x2,190+y2);
line(155+x2,190+y2,130+x2,205+y2);
line(130+x2,205+y2,155+x2,219+y2);
//Linienformation2
line(155+x2,190+y2,60,100);
line(60,100,155+x2,40);
line(155+x2,190+y2,100,100);
line(100,100,155+x2,40);
line(155+x2,190+y2,120,100);
line(120,100,155+x2,40);
line(155+x2,190+y2,140,100);
line(140,100,155+x2,40);
//Kreis
noStroke();
ellipse(130+x2,205+y2,10,10);
//Rechteck
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
rect(155+x2,219+y2,50,20);

// //TEXT
// textAlign(Justification.CENTER_ALIGN)
// //text1
// var r=random(100,200);
// var g=random(255);
// var b=random(100,200);
// fill(r,g,b);
// textSize(80);
// textFont("Helvetica","Bold");
// text("100",50,height-80,50,50);
// //text2
// var r=random(100,200);
// var g=random(255);
// var b=random(100,200);
// fill(r,g,b);
// textSize(60);
// textFont("Helvetica","Bold");
// text("---",50,height-60,50,50);
// //text3
// var r=random(100,200);
// var g=random(255);
// var b=random(100,200);
// fill(r,g,b);
// textSize(30);
// textFont("Helvetica","Bold");
// text("%",50,height-15,50,50);


}


