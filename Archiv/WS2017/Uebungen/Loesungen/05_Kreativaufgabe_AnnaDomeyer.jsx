// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );
  b.noStroke();




 var tib= b.random(50,100);

      for(var j = 0; j < 11; j++) {

          var menge= b.random(50,150);


  var zahl=b.random(5,10);
  var x= 20;
  var y= 20;
  var red = b.color(255, 0, 0);
  var blue = b.color(0, 0, 255);


for(var i = 0; i < 15; i++) {
      var re= b.random(20,255);
        var ge= b.random(20,255);
        var bl= b.random(20,255);
        b.fill(re,ge,bl);

   b.rect(x*j-5,y*i,20,20);

          }
}
}


b.go();