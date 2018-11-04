// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

//https://basiljs2.netlify.com/reference/

// HILFE
 //VARIABLES
   //var x = y
   //var x = random(0,width);
 //SHAPES
   //line(x,y,x,y)(width,height)
   //rect(x,y,w,h,(tl))
   //ellipse(x,y,w,h)
   //beginShape(CLOSE);
     //vertex(x,y);
     //vertex(x,y);
     //vertex(x,y);
     //endShape();
 //PROPERTIES
   //noStroke();
   //strokeWeight(x);
   //noFill();
   //fill(r,g,b);
   //var obj = ellipse(x,y,w,h);
     //opacity (obj, 0-100);
 //INFOS
   //println("Die Seitenbreite betraegt: " + width);
   //println(var);
 //LOOP
   //for (var i = 0; i < 20; i++) {
    //BEFEHL
    //}


clear(doc());

var windstaerke=prompt("Windstärke von 0-12",0)
var regenmenge=windstaerke*70

 if (windstaerke>12) {
  alert ("nee, Windstärken sind immer von 0-12.")
}if (windstaerke <0) {
  alert ("nee, wie soll die denn minus sein...")
}else{

var x = (50);

 strokeWeight(1)

 rect(0,0,width,height);

 fill(255);
 beginShape(CLOSE);
 vertex (0,height);
 vertex (width,height);
 vertex (width,60);
 vertex (50, 5);
 vertex (0, 10);
 endShape();

 for (var i = 0; i < 300; i++) {
 noFill();

 stroke(0)
  var x = x + (0);

 ellipse(x, i + 5, i * 2, i * 2);
 }

 for (var i = 0; i < 300; i++) {
 fill(255,255,255)

 stroke(0)
  var x = x + (0);

 ellipse(x,i * 2,i * 2 ,i * 2);
 }


 for (var i = 0; i < 200; i++) {
 fill(255,255,255)

 stroke(0)
  var x = x + (0);

 ellipse (x + 100, 100 + i * 2, i * 2, i * 2);
 }



}



var regenmenge=windstaerke*70
fill(0)

if (windstaerke <4) {
for(i=0;i<10;i++){
  stroke(255)
  rectSize=10
  rectx=random(width-rectSize)
 recty=height/1.5+i*10


 rect(rectx,recty,rectSize,rectSize)
 beginShape()
 vertex(rectx,recty)
 vertex(rectx+rectSize,recty)
 vertex(rectx+rectSize/2,recty-rectSize/2)
 vertex(rectx,recty)
 endShape(CLOSE)

 }


}
else{

if (windstaerke <7){
for(i=0;i<10;i++){
  var dachkaputt=random(0-windstaerke*5,windstaerke*5)
  stroke(255)
  rectSize=10
  rectx=random(width-rectSize)
  recty=height/1.5+i*10


 rect(rectx,recty,rectSize,rectSize)

 beginShape()
 vertex(rectx+dachkaputt,recty+dachkaputt)
 vertex(rectx+rectSize+dachkaputt,recty+dachkaputt)
 vertex(rectx+rectSize/2+dachkaputt,recty-rectSize/2+dachkaputt)
 vertex(rectx+dachkaputt,recty+dachkaputt)
 endShape(CLOSE)
}
}else{

if (windstaerke <10){
for(i=0;i<10;i++){
  var dachkaputtx=random(0,width)
  var dachkaputty=random(0,height)
  stroke(255)
  rectSize=10
  rectx=random(width-rectSize)
  recty=height/1.5+i*10


 rect(rectx,recty,rectSize,rectSize)

 beginShape()
 vertex(0+dachkaputtx,0+dachkaputty)
 vertex(0+rectSize+dachkaputtx,0+dachkaputty)
 vertex(0+rectSize/2+dachkaputtx,0-rectSize/2+dachkaputty)
 vertex(0+dachkaputtx,0+dachkaputty)
 endShape(CLOSE)
}
}else{

if (windstaerke >9){
for(i=0;i<10;i++){
  var dachkaputtx=random(0,width)
  var dachkaputty=random(0,height)
  var hauskaputtx=random(0,width)
  var hauskaputty=random(0,width)
  stroke(255)
  rectSize=5
  rectx=0
  recty=0


 rect(rectx+hauskaputtx,recty+hauskaputty,rectSize+hauskaputtx/20,rectSize+hauskaputtx/20)

 beginShape()
 vertex(0+dachkaputtx,0+dachkaputty)
 vertex(0+(rectSize+hauskaputtx/20)+dachkaputtx,0+dachkaputty)
 vertex(0+(rectSize+hauskaputtx/20)/2+dachkaputtx,0-(rectSize+hauskaputtx/20)/2+dachkaputty)
 vertex(0+dachkaputtx,0+dachkaputty)
 endShape(CLOSE)
}
}
}
}



}for (i=0;i<regenmenge;i++){
 stroke(0)
  var xlinie=random(width)
  var ylinie=random(height)
  var xabweichung=windstaerke
 line(xlinie,ylinie,xlinie-xabweichung*2,ylinie+10);
}
}

