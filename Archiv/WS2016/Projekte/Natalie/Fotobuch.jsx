//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noStroke();
  b.canvasMode (b.FACING_BLEEDS);  

  var imgCount = 96;
  var allImgNames=[];


  // lade Bilder in den Array
  for(var i = 1; i < imgCount + 0; i++) {
    var imgName = "" + i + ".png" ;
    allImgNames.push(imgName);
  }

  // b.text(allImgNames.length, 100, 100, 100, 100);

  var loopCount = allImgNames.length;

  // addiere seite, platziere bilder
  for (var j = 1; j <= loopCount; j++) {
    
    //b.page(j);

    var randomImgNumber = b.floor( b.random(allImgNames.length) );
    var randomImgName = allImgNames[randomImgNumber];
    allImgNames.splice(randomImgNumber, 1);

    var img = b.image(randomImgName, 0, 0);
    var imgWidth = b.itemWidth(img) / 7;
    var imgx = b.itemX(img);
    var imgy = b.itemY(img);
    var imgHeight = b.itemHeight(img) / 7;

    if (j == 1) {
      b.canvasMode(b.PAGE);
      b.fill(0);
      b.rect(100, 100, 100, 100);
      b.transformImage(img, b.random(0, b.width -imgWidth), b.random(b.height -imgHeight), imgWidth, imgHeight);
      b.canvasMode(b.FACING_BLEEDS);
    }

    if (j % 2 == 0) {
      b.transformImage(img, b.random(b.width / 2 -imgWidth), b.random(b.height -imgHeight), imgWidth, imgHeight);
    }
    else {
      b.transformImage(img, b.random(b.width / 2, b.width -imgWidth), b.random(b.height -imgHeight), imgWidth, imgHeight);
    }

    
    b.addPage();

    b.println(j);

  }
}

b.go();