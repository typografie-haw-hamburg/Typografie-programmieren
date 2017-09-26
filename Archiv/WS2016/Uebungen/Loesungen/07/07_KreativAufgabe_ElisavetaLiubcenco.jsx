//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noStroke();

  var imgCount = 6;
  var allImgNames = [];

  for(var i = 0; i < imgCount; i++) {
    var imageName = "DSC_" + (i + 1) + ".jpg";
    allImgNames.push(imageName);
  }

  while(allImgNames.length > 0){
    
    var randomImageNumber = b.floor(   b.random( 0, allImgNames.length )   );
    var randomImageName = allImgNames[randomImageNumber];

    allImgNames.splice(randomImageNumber, 1);

    var img = b.image(randomImageName, 20, 20);

    var scale = b.random(0.03, 0.07);
    var imgWidth = b.itemWidth(img) * scale;
    var imgHeight = b.itemHeight(img) * scale;

    var x = b.random(b.width - imgWidth || b.width / 8);
    var y = b.random(b.height - imgHeight);

    b.transformImage(img, x, y, imgWidth, imgHeight);

b.opacity(img, 30);

b.stroke(b.color(0));
b.strokeWeight(3);
    b.line(x + 8, y + 8, b.width/2, b.height/2);
    b.ellipse(x + 8, y + 8, 5, 5);

    b.noStroke();

  }

   b.ellipse(b.width/2, b.height/2, 25, 25);

}

b.go();
