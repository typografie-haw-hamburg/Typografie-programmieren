// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;


function draw() {

size(297,297);

clear( doc() );
fill(241,237,234);
rect(0, 0, width, height);

for (var i = 0; i < 5; i++) {
	var amount = 15
    var value = random(30, 40);
    var r = random(50, 255);
	var g = random(50, 255);
	var b = random(50, 255);

    var x = random(width);
    var y = random(height);

    var x2 = random(width);
    var y2 = random(height);


  for (var j = 0; j <1; j++) {
    noStroke();
    fill (r,g,b);
    var u = ellipse(x,y, 50, 50);

for (var k = 0; k < 1; k++) {
    noFill();
    stroke (r,g,b);
    strokeWeight(value);
    var e = ellipse(x2,y2, 50, 50);

}
}
}


var dpList1 = [ "BETTER", "FASTER", "STRONGER"];
	var dp1 = floor(random(dpList1.length));
	var dpHarder = dpList1[dp1];

var dpList2 = [ "HARDER", "FASTER", "STRONGER"];
	var dp2 = floor(random(dpList2.length));
	var dpBetter = dpList2[dp2];

var dpList3 = [ "HARDER", "BETTER", "STRONGER"];
	var dp3 = floor(random(dpList3.length));
	var dpFaster = dpList3[dp3];

var dpList4 = [ "HARDER", "FASTER", "BETTER"];
	var dp4 = floor(random(dpList4.length));
	var dpStronger = dpList4[dp4];

var d1 = width
var d2 = 30
var y = 125
var x = 0

fill(40);

var fonts = app.fonts;
	
	textAlign(Justification.CENTER_ALIGN);
    
    var rtFontSize = round(random(50, 75));

    var dpFontList = [ "Myriad Pro", "Calibri", "Gill Sans MT"];
	var dpFl = floor(random(dpFontList.length));
	var dpFList = dpFontList[dpFl];

    textSize(rtFontSize);
    textFont([dpFList], "Bold");

		text("DAFT PUNK WRONG", width/2-175/2,60,175,60);

    var rTextFontSize = round(rtFontSize-rtFontSize/2.5);
    textSize(rTextFontSize);
    textFont([dpFList], "Regular");

		text("WORK IT "+dpHarder, x,y,d1,d2);
		text("MAKE IT "+dpBetter, x,y+d2,d1,d2);
		text("DO IT "+dpFaster, x,y+d2*2,d1,d2);
		text("MAKES US "+dpStronger, x,y+d2*3,d1,d2);



}