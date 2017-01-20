
var startingX;
var startingY;
 
var allBeziers = [];



var CharactersReadyToDisp = "RM";


var disp = CharactersReadyToDisp.charAt(0);

// "Bildspiegel"
var marginX = 60;
var marginY = 90;

// minimale und maximale Linienanzahl
var iterationsMin = 0;
var iterationsMax = 800;  



function preload () {
 
  var characterJson = loadJSON("bezierjson.json");
  allBeziers.push(characterJson);
}



function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {

 
 var frames = random(100);
  startingPointX = [ marginX, width - marginX ];
  startingPointY = [ marginY, height - marginY, height / 2 ];
  
  
  createCanvas( windowWidth, windowHeight );
  background( 0 );
  
  // Anzahl der Loops (Linienanzahl)
  if ( frameCount % 50 === 0 ) {
   
   iterationsMin = round( random( 0, 200 ));
   iterationsMax = round( random( 0, 400 ));
  }
  
  if ( frameCount % 100 === 0 ) {
   disp = CharactersReadyToDisp.charAt(round(random(CharactersReadyToDisp.length - 1)));
  }
  // noch ein Loop, um über die Größe des Objekts zu loopen??  
  
  console.log(disp);
  
  ///////////////////Hier funktioniert es nicht. disp.length sollte die Anzahl der Objekte angeben, die z.B. den Buchstaben "R" in meiner JSON Datei bilden
  ////////////////// bsp: "R" : [{"x": 10, "y": 10}, {"x": 15, "y": 5}]; R.length wäre dann 2. 
  ///////Als ich in dem Loop noch direkt M.length stehen hatte, hat es funktioniert. Nun soll aber ein beliebiger Buchstabe aus meiner JSON Datei ausgewürfelt
  ////// werden ( siehe Zeile 9, 12 und 56). Ist das Problem vielleicht, das JS mir das R so ausgibt "R"? Das dann also 
  ////// allBeziers[0]."R".length    im Code steht?
  
  
  for ( var i = 0; i < allBeziers[0].disp.length; i++ ) {
   

   for ( var j = 0; j < random( iterationsMin, iterationsMax ); j++ ) {
    
    noStroke();
    var kurve = bzr( allBeziers[0].M[i].p0x, allBeziers[0].M[i].p0y, allBeziers[0].M[i].cp0x, allBeziers[0].M[i].cp0y, allBeziers[0].M[i].cp1x, allBeziers[0].M[i].cp1y, allBeziers[0].M[i].p1x, allBeziers[0].M[i].p1y );
    
    var Pxi = kurve.Pxi;
    var Pyi = kurve.Pyi;
    
    
    if ( frames < 1 ) {
     
     startingX = startingPointX[ round( random(0, startingPointX.length )) ];
     startingY = startingPointY[ round( random(0, startingPointY.length )) ];
     
     //frames = round( random(50, 250 ));
     break;
    
    } 
    //console.log(startingX);
    //console.log(startingY);
    stroke( 255 );
    line( startingX, startingY, Pxi, Pyi );
   break; 
   }
  }
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
  
  bezier( p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y );
  
  var result = {
   Pxi: Pxi,
   Pyi: Pyi
  };
  return result;
  
 }
