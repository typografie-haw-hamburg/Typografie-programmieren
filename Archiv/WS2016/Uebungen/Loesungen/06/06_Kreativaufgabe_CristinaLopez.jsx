//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());

  for(var i = 0; i < 8; i++) {

    b.noStroke();
    
    b.fill(b.color(0, 0, 0));

    var randomWidth = b.random(10, 700);
    var randomHeight = b.random(10, 100);
    var posX = b.random(0, b.width - randomWidth);
    var posY = b.random(0, b.height - randomHeight);
    var size = b.random (80, 300);

    b.opacity(b.ellipse (posX, posY, size, size),100-80);

  }

  b.noFill();

  for  (var i=0; i<8; i++){
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var x2 = b.random(0, b.width);
    var y2 = b.random(0, b.height);
    var random = b.round(b.random(1,20));

    b.noFill();
    b.stroke(b.color(0, 0, 0));
    b.strokeWeight(1);
    b.ellipse(x, y, 150, 150);


  if (random <50) 
    {
      b.fill(0, 0, 0);
      b.ellipse(x2, y2, 20, 20);
    }


}

  b.textFont('DINPro', 'Bold');


  var list1 = ["an was Man sich als gEschehen erinnerT und der wirklicHe vOrgang ist nicht Das glEiche","Mir fällt auf daß diE UrsprünglichkeiT des gescHehens kOnventioneller ist als Das Erinnern daran", "iMitation umkEhrung rückläufige enTwicklung motiv gleicH Ob variiert zur abwanDlung odEr nicht", "sobald Musik bEgonnen haT besteHt sie sagte schönberg variatiOn ist Doch auch wiEderholung", "an was ich Mich Erinnere wenn auch nur unvollsTändig sind die abweicHungen vOm üblichen hanD- habEn der töne", "statt tonleiter oder reihe ein uMfang innErhalb dessen jedem elemenT die gleicHe qualifikatiOn notwenDig zuErkannt wird", "iMitation umkEhrung was besTand Hat ist variiertes mOtiv abwanDiung dEr erinnerung"]

  for (var i = 0; i < list1.length; i++) {

    var x = b.random (b.width);
    var y = b.random (b.height);
    var randomFontSize = b.random (10, 18);

    b.fill(0, 0, 0);
    b.textSize(randomFontSize);
    b.text(list1[i], x, y, 300, 300);
    }

  b.textFont('Gill Sans Shadow MT Pro', 'Regular');

  var list2 = ["M", "E", "T", "H", "O", "D", "E"]

  for (var i = 0; i < list2.length; i++) {

    var x = b.random (b.width);
    var y = b.random (b.height);
    var randomFontSize = b.random (250, 600);


    b.textSize(randomFontSize);
    b.text(list2[i], x, y, 700, 700);
  }

}

b.go();