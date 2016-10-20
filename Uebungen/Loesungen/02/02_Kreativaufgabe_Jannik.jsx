//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

    b.units(b.MM);

    b.noFill();

    b.clear(b.doc());
    
    b.noStroke();

    
    for (var i = 0; i < 4;i++) {
        
        var x = b.random(b.width /4)
        var y = b.random(b.height /4)
        var w = b.random(b.width /2)
        var h = b.random(b.height /2)
        
        b.image ("image01.png",x, y, w, h);
        
        b.println ('x: '+ x + 'y:' + 'w:' + w + 'h:' + h);
        

    }

    for (var i = 0; i < b.random(1,8); i++) {

        b.noStroke();

        var ah = b.random(200) 
        var beh = b.random(200) 
        var ceh = b.random(200) 
        var deh = b.random(200) 
        
        b.fill(255, 255, 255); 
        b.rect(ah,beh,ceh,deh);
        }

    for (var i = 0; i < b.random(1,4); i++) {

        b.noStroke();

        var ah = b.random(600) 
        var beh = b.random(600) 
        var ceh = b.random(50,600) 
        var deh = b.random(600) 
        
        b.fill(0, 0, 0); 
        b.rect(ah,beh,ceh,deh);
        }

    for (var i = 0; i < b.random(1,13); i++) {
        
        var x1 = b.random(300)
        var y1 = b.random(300)
        var w2 = b.random(300)
        var h2 = b.random(300)

        b.stroke(0,0,0);
        b.strokeWeight (2);
    
        b.line(x1,y1,w2,h2);
        
       
    
    }

    b.noStroke();
    b.image ("image01.png",x, y, w, h);
  

}

b.go();