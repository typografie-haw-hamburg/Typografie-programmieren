var allBeziers = [];
var disp = [];
var iterations;
var font = 0;
var allShapes = [];


function preload () {

  var characterJson = loadJSON("Quadraat Sem.Proj.json");
  var characterJson1 = loadJSON("Univers Sem.Proj.json");
  var characterJson2 = loadJSON("Rockwell Sem.Proj.json");
  var characterJson3 = loadJSON("Quadraat Sans Sem.Proj.json");
  allBeziers.push(characterJson, characterJson1, characterJson2, characterJson3);
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  /*slider = createSlider(1, 70, 70, 1);
  slider.position(width/2 - 175, height - 60);
  slider.style('width', '350px');
  */
}

function draw() {
  background(0);

  fill(255);

  if (mouseX < width/2) {
    iterations = round(map (mouseX, 0, width/2, 1, 9));
  } else {
    iterations = round(map (mouseX, width/2, width, 9, 60));
  }

  text (iterations, 10, 10, 100, 100);

  font = round(map(mouseY, 0, height, 0, 3));

  var size = 1;
  var X  = [];
  var Y = [];


  for (var k = 0; k < disp.length; k ++) {
    //Loop Buchstaben

    // variable posX definiert die Platzierung der Buchstaben auf der Seite, abhängig von der Anzahl der dargestellten Buchstaben in Zeile 68
    var posX = 0;

    if (disp.length === 2) {
     posX = - 150 + (300 * k)
    }
    if (disp.length === 3) {
     posX = -300+ (300 * k);
    }
    if (disp.length === 4) {
     posX = - 450 + ( 300 * k)
    }

    for ( var i = 0; i < allBeziers[font][disp[k]].length; i++ ) {
      // Loop Pfadsegmente

     for ( var j = 0; j < iterations; j++ ) {
      // Loop Punkte pro Pfadsegment

        noStroke();
        var curve = bzr(
          allBeziers[font][disp[k]][i].p0x*size+posX,
          allBeziers[font][disp[k]][i].p0y*size,
          allBeziers[font][disp[k]][i].cp0x*size + posX,
          allBeziers[font][disp[k]][i].cp0y*size,
          allBeziers[font][disp[k]][i].cp1x*size + posX,
          allBeziers[font][disp[k]][i].cp1y*size,
          allBeziers[font][disp[k]][i].p1x*size+ posX,
          allBeziers[font][disp[k]][i].p1y*size );

        var Pxi = curve.Pxi;
        var Pyi = curve.Pyi;

        X.push(Pxi);
        Y.push(Pyi);

        if (X.length > 4) {

          stroke(255);
          strokeWeight(0.6);

         //bezier( X[0] + random( - deviation, deviation), Y[0]+ random( - deviation, deviation), X[1] + random( - deviation, deviation), Y[1]+ random( - deviation, deviation), X[2]+ random( - deviation, deviation), Y[2]+ random( - deviation, deviation), X[3]+ random( - deviation, deviation), Y[3]+ random( - deviation, deviation));
          console.log("X[0]: " + X[0]);
          allShapes.push([X, Y]);


          X.splice(0, X.length-2);
          Y.splice(0, Y.length-2);

        }
      }
    }
  }

  console.log(allShapes.length)

  stroke(255);
  strokeWeight(0.6);


  for (var z = 0; z < allShapes.length; z++) {
    var shapeX = allShapes[z][0]; // X
    var shapeY = allShapes[z][1]; // Y
    console.log(shapeX[0]);
    bezier( shapeX[0], shapeY[0], shapeX[1], shapeY[1], shapeX[2], shapeY[2], shapeX[3], shapeY[3]);
  }

  // // Array beschneiden
  // if(allShapes.length > 100) {
  //   allShapes. // splice, pop, slice Array vom Anfang beschneiden
  // }

}


function bzr( p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y ) {

  noFill();

  var ti = random( 1 );

  var Axi = ((1 - ti) * p0x) + (ti * cp0x);
  var Ayi = ((1 - ti) * p0y) + (ti * cp0y);
  var Bxi = ((1 - ti) * cp0x) + (ti * cp1x);
  var Byi = ((1 - ti) * cp0y) + (ti * cp1y);
  var Cxi = ((1 - ti) * cp1x) + (ti * p1x);
  var Cyi = ((1 - ti) * cp1y) + (ti * p1y);

  var Dxi = ((1 - ti) * Axi) + (ti * Bxi);
  var Dyi = ((1 - ti) * Ayi) + (ti * Byi);
  var Exi = ((1 - ti) * Bxi) + (ti * Cxi);
  var Eyi = ((1 - ti) * Byi) + (ti * Cyi);

  // Punkt auf Bezier (entfernung in %(t) von p0)
  var Pxi = ((1 - ti) * Dxi) + (ti * Exi);
  var Pyi = ((1 - ti) * Dyi) + (ti * Eyi);


  var result = {
   Pxi: Pxi,
   Pyi: Pyi
  };
  return result;

 }



document.onkeypress = function(evt) {
  evt = evt || window.event;

  // Ensure we only handle printable keys
  var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

  if (charCode || charCode != " ") {
   disp.push(String.fromCharCode(charCode));
    background(0);

    if (disp.length > 4) {
      disp.splice(0,1)

   }
  }
 if (charCode == 32) {
  disp.splice(0, disp.length)
  background(0);
 }
  if (charCode == 8 && disp.length != 0) {
  disp.splice(disp.length-2, disp.length-1)
 }

};
