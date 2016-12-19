
randomP = [];

var startingX1;
var startingY1;
var startingX2;
var startingY2;
var startingX3;
var startingY3;
var startingX4;
var startingY4;
var startingX5;
var startingY5;
var startingX6;
var startingY6;

// hw = half width, hh = half height

var marginX = 60;
var marginY = 90;

var iterationsMin = 50;
var iterationsMax = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15)
}

function draw() {

startingPointX = [ marginX, width - marginX];
startingPointY = [marginY, height - marginY, height/2];

createCanvas(windowWidth, windowHeight);
var posX = width/2 - 200;

//Startpunkte und -anker  
var p0x = posX;
var p0y = 150;
var cp0x = posX;
var cp0y = 150;

//Endpunkte und -anker
var p1x = posX;
var p1y = height - 100;
var cp1x = posX;
var cp1y = height - 100;

// Entfernung in % von p0x,y. 0.1 = 10% etc.
for (var i = 0; i < random(iterationsMin, iterationsMax); i ++) {
  var ti = random(1);

var Axi = ( (1 - ti) * p0x ) + (ti * cp0x);
var Ayi = ( (1 - ti) * p0y ) + (ti * cp0y);
var Bxi = ( (1 - ti) * cp0x ) + (ti * cp1x);
var Byi = ( (1 - ti) * cp0y ) + (ti * cp1y);
var Cxi = ( (1 - ti) * cp1x ) + (ti * p1x);
var Cyi = ( (1 - ti) * cp1y ) + (ti * p1y);

var Dxi = ( (1 - ti) * Axi ) + (ti * Bxi);
var Dyi = ( (1 - ti) * Ayi ) + (ti * Byi);
var Exi = ( (1 - ti) * Bxi ) + (ti * Cxi);
var Eyi = ( (1 - ti) * Byi ) + (ti * Cyi);

// Punkt auf Bezier (entfernung in %(t) von p0)
var Pxi = ( (1 - ti) * Dxi ) + (ti * Exi);
var Pyi = ( (1 - ti) * Dyi ) + (ti * Eyi);

/*randomP.push(Pxi, Pyi);

if (frameCount % 2 == 0 ) {

  line ( randomP[0], randomP[1], randomP[2], randomP[3]);
  randomP.splice(0, randomP.length);
}  */ 




if (frameCount % 60 === 0) {
startingX1 = startingPointX[round(random(0, startingPointX.length))];
startingY1 = startingPointY[round(random(0, startingPointY.length))];

};

line (startingX1, startingY1, Pxi, Pyi);
  
}


noFill();
//bezier(p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y);
///////////////////////////////////////////////////////////////////////
p0x = posX ;
p0y = height- 100;
cp0x = posX;
cp0y = height - 100;

//Endpunkte und -anker
p1x = posX + 500;
p1y = height - 100;
cp1x = posX + 500;
cp1y = height - 100;

// Entfernung in % von p0x,y. 0.1 = 10% etc.
for (var i = 0; i < random(iterationsMin, iterationsMax); i ++) {
ti = random(1);

Axi = ( (1 - ti) * p0x ) + (ti * cp0x);
Ayi = ( (1 - ti) * p0y ) + (ti * cp0y);
Bxi = ( (1 - ti) * cp0x ) + (ti * cp1x);
Byi = ( (1 - ti) * cp0y ) + (ti * cp1y);
Cxi = ( (1 - ti) * cp1x ) + (ti * p1x);
Cyi = ( (1 - ti) * cp1y ) + (ti * p1y);

Dxi = ( (1 - ti) * Axi ) + (ti * Bxi);
Dyi = ( (1 - ti) * Ayi ) + (ti * Byi);
Exi = ( (1 - ti) * Bxi ) + (ti * Cxi);
Eyi = ( (1 - ti) * Byi ) + (ti * Cyi);

// Punkt auf Bezier (entfernung in %(t) von p0)
Pxi = ( (1 - ti) * Dxi ) + (ti * Exi);
Pyi = ( (1 - ti) * Dyi ) + (ti * Eyi);

/*randomP.push(Pxi, Pyi);

if (frameCount % 2 == 0 ) {

  line ( randomP[0], randomP[1], randomP[2], randomP[3]);
  randomP.splice(0, randomP.length);
}  */ 
if (frameCount % 100 === 0) {
startingX2 = startingPointX[round(random(0, startingPointX.length))];
startingY2 = startingPointY[round(random(0, startingPointY.length))];

}

line (startingX2, startingY2, Pxi, Pyi);

  
}
noFill();
//bezier(p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y);

///////////////////////////////////////////////////////////////////////
p0x = posX + 500;
p0y = height - 100;
cp0x = posX + 500;
cp0y = height - 100;

//Endpunkte und -anker
p1x = posX + 500;
p1y = height - 250;
cp1x = posX + 500;
cp1y = height - 250;

// Entfernung in % von p0x,y. 0.1 = 10% etc.
for (var i = 0; i < random(iterationsMin, iterationsMax); i ++) {
ti = random(1);

Axi = ( (1 - ti) * p0x ) + (ti * cp0x);
Ayi = ( (1 - ti) * p0y ) + (ti * cp0y);
Bxi = ( (1 - ti) * cp0x ) + (ti * cp1x);
Byi = ( (1 - ti) * cp0y ) + (ti * cp1y);
Cxi = ( (1 - ti) * cp1x ) + (ti * p1x);
Cyi = ( (1 - ti) * cp1y ) + (ti * p1y);

Dxi = ( (1 - ti) * Axi ) + (ti * Bxi);
Dyi = ( (1 - ti) * Ayi ) + (ti * Byi);
Exi = ( (1 - ti) * Bxi ) + (ti * Cxi);
Eyi = ( (1 - ti) * Byi ) + (ti * Cyi);

// Punkt auf Bezier (entfernung in %(t) von p0)
Pxi = ( (1 - ti) * Dxi ) + (ti * Exi);
Pyi = ( (1 - ti) * Dyi ) + (ti * Eyi);

/*randomP.push(Pxi, Pyi);

if (frameCount % 2 == 0 ) {

  line ( randomP[0], randomP[1], randomP[2], randomP[3]);
  randomP.splice(0, randomP.length);
}  */ 
if (frameCount % 80 === 0) {
startingX2 = startingPointX[round(random(0, startingPointX.length))];
startingY2 = startingPointY[round(random(0, startingPointY.length))];

};

line (startingX2, startingY2, Pxi, Pyi);

  
}
noFill();
//bezier(p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y);


///////////////////////////////////////////////////////////////////////
p0x = posX + 200;
p0y = height - 250;
cp0x = posX + 200;
cp0y = height - 250;

//Endpunkte und -anker
p1x = posX + 500;
p1y = height - 250;
cp1x = posX + 500;
cp1y = height - 250;

// Entfernung in % von p0x,y. 0.1 = 10% etc.
for (var i = 0; i < random(iterationsMin, iterationsMax); i ++) {
ti = random(1);

Axi = ( (1 - ti) * p0x ) + (ti * cp0x);
Ayi = ( (1 - ti) * p0y ) + (ti * cp0y);
Bxi = ( (1 - ti) * cp0x ) + (ti * cp1x);
Byi = ( (1 - ti) * cp0y ) + (ti * cp1y);
Cxi = ( (1 - ti) * cp1x ) + (ti * p1x);
Cyi = ( (1 - ti) * cp1y ) + (ti * p1y);

Dxi = ( (1 - ti) * Axi ) + (ti * Bxi);
Dyi = ( (1 - ti) * Ayi ) + (ti * Byi);
Exi = ( (1 - ti) * Bxi ) + (ti * Cxi);
Eyi = ( (1 - ti) * Byi ) + (ti * Cyi);

// Punkt auf Bezier (entfernung in %(t) von p0)
Pxi = ( (1 - ti) * Dxi ) + (ti * Exi);
Pyi = ( (1 - ti) * Dyi ) + (ti * Eyi);

/*randomP.push(Pxi, Pyi);

if (frameCount % 2 == 0 ) {

  line ( randomP[0], randomP[1], randomP[2], randomP[3]);
  randomP.splice(0, randomP.length);
}  */ 
line (startingX2, startingY2, Pxi, Pyi);
}
noFill();
//bezier(p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y);


///////////////////////////////////////////////////////////////////////
p0x = posX + 200;
p0y = 150;
cp0x = posX + 200;
cp0y = 150;

//Endpunkte und -anker
p1x = posX + 200;
p1y = height - 250;
cp1x = posX + 200;
cp1y = height - 250;

// Entfernung in % von p0x,y. 0.1 = 10% etc.
for (var i = 0; i <random(iterationsMin, iterationsMax); i ++) {
ti = random(1);

Axi = ( (1 - ti) * p0x ) + (ti * cp0x);
Ayi = ( (1 - ti) * p0y ) + (ti * cp0y);
Bxi = ( (1 - ti) * cp0x ) + (ti * cp1x);
Byi = ( (1 - ti) * cp0y ) + (ti * cp1y);
Cxi = ( (1 - ti) * cp1x ) + (ti * p1x);
Cyi = ( (1 - ti) * cp1y ) + (ti * p1y);

Dxi = ( (1 - ti) * Axi ) + (ti * Bxi);
Dyi = ( (1 - ti) * Ayi ) + (ti * Byi);
Exi = ( (1 - ti) * Bxi ) + (ti * Cxi);
Eyi = ( (1 - ti) * Byi ) + (ti * Cyi);

// Punkt auf Bezier (entfernung in %(t) von p0)
Pxi = ( (1 - ti) * Dxi ) + (ti * Exi);
Pyi = ( (1 - ti) * Dyi ) + (ti * Eyi);

/*randomP.push(Pxi, Pyi);

if (frameCount % 2 == 0 ) {

  line ( randomP[0], randomP[1], randomP[2], randomP[3]);
  randomP.splice(0, randomP.length);
}  */ 
line (startingPointX[1], startingPointY[1], Pxi, Pyi);
  
}
noFill();
//bezier(p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y);

//////////////////////////////////////////////////////////////////////

p0x = posX + 200;
p0y = 150;
cp0x = posX + 200;
cp0y = 150;

//Endpunkte und -anker
p1x = posX ;
p1y = 150;
cp1x = posX;
cp1y = 150;

// Entfernung in % von p0x,y. 0.1 = 10% etc.
for (var i = 0; i < random(iterationsMin, iterationsMax); i ++) {
ti = random(1);

Axi = ( (1 - ti) * p0x ) + (ti * cp0x);
Ayi = ( (1 - ti) * p0y ) + (ti * cp0y);
Bxi = ( (1 - ti) * cp0x ) + (ti * cp1x);
Byi = ( (1 - ti) * cp0y ) + (ti * cp1y);
Cxi = ( (1 - ti) * cp1x ) + (ti * p1x);
Cyi = ( (1 - ti) * cp1y ) + (ti * p1y);

Dxi = ( (1 - ti) * Axi ) + (ti * Bxi);
Dyi = ( (1 - ti) * Ayi ) + (ti * Byi);
Exi = ( (1 - ti) * Bxi ) + (ti * Cxi);
Eyi = ( (1 - ti) * Byi ) + (ti * Cyi);

// Punkt auf Bezier (entfernung in %(t) von p0)
Pxi = ( (1 - ti) * Dxi ) + (ti * Exi);
Pyi = ( (1 - ti) * Dyi ) + (ti * Eyi);

if (frameCount % 150 === 0) {
startingX5 = startingPointX[round(random(0, startingPointX.length))];
startingY5 = startingPointY[round(random(0, startingPointY.length))];

};

line (startingX5, startingY5, Pxi, Pyi);

  
}
noFill();
//bezier(p0x, p0y, cp0x, cp0y, cp1x, cp1y, p1x, p1y);




};
