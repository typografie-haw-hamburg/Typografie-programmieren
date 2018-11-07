// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc())


// grosse Kreise - mittig
// eigentlich: ( var i = 0; i < 100; i++) {
for ( var i = 0; i < 1; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);

noStroke();
var h = random(width/2-50,width/2+50);
var x = random(height/2-40,height/2+40);

var kreise = ellipse(h,x,10,10);
var h = random(20,60);
opacity(kreise,h);

}
// Kreisse mittig mittel
// eigentlich: ( var i = 0; i < 100; i++) {
for ( var i = 0; i < 1; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
noStroke();
var h = random(0+2.5,width-2.5);
var x = random(height/2-10,height/2+10);
var kreise = ellipse(h,x,5,5);
var r = random(10,30);
opacity(kreise,r);
}
//Kreise mittig kleiner 1
//eigentlich: ( var i = 0; i < 100; i++) {
for ( var i = 0; i < 1; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
noStroke();
var h = random(0+2.5,width-2.5);
var x = random(height/2,height/2+30);
var kreise = ellipse(h,x,3,3);
var r = random(30,50);
opacity(kreise,r);
}
//Kreise mittig kleiner 1
// eigentlich: ( var i = 0; i < 100; i++)
for ( var i = 0; i < 1; i++) {
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
noStroke();
var h = random(0+2.5,width-2.5);
var x = random(height/2,height/2+30);
var kreise = ellipse(h,x,2,2);
var r = random(50,70);
opacity(kreise,r);
}
//Kreis Rechteck 1
var j = width/2;
var k = height/2;

var kreis1_1 = ellipse(j,k-50,4,4);
var kreis1_2 = ellipse(j,k+130,4,4);
var kreis2_1 = ellipse(j-30,k-20,4,4);
var kreis2_2 = ellipse(j+30,k-20,4,4);
var kreis3_1 = ellipse(j-60,k+10,4,4);
var kreis3_2 = ellipse(j+60,k+10,4,4);
var kreis4_1 = ellipse(j-90,k+40,4,4);
var kreis4_2 = ellipse(j+90,k+40,4,4);
var kreis5_1 = ellipse(j-60,k+70,4,4);
var kreis5_2 = ellipse(j+60,k+70,4,4);
var kreis6_1 = ellipse(j-30,k+100,4,4);
var kreis6_2 = ellipse(j+30,k+100,4,4);

var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//1.Kreis
var kreis1_1 = ellipse(j,k-46,4,4);
var kreis1_2 = ellipse(j,k+126,4,4);
//2.Kreis
var kreis2_1 = ellipse(j-26,k-16,4,4);
var kreis2_2 = ellipse(j+26,k-16,4,4);
//3.Kreis
var kreis3_1 = ellipse(j-56,k+14,4,4);
var kreis3_2 = ellipse(j+56,k+14,4,4);
//4.Kreis
var kreis4_1 = ellipse(j-86,k+40,4,4);
var kreis4_2 = ellipse(j+86,k+40,4,4);
//5.Kreis
var kreis5_1 = ellipse(j-56,k+66,4,4);
var kreis5_2 = ellipse(j+56,k+66,4,4);
//6.Kreis
var kreis6_1 = ellipse(j-26,k+96,4,4);
var kreis6_2 = ellipse(j+26,k+96,4,4);

var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//1.Kreis
var kreis1_1 = ellipse(j,k-42,4,4);
var kreis1_2 = ellipse(j,k+122,4,4);
//2.Kreis
var kreis2_1 = ellipse(j-22,k-12,4,4);
var kreis2_2 = ellipse(j+22,k-12,4,4);
//3.Kreis
var kreis3_1 = ellipse(j-52,k+18,4,4);
var kreis3_2 = ellipse(j+52,k+18,4,4);
//4.Kreis
var kreis4_1 = ellipse(j-82,k+40,4,4);
var kreis4_2 = ellipse(j+82,k+40,4,4);
//5.Kreis
var kreis5_1 = ellipse(j-52,k+62,4,4);
var kreis5_2 = ellipse(j+52,k+62,4,4);
//6.Kreis
var kreis6_1 = ellipse(j-22,k+92,4,4);
var kreis6_2 = ellipse(j+22,k+92,4,4);
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
//1.Kreis
var kreis1_1 = ellipse(j,k-38,4,4);
var kreis1_2 = ellipse(j,k+118,4,4);
//2.Kreis
var kreis2_1 = ellipse(j-18,k-8,4,4);
var kreis2_2 = ellipse(j+18,k-8,4,4);
//3.Kreis
var kreis3_1 = ellipse(j-48,k+22,4,4);
var kreis3_2 = ellipse(j+48,k+22,4,4);
//4.Kreis
var kreis4_1 = ellipse(j-78,k+40,4,4);
var kreis4_2 = ellipse(j+78,k+40,4,4);
//5.Kreis
var kreis5_1 = ellipse(j-48,k+58,4,4);
var kreis5_2 = ellipse(j+48,k+58,4,4);
//6.Kreis
var kreis6_1 = ellipse(j-18,k+88,4,4);
var kreis6_2 = ellipse(j+18,k+88,4,4);



}
