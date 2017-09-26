//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear(b.doc());

//Stars
b.rect (0,0,b.width,b.height);

for (var i = 1; i < 250; i++){ 
   b.fill (255,255,255);
    var width = b.random (1,4);
    var posx = b.random (0, b.width);
    var posy = b.random (0, b.height);
    b.ellipse (posx,posy,width,width);
}


//PlanetNames
var names = ["Tarqeq", "Pan", "Daphnis", "Atlas", "Prometheus", "Pandora", "Epimetheus", "Janus", "Aegaeon", "Mimas", "Methone", "Anthe", "Pallene", "Enceladus", "Tethys", "Calypso", "Telesto", "Polydeuces", "Dione", "Helene", "Rhea", "Titan", "Hyperion", "Iapetus", "Kiviuq", "Ijiraq", "Phoebe", "Paaliaq", "Skathi", "Albiorix"];

for(var i=1; i < 30; i++) {

  var x = b.random(0, b.width - 100);
  var y = b.random(0, b.height - 100);
  var linex = b.random(0, b.width - 100);
  var liney = b.random(0, b.height - 100);
  b.textFont ("Avenir Next","Ultra Light");

    if ( b.startsWith (names [i], "T") ) {
    b.textSize(20);
    b.textFont ("Avenir Next","Heavy");
    b.line (linex,liney,x,y);
    b.ellipse (x, y, 5, 5);
    }

    else {
      b.textSize(15);
    };

  b.text (names[i], x, y, 100, 20);
  b.stroke(255, 255, 255);
}
}

b.go();
