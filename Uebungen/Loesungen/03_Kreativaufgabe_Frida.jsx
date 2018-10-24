// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  clear(doc());

fill(55, 40, 40);
rect(0, 0, width, height);

fill(255, 255, 255);
textFont("Lato", "Bold");
textSize(200);
textAlign(Justification.CENTER_ALIGN);

var text1 = text("KOS", 60, height /5, width, 150);
textAlign(Justification.LEFT_ALIGN);
var text2 = text("MOS", 0, height -60, width, 150);

transform(text1, "rotation", 90);

stroke(255, 255, 255);
var count = 30
for(var i = 0; i < count; i++) {


var abstand = count-1
var wiederholung = i * height/ abstand

var xline = 0
var yline = 0
line(xline, yline, width, wiederholung);
//line(xline, yline, width, wiederholung /2);
//line(xline, yline, width, wiederholung /4);
line(width, height, wiederholung, 0);



}

//var x = random(0, width);
//var y = random(0 , height);

//if(x < 150, x > 50, y < 50, y > 150) {
//ellipse(x, y, 5, 5);
//}
//else {

	//ellipse(x, y, 3, 3);
for(var i = 0; i < 25; i++) {

stroke(0, 0, 0);
strokeWeight(1);
fill(255, 255, 255);
var sizeKreis = random(1, 6);

if(sizeKreis > 2) {

	var x1 = random(0, width);
	var y1 = random(0, 50);

	var x2 = random(50, width);
	var y2 = random(50, 100);

	var x3 = random(100, width);
	var y3 = random(100, 200);

	var x4 = random(180, width);
	var y4 = random(50, height);


	ellipse(x1, y1, sizeKreis, sizeKreis);
	ellipse(x2, y2, sizeKreis, sizeKreis);
	ellipse(x3, y3, sizeKreis, sizeKreis);
	ellipse(x4, y4, sizeKreis, sizeKreis);

	}

else {

for(var j = 0; j < 15; j++) {
	strokeWeight(1);

	var xkreis = random(0, width);
	var ykreis = random(0, height);
	var kreis2size = random(1,2);
	
	ellipse(xkreis, ykreis, kreis2size, kreis2size);
	
	
	}

	}

}




}
