// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());
  noStroke();

  var color1 = color(255,255,255);
  var color2 = color(0,0,0);

  gradientMode(LINEAR);
  fill(gradient(color1,color2,"FirstGradient"));
  rect(0,0,width,height);


for (var i=0;i<3;i++) { //i<3, i<10, i<300

  beginShape( CLOSE );

  for ( var j = 0; j < 3; j++ ) {

    var randomNumber = random(1,10);

    if (randomNumber<5) {
      //stroke(255,255,255);
      fill(0,0,0);
    } else {
      //stroke(0,0,0);
      fill(255,255,255);
    }

    var x = random(1,210);
    var y = random(1,297);
    vertex (x,y);

  }

   endShape();
}

  }

  //PROBLEM 1: Wie kann auf Daten (Uhrzeit, Dokumentname) zugegriffen u. eingebunden werden?

  //stroke(255,255,255);

  //var color1 = color(255,255,255);
  //var color2 = color(0,0,0);
  //gradientMode(LINEAR);
  //fill(gradient(color1,color2,"Gradient"));

  //PROBLEM 2: Wie kann Gradient in loop eingebunden werden? Fehlermeldung: Basil Warning -> gradient(), a gradient named "Gradient" already existed. The old gradient is replaced by a new one.

  //PROBLEM 3: Wie kann ich jedes 2. Objekt ansprechen? Speziell: Eigenschaftenwechsel z.B. Verlauf

  //BlendMode.DIFFERENCE, BlendMode.OVERLAY, BlendMode.HUE, BlendMode.Multiply, BlendMode.SATURATION

