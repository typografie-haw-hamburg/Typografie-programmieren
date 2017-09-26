var a = 80;
function setup() {
  
  //CSV laden
  var table = loadTable("daten.csv", "csv", "header");
  
  //Hintergrund 
  createCanvas(1000,1000);
  background (0);
  stroke(255);


  
  }
function draw() {
  
  
  
  // Linie 
  line(a, 0, a, height);
    for (var a =50 ; a < 300; a += 10) {
    line(900, 100, 500+a, 200+a);
    

   }
  
  for (var a = 50; a < 300; a += 10) {
    line(100+a, 200+a, 500+a, 200+a);

  }
  
    for (var a = 50; a < 300; a += 10) {
    line(100+a,200+a, 100+a, 100);
  }
  


  //
 }