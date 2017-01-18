//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

    b.clear (b.doc());
    b.units(b.MM);
    b.strokeWeight(5);
    
    //define stroke+bg color 50/50 black or white
    var sw = b.round (b.random(10));
    
    if (sw < 5) {
        
        b.fill(0,0,0)
        b.rect (0, 0, b.width, b.height);
        b.stroke(255,255,255);
        
        } else {
            
            b.stroke(0,0,0);
            
            }
    b.println("sw: " + sw);
    
    b.noFill();
    
    //rotate objects 45°
    b.rotate(b.radians(45)); 
    
    var i = 0
    var xpos = b.random(b.width /2);

    
    
    var amountRect = prompt ("Wie viele Quadrate willst du zeichnen?",20)
    var amountLines = prompt ("Wie viele Linien möchtest du zeichnen?",10)

  for (i; i < amountRect; i++) {
      
      var size = b.random(10,50);
      var x = xpos+i*5;
      var y = b.random (b.height);
    
      b.rect(x,y,size,size);
      
      var rwidth = b.random(b.width);
      
      
      
  
  for (i; i < amountLines; i++) {
      
      var randomNumber = b.random(100)
      
      if (randomNumber <60) {
          
      b.line (-b.width,0+i*10,b.height,0+i*10);
      

      }
      
         
      }
  b.println ("randomWidth" + i*15 + ":" + rwidth);
  
  
      
      
    
   
   

}

}

b.go();