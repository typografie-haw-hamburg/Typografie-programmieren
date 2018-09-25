//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  // accessing the project folder and the data folder
  var pf = b.projectFolder();
  var df = Folder(pf + "/data");

  // get all files from data folder
  var myFiles = df.getFiles();

  alert(myFiles);

  // place all .jpg files in the document
  for(var i = 0; i < myFiles.length; i++) {

    if(  b.endsWith(myFiles[i].toString(), ".jpg" ) ||  ) {
      b.image(myFiles[i], b.random(b.width), b.random(b.height));
    }

  }

};

b.go();
