#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.noStroke();


  var islands = 5;    // anzahl der Inseln
  var size = 5;       // größe der kacheln



  var u = -20;
  var water = "water.jpg",
      sand  = "sand.jpg",
      tile = b.image('water.jpg', u,u, size, size),


      grass  = b.image('grass.jpg', u, u),
      sand  = b.image('sand.jpg', u, u);




  var bounds = b.bounds(tile),
      w = bounds.width,
      x = 0,
      y = 0;


  // draw background
  var bg = true;
  while( bg ) {
    var wat = b.image(water, x, y, size, size);
    var wBounds = b.bounds(wat);
    x += w;
    if(wBounds.right > b.width) {
      y += w;
      x = 0;
    }
    if(wBounds.top > b.height) {
      bg = false;
    }
  }


  for(var m=0; m<islands; m++){
    drawIsland();
  }


function drawIsland() {

          // draw island

  var islandSeedX = b.floor(b.random( b.width )),
      islandSeedY = b.floor(b.random( b.height )),
      islandWidth = b.floor(b.random( 1, 5 )),
      islandHeight= b.floor(b.random( 1, 5 ));



  for(var iY=0; iY<islandHeight; iY++) {
    for(var iX=0; iX<islandWidth; iX++) {
      var sand  = b.image('grass.jpg', islandSeedX+(iX*size), islandSeedY+(iY*size), size, size);
    }
  }

  islandSeedX -= size;
  islandSeedY -= size;


      for(var i=0; i<islandWidth; i++) {
        b.image('beach_center_top.jpg', islandSeedX+(i*size), islandSeedY, size, size);
      }


      for(var i=0; i<islandHeight; i++) {
        b.image('beach_right_center.jpg', islandSeedX+(islandWidth*size), islandSeedY+(i*size), size, size);
      }


      for(var i=0; i<islandWidth; i++) {
        b.image('beach_center_bottom.jpg', islandSeedX+(i*size), islandSeedY+(islandHeight*size), size, size);
      }


      for(var i=0; i<islandHeight; i++) {
        b.image('beach_left_center.jpg', islandSeedX, islandSeedY+(i*size), size, size);
      }

      b.image('beach_left_top.jpg', islandSeedX, islandSeedY, size, size);
      b.image('beach_right_top.jpg', islandSeedX+(islandWidth*size), islandSeedY, size, size);
      b.image('beach_right_bottom.jpg', islandSeedX+(islandWidth*size), islandSeedY+(islandHeight*size), size, size);
      b.image('beach_left_bottom.jpg', islandSeedX, islandSeedY+(islandHeight*size), size, size);


      }


}

b.go();

