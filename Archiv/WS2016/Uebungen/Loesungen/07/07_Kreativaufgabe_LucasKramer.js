//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noStroke();

  var imgCount = 12;
  var allImgNames = [];

  for(var i = 0; i < imgCount; i++) {
    var imageName = "" + (i + 1) + ".jpg";
    allImgNames.push(imageName);
  }

  var pageCount = b.pageCount();
  var counter = 0;
  var steps = 30;
  
  
  while(allImgNames.length > 0){
    
    // b.addPage();
  
    var randomImageNumber = b.floor(   b.random( 0, allImgNames.length )   );
    var randomImageName = allImgNames[randomImageNumber];

    allImgNames.splice(randomImageNumber, 1);
    
    // place image
    var img = b.image(randomImageName, 0, 0);

    // transform image
    var scale = b.random(0.2, 0.6);
    var imgWidth = b.itemWidth(img) * scale;
    var imgHeight = b.itemHeight(img) * scale;

    var x = b.random(b.width - imgWidth);
    var y = b.random(b.height - imgHeight);

    b.transformImage(img, x, y, imgWidth, imgHeight);


    // image "morph" to previous image location
    if (counter > 0){
      for( j = 2; j < steps + 1; j++) {
        var xDif = x - previousX;
        var yDif = y - previousY;
        var xStep = xDif / steps * j;
        var yStep = yDif / steps * j;
        var img = b.image(randomImageName, x - xStep, y - yStep, imgWidth / j, imgHeight / j);
      }
    }
    var previousX = x;
    var previousY = y;
    counter ++;
    b.println(counter)
  }

}

b.go();