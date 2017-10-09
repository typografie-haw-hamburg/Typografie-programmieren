
function draw() {
// Hier kommt der Code hin
b.clear(b.doc());
//leeres dokument

b.units(b.MM);
//einheit in mm

//farben in Variablen
var weiß = b.color(255, 255, 255);
var blau = b.color(0,150,200);
var orange = b.color(200,120,20);
var schwarz = b.color(0,0,0);
var hut = b.color(0,40,80);
var rot = b.color(130,20,10);

b.noStroke();

//Hintergrund
b.fill(blau);
b.rect(0,0,b.width,b.height);

//schneeflocken
b.fill(weiß);
  var count = 100;

  b.doc();
  b.println(b.width + " x " + b.height);

  for (var i = 0; i < count; i++) {
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random(1, 3);
    b.ellipse(x, y, size, size);
  }

//schneemann
b.fill(weiß);
b.ellipse(b.width / 2, b.height / 2,50, 50);
b.ellipse(b.width / 2, b.height / 2+50,80, 80);
b.ellipse(b.width / 2, b.height / 2+100,100, 100);



//knöpfe
b.fill(schwarz);
b.ellipse(b.width/2-10,b.height/2-5,5,5);
b.ellipse(b.width/2+10,b.height/2-5,5,5);
b.ellipse(b.width/2,b.height/2+40,5,5);
b.ellipse(b.width/2,b.height/2+60,5,5);
b.ellipse(b.width/2,b.height/2+80,5,5);



//Nase
b.fill(orange)
b.beginShape(b.CLOSE);
  b.vertex(b.width/2,b.height/2+20);
  b.vertex(b.width/2+2.5,b.height/2+5);
  b.vertex(b.width/2-2.5,b.height/2+5);
b.endShape();

//Hut
b.fill(hut);
b.rect(b.width/2-30,b.height/2-22,60,8);
b.rect(b.width/2-20,b.height/2-60,40,40);

b.fill(rot);
b.rect(b.width/2-20,b.height/2-26,40,4);



}

b.go();