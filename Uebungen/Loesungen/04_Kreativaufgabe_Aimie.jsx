// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc())

//vektorform1
beginShape(CLOSE);
for ( var i = 0; i < 50; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
noStroke();
var h = random(50,250);
var x = random(30,300);
vertex(h,x);
}
endShape();


//vektorform2
beginShape(CLOSE);
for ( var i = 0; i < 25; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
noStroke();
var h = random(0,50);
var x = random(40,100);
vertex(h,x);
}
endShape();

//vektorform3
beginShape(CLOSE);
for ( var i = 0; i < 25; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
noStroke();
var h = random(130,200);
var x = random(150,250);
vertex(h,x);
}
endShape();


// mittlere Kreise
for (var i=0;i<50; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
var x1 =random(0,width);
var y1 =random(0,height);
ellipse(x1,y1,10,10);
}

//kleine Kreise - 1
for (var i=0;i<50; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
var x1 =random(0,width);
var y1 =random(0,height);
ellipse(x1,y1,5,5);
}

//kleine Kreise - 2
for (var i=0;i<50; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
var x1 =random(0,width);
var y1 =random(0,height);
var kreis1=ellipse(x1,y1,2,2);
var v=random(10,30);
opacity(kreis1,v);
}

// kleine Kreise mit zufälliger opacity
for (var i=0;i<50; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
var x1 =random(0,width);
var y1 =random(0,height);
var kreis=ellipse(x1,y1,5,5);
var n=random(30,60);
opacity(kreis,n);
}

//untere Rechteckreihe - Opacityverlauf
noFill()
noStroke(0)
fill(100,170,100);
var rectangle0=rect(0,270,100,10);
var rectangle1=rect(20,270,100,10);
var rectangle2=rect(40,270,100,10);
var rectangle3=rect(60,270,100,10);
var rectangle4=rect(80,270,100,10);
var rectangle5=rect(100,270,100,10);
var rectangle6=rect(120,270,100,10);
opacity(rectangle0,40);
opacity(rectangle1,40);
opacity(rectangle2,40);
opacity(rectangle3,40);
opacity(rectangle4,40);
opacity(rectangle5,40);
opacity(rectangle6,40);


//obere Rechteckreihe - Opacityverlauf
noFill()
noStroke(0)
fill(80,140,100);
var rectangle0=rect(0,0,100,10);
var rectangle1=rect(20,0,100,10);
var rectangle2=rect(40,0,100,10);
var rectangle3=rect(60,0,100,10);
var rectangle4=rect(80,0,100,10);
var rectangle5=rect(100,0,100,10);
var rectangle6=rect(120,0,100,10);
opacity(rectangle0,40);
opacity(rectangle1,40);
opacity(rectangle2,40);
opacity(rectangle3,40);
opacity(rectangle4,40);
opacity(rectangle5,40);
opacity(rectangle6,40);


}
