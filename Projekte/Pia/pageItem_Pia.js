
// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {


  b.clear(b.doc());
  b.units(b.MM);


b.canvasMode(b.FACING_PAGES);
    
  b.rect(0, 0, b.width, b.height);
  
  b.addPage();
  b.addPage(); 
  
  var tf = b.text("Lorem ipsum", 10, 20, 300, 500);
  tf.createOutlines();

  var outlines = b.doc().pageItems.firstItem(); // das letzte hinzugefügte pageItem (Outlines sind in InDesign entweder ein Polygon oder eine Gruppe(bei mehrzeiligen Texten))

  b.itemSize(outlines, 390, 25);


}
b.go();