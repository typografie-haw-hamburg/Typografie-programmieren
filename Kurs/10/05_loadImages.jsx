// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var myImportSettings = {
    filter: ["jpg", "jpeg"]
  }

  var myImageFolder = folder("~/Desktop/Galerie/");
  var myImageFiles = files(myImageFolder, myImportSettings);

  for(var i = 0; i < myImageFiles.length; i++) {

    var img = image(myImageFiles[i], width / 2, height / 2);
    referencePoint(CENTER);
    transform(img, "scale", 0.2);
    transform(img, "x", random(width));
    transform(img, "y", random(height));

  }

}
